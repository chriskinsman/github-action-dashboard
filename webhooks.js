const debug = require("debug")("action-dashboard:webhooks");
const { Webhooks, createNodeMiddleware } = require("@octokit/webhooks");
const http = require("http");

class WebHooks {
  constructor(
    sitePort,
    secret,
    webhookPort,
    webhookPath,
    gitHub,
    actions,
    expressApp
  ) {
    if (secret) {
      this._secret = secret;
      this._webhookPort = webhookPort;
      this._sitePort = sitePort;
      this._gitHub = gitHub;
      this._actions = actions;
      if (sitePort === webhookPort) {
        this._defaultPath = "/webhook";
      } else {
        this._defaultPath = "/";
      }
      this._path = webhookPath || this._defaultPath;

      // Fail in the case that the ports for the main site and webhooks
      // are the same and the path is explicitly set to /
      if (sitePort === webhookPort && this._path === "/") {
        throw new Error(
          "Path cannot be / when the webhooks are running on the same port as the main site"
        );
      }

      this._expressApp = expressApp;
      this._enabled = true;
    }
  }

  start() {
    if (this._enabled) {
      debug(
        `Setting up webhooks port: ${this._webhookPort}, path: ${this._path}`
      );
      // OctoKit webhooks, not this module
      const webhooks = new Webhooks({
        secret: this._secret,
      });

      webhooks.onError((error) => {
        console.dir(error);
        // console.error(
        //   `Webhook error occured in "${error.event.name} handler: ${error.stack}"`
        // );
      });

      const middleware = createNodeMiddleware(webhooks, { path: this._path });
      webhooks.on("workflow_run", this.workflowRun);

      if (this._sitePort !== this._webhookPort) {
        this._server = http
          .createServer((req, res) => {
            debug(`received request path: ${req.url}`);
            if (req.url === "/ping") {
              debug("ping");
              res.statusCode = 200;
              res.end();
            } else {
              middleware(req, res);
            }
          })
          .listen({ port: this._webhookPort }, () => {
            console.log(
              `Listening for webhooks on ${this._webhookPort} at ${this._path}`
            );
          });
      } else {
        this._expressApp.use(this._path, middleware);
        console.log(
          `Listening for webhooks on ${this._webhookPort} at ${this._path}`
        );
      }
    } else {
      debug("Webhooks disabled");
    }
  }

  // Mainly used by testing functions to cleanly shutdown web server
  stop() {
    if (this._enabled && this._server && this._server.listening) {
      this._server.close();
    }
  }

  async workflowRun({ id, name, payload }) {
    try {
      debug(`workflow_run received id: ${id}, name: ${name}`, payload);
      let usage = null;

      if (payload.workflow_run.status === "completed") {
        debug(`getting usage for id: ${id}, name: ${name}`);
        usage = await this._gitHub.getUsage(
          payload.workflow_run.repository.owner.login,
          payload.workflow_run.repository.name,
          payload.workflow_run.workflow_id,
          payload.workflow_run.id
        );
      }

      debug(`merging runs for id: ${id}, name: ${name}`);
      this._actions.mergeRuns([
        {
          runId: payload.workflow_run.id,
          repo: payload.workflow_run.repository.name,
          owner: payload.workflow_run.repository.owner.login,
          workflowId: payload.workflow_run.workflow_id,
          runNumber: payload.workflow_run.run_number,
          workflow: payload.workflow_run.name,
          branch: payload.workflow_run.head_branch,
          sha: payload.workflow_run.head_sha,
          message: payload.workflow_run.head_commit.message,
          committer: payload.workflow_run.head_commit.committer.name,
          status:
            payload.workflow_run.status === "completed"
              ? payload.workflow_run.conclusion
              : payload.workflow_run.status,
          createdAt: payload.workflow_run.created_at,
          updatedAt: payload.workflow_run.updated_at,
          durationMs: usage?.run_duration_ms,
        },
      ]);
      debug(`runs merged for id: ${id}, name: ${name}`);
    } catch (e) {
      console.error(
        `Error processing workflow_run received id: ${id}, name: ${name}`,
        payload
      );
    }
  }
}

module.exports = WebHooks;
