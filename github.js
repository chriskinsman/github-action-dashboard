const { createAppAuth } = require("@octokit/auth-app");
const { throttling } = require('@octokit/plugin-throttling');
const { retry } = require('@octokit/plugin-retry');
const { Octokit } = require("@octokit/rest");
const debug = require('debug')('action-dashboard:github');
const _ = require('lodash');
const dayjs = require('dayjs');

const runStatus = require('./runstatus');

const MyOctoKit = Octokit
    .plugin(throttling)
    .plugin(retry);

const _org = process.env.GITHUB_ORG;
const _user = process.env.GITHUB_USERNAME;
const _appId = process.env.GITHUB_APPID;
// Handles newlines \n in private key
const _privateKey = Buffer.from(process.env.GITHUB_APP_PRIVATEKEY || "", "base64").toString("utf-8");
const _clientId = process.env.GITHUB_APP_CLIENTID;
const _clientSecret = process.env.GITHUB_APP_CLIENTSECRET;
const _installationId = process.env.GITHUB_APP_INSTALLATIONID;

// Cache all workflows to speed up refresh
let _runs = [];
let _refreshingRuns = false;
let _stats = {};

const octokit = new MyOctoKit({
    auth: {
        appId: _appId,
        privateKey: _privateKey,
        clientId: _clientId,
        clientSecret: _clientSecret,
        installationId: _installationId
    },
    authStrategy: createAppAuth,
    throttle: {
        onRateLimit: (retryAfter, options) => {
            console.error(`Request quota exhausted for request ${options.method} ${options.url}`);

            if (options.request.retryCount === 0) {
                // only retries once
                console.error(`Retrying after ${retryAfter} seconds!`);
                return true;
            }
        },
        onAbuseLimit: (retryAfter, options) => {
            console.error(`Abuse detected for request ${options.method} ${options.url}`);
        }
    }
});

// Allows us to use the dashboard for user based repos or org based repos
const _listRepos = _org ? octokit.repos.listForOrg : octokit.repos.listForUser;
const _owner = _org ? { org: _org } : { username: _user };

debug('Using owner:', _owner);


const GitHub = {}

GitHub.listRepos = async function listRepos() {
    try {
        const repos = await octokit.paginate(_listRepos, _owner);
        return repos;
    } catch (e) {
        console.error('Error getting repos', e);
        return [];
    }
};

GitHub.listWorkflowsForRepo = async function listWorkflowsForRepo(repoName, repoOwner) {
    try {
        const workflows = await octokit.paginate(octokit.actions.listRepoWorkflows, { repo: repoName, owner: repoOwner });
        return workflows;
    } catch (e) {
        console.error('Error getting workflows', e);
        return [];
    }
};


GitHub.getMostRecentRuns = async function getMostRecentRuns(repoOwner, repoName, workflowId) {
    try {
        const sevenDaysAgo = dayjs().subtract(7, 'day');
        const runs = await octokit.paginate(octokit.actions.listWorkflowRuns, { repo: repoName, owner: repoOwner, workflow_id: workflowId });
        if (runs.length > 0) {
            const groupedRuns = _.groupBy(runs, 'head_branch')
            const rows = _.reduce(groupedRuns, (result, runs, branch) => {
                debug(`branch`, branch);
                if (sevenDaysAgo.isBefore(dayjs(runs[0].created_at))) {
                    debug(`adding run.id: ${runs[0].id}`);
                    result.push({
                        runId: runs[0].id,
                        repo: runs[0].repository.name,
                        owner: repoOwner,
                        workflowId: workflowId,
                        runNumber: runs[0].run_number,
                        workflow: runs[0].name,
                        branch: runs[0].head_branch,
                        sha: runs[0].head_sha,
                        message: runs[0].head_commit.message,
                        committer: runs[0].head_commit.committer.name,
                        status: runs[0].status === 'completed' ? runs[0].conclusion : runs[0].status,
                        createdAt: runs[0].created_at,
                        updatedAt: runs[0].updated_at
                    });
                }
                else {
                    debug(`skipping run.id: ${runs[0].id} created_at: ${runs[0].created_at}`);
                }

                return result;
            }, []);

            debug(`most recent runs owner: ${repoOwner}, repo: ${repoName}, workflowId: ${workflowId}`, rows);
            return rows;
        }
        else {
            return [];
        }
    } catch (e) {
        console.error('Error getting runs', e);
        return [];
    }
};

GitHub.refreshWorkflow = async function refreshWorkflow(repoOwner, repoName, workflowId) {
    const runs = await GitHub.getMostRecentRuns(repoOwner, repoName, workflowId);
    GitHub.mergeRuns(runs);
};

GitHub.mergeRuns = function mergeRuns(runs) {
    // Merge into cache
    runs.forEach((run) => {
        console.dir(run);
        const index = _.findIndex(_runs, { workflowId: run.workflowId, branch: run.branch });
        if (index >= 0) {
            _runs[index] = run;
        }
        else {
            _runs.push(run);
        }
        runStatus.updatedRun(run);
    });

    debug('merged runs', _runs);
};

GitHub.refreshRuns = async function refreshRuns() {
    // Prevent re-entrant calls
    if (_refreshingRuns) {
        return;
    }

    debug('Starting refreshing runs');
    try {
        _refreshingRuns = true;
        const repos = await GitHub.listRepos();
        _stats.repos_total = repos.length;
        _stats.workflows_total = 0;
        _stats.repos_with_workflows = {};
        for (const repo of repos) {
            debug(`repo: ${repo.name}`);
            const workflows = await GitHub.listWorkflowsForRepo(repo.name, repo.owner.login);
            if (workflows.length > 0) {
                _.merge(_stats.repos_with_workflows, { [repo.name]: workflows.length });
                for (const workflow of workflows) {
                    debug(`workflow: ${workflow.name}`);
                    _stats.workflows_total++;
                    const runs = await GitHub.getMostRecentRuns(repo.owner.login, repo.name, workflow.id);
                    // Not using apply or spread in case there are a large number of runs returned
                    GitHub.mergeRuns(runs);
                }
            }
        }
        _stats.repos_with_workflows_total = Object.keys(_stats.repos_with_workflows).length
        debug(_stats);
    } catch (e) {
        console.error('Error getting initial data', e);
    }
    finally {
        debug('Finished refreshing runs');
        _refreshingRuns = false;
    }
};

GitHub.getInitialData = function getInitialData() {
    debug(`getInitialData _runs.length: ${_runs.length}`);
    if (_runs.length === 0 && !_refreshingRuns) {
        debug('getInitialData calling refreshRuns');
        GitHub.refreshRuns();
    }

    return {"stats": _stats, "runs": _runs};
};

if (!process.env.DOCKER_BUILD) {
    debug('Performing initial refreshRuns');
    // Load the initial set
    GitHub.refreshRuns();

    debug('Setting interval to refreshRuns at 15m');
    // Refresh by default every fifteeen minutes
    setInterval(GitHub.refreshRuns, 1000 * 60 * 15);
}

module.exports = GitHub;