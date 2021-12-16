const debug = require("debug")("action-dashboard:actions");
const _ = require("lodash");
const dayjs = require("dayjs");
const pLimit = require("p-limit");

class Actions {
  constructor(gitHub, runStatus, lookbackDays) {
    this._gitHub = gitHub;
    this._runStatus = runStatus;
    // Cache all workflows to speed up refresh
    this._runs = [];
    this._refreshingRuns = false;
    this._lookbackDays = lookbackDays;
  }

  start() {
    debug("Performing initial refreshRuns");
    // Load the initial set
    this.refreshRuns();

    debug("Setting interval to refreshRuns at 15m");
    // Refresh by default every fifteeen minutes
    setInterval(this.refreshRuns, 1000 * 60 * 15);
  }

  async getMostRecentRuns(repoOwner, repoName, workflowId) {
    try {
      const daysAgo = dayjs().subtract(this._lookbackDays, "day");
      const runs = await this._gitHub.listWorkflowRuns(
        repoOwner,
        repoName,
        workflowId
      );
      if (runs.length > 0) {
        const groupedRuns = _.groupBy(runs, "head_branch");
        const rows = _.reduce(
          groupedRuns,
          (result, runs, branch) => {
            debug(`branch`, branch);
            if (daysAgo.isBefore(dayjs(runs[0].created_at))) {
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
                status:
                  runs[0].status === "completed"
                    ? runs[0].conclusion
                    : runs[0].status,
                createdAt: runs[0].created_at,
                updatedAt: runs[0].updated_at,
              });
            } else {
              debug(
                `skipping run.id: ${runs[0].id} created_at: ${runs[0].created_at}`
              );
            }

            return result;
          },
          []
        );

        debug(
          `getting duration of runs owner: ${repoOwner}, repo: ${repoName}, workflowId: ${workflowId}`
        );

        // Get durations of runs
        const limit = pLimit(10);
        const getUsagePromises = rows.map((row) => {
          return limit(async () => {
            const usage = await this._gitHub.getUsage(
              repoOwner,
              repoName,
              workflowId,
              row.runId
            );
            if (usage?.run_duration_ms) {
              row.durationMs = usage.run_duration_ms;
            }

            return row;
          });
        });

        const rowsWithDuration = await Promise.all(getUsagePromises);

        debug(
          `most recent runs owner: ${repoOwner}, repo: ${repoName}, workflowId: ${workflowId}`,
          rowsWithDuration
        );
        return rows;
      } else {
        return [];
      }
    } catch (e) {
      console.error("Error getting runs", e);
      return [];
    }
  }

  mergeRuns(runs) {
    // Merge into cache
    runs.forEach((run) => {
      debug(`merging run`, run);
      const index = _.findIndex(this._runs, {
        workflowId: run.workflowId,
        branch: run.branch,
      });
      if (index >= 0) {
        this._runs[index] = run;
      } else {
        this._runs.push(run);
      }
      this._runStatus.updatedRun(run);
    });

    debug("merged runs", this._runs);
  }

  async refreshRuns() {
    // Prevent re-entrant calls
    if (this._refreshingRuns) {
      return;
    }

    debug("Starting refreshing runs");
    try {
      this._refreshingRuns = true;
      const repos = await this._gitHub.listRepos();
      for (const repo of repos) {
        debug(`repo: ${repo.name}`);
        const workflows = await this._gitHub.listWorkflowsForRepo(
          repo.name,
          repo.owner.login
        );
        if (workflows.length > 0) {
          for (const workflow of workflows) {
            debug(`workflow: ${workflow.name}`);
            const runs = await this.getMostRecentRuns(
              repo.owner.login,
              repo.name,
              workflow.id
            );
            // Not using apply or spread in case there are a large number of runs returned
            this.mergeRuns(runs);
          }
        }
      }
    } catch (e) {
      console.error("Error getting initial data", e);
    } finally {
      debug("Finished refreshing runs");
      this._refreshingRuns = false;
    }
  }

  async refreshWorkflow(repoOwner, repoName, workflowId) {
    const runs = await this.getMostRecentRuns(repoOwner, repoName, workflowId);
    this.mergeRuns(runs);
  }

  getInitialData() {
    debug(`getInitialData this._runs.length: ${this._runs.length}`);
    if (this._runs.length === 0 && !this._refreshingRuns) {
      debug("getInitialData calling refreshRuns");
      this.refreshRuns();
    }

    return this._runs;
  }
}

module.exports = Actions;
