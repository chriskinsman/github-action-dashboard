const { createAppAuth } = require("@octokit/auth-app");
const { throttling } = require("@octokit/plugin-throttling");
const { retry } = require("@octokit/plugin-retry");
const { Octokit } = require("@octokit/rest");
const debug = require("debug")("action-dashboard:github");

class GitHub {
  constructor(
    _org,
    _user,
    _appId,
    _privateKey,
    _clientId,
    _clientSecret,
    _installationId,
    _gheHost
  ) {
    this._gheHost = _gheHost;
    this._org = _org;
    this._user = _user;
    this._appId = _appId;
    this._privateKey = _privateKey;
    this._clientId = _clientId;
    this._clientSecret = _clientSecret;
    this._installationId = _installationId;

    const MyOctoKit = Octokit.plugin(throttling).plugin(retry);
    this._octokit = new MyOctoKit({
      auth: {
        appId: _appId,
        privateKey: _privateKey,
        clientId: _clientId,
        clientSecret: _clientSecret,
        installationId: _installationId,
      },
      authStrategy: createAppAuth,
      baseUrl:  (this._gheHost) ? `https://${this._gheHost}/api/v3` : "https://api.github.com",
      throttle: {
        onRateLimit: (retryAfter, options) => {
          console.error(
            `Request quota exhausted for request ${options.method} ${options.url}`
          );

          if (options.request.retryCount === 0) {
            // only retries once
            console.error(`Retrying after ${retryAfter} seconds!`);
            return true;
          }
        },
        onAbuseLimit: (retryAfter, options) => {
          console.error(
            `Abuse detected for request ${options.method} ${options.url}`
          );
        },
      },
    });

    // Allows us to use the dashboard for user based repos or org based repos
    this._listRepos = this._org
      ? this._octokit.repos.listForOrg
      : this._octokit.repos.listForUser;
    this._owner = this._org ? { org: this._org } : { username: this._user };

    debug("Using owner:", this._owner);
  }

  async listRepos() {
    try {
      const repos = await this._octokit.paginate(this._listRepos, this._owner);
      return repos;
    } catch (e) {
      console.error("Error getting repos", e);
      return [];
    }
  }

  async listWorkflowsForRepo(repoName, repoOwner) {
    try {
      const workflows = await this._octokit.paginate(
        this._octokit.actions.listRepoWorkflows,
        { repo: repoName, owner: repoOwner }
      );
      return workflows;
    } catch (e) {
      console.error("Error getting workflows", e);
      return [];
    }
  }

  async getUsage(repoOwner, repoName, workflowId, run_id) {
    try {
      const usage = await this._octokit.actions.getWorkflowRunUsage({
        repo: repoName,
        owner: repoOwner,
        workflow_id: workflowId,
        run_id: run_id,
      });
      return usage.data;
    } catch (e) {
      console.error("Error getting usage", e);
      return null;
    }
  }

  async listWorkflowRuns(repoOwner, repoName, workflowId) {
    try {
      const runs = await this._octokit.paginate(
        this._octokit.actions.listWorkflowRuns,
        {
          repo: repoName,
          owner: repoOwner,
          workflow_id: workflowId,
        }
      );

      return runs;
    } catch (e) {
      console.error("Error getting runs", e);
      return null;
    }
  }
}

module.exports = GitHub;
