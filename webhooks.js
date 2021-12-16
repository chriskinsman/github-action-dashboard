const debug = require("debug")("action-dashboard:webhooks");
const { Webhooks, createNodeMiddleware } = require("@octokit/webhooks");

class WebHooks {
  constructor(secret, port, gitHub, actions) {
    if (secret) {
      this._secret = secret;
      this._port = port || 8081;
      this._gitHub = gitHub;
      this._actions = actions;
      this._enabled = true;
    }
  }

  start() {
    if (this._enabled) {
      debug(`Setting up webhooks port: ${this._port}`);
      // OctoKit webhooks, not this module
      const webhooks = new Webhooks({
        secret: this._secret,
      });

      const middleware = createNodeMiddleware(webhooks, { path: "/" });
      webhooks.on("workflow_run", this.workflowRun);

      require("http")
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
        .listen({ port: this._port }, () => {
          console.log(`Listening for webhooks on ${this._port}`);
        });
    } else {
      debug("Webhooks disabled");
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
