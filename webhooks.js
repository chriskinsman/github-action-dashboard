const debug = require('debug')('action-dashboard:webhooks');
if (process.env.GITHUB_APP_WEBHOOK_SECRET) {

    const { Webhooks, createNodeMiddleware } = require("@octokit/webhooks");
    const github = require('./github');

    const webhooks = new Webhooks({
        secret: process.env.GITHUB_APP_WEBHOOK_SECRET,
    });


    webhooks.on('workflow_run', ({ id, name, payload }) => {
        debug(`workflow_run received id: ${id}, name: ${name}`, payload);
        github.mergeRuns([{
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
            status: payload.workflow_run.status === 'completed' ? payload.workflow_run.conclusion : payload.workflow_run.status,
            createdAt: payload.workflow_run.created_at,
            updatedAt: payload.workflow_run.updated_at
        }]);
    });

    if (!process.env.DOCKER_BUILD && process.env.GITHUB_APP_WEBHOOK_PORT) {
        const { GITHUB_APP_WEBHOOK_PORT = 8081 } = process.env;
        debug(`Setting up webhooks port: ${GITHUB_APP_WEBHOOK_PORT}`);

        require("http").createServer((req, res) => {
            debug(`received request path: ${req.url}`);
            if (req.url === '/ping') {
                debug('ping');
                res.statusCode = 200;
                res.end();
            }
            else {
                webhooks.middleware(req, res);
            }
        }).listen({ port: GITHUB_APP_WEBHOOK_PORT }, () => {
            console.log(`Listening for webhooks on ${GITHUB_APP_WEBHOOK_PORT}`);
        });
    }

    const middleware = createNodeMiddleware(webhooks, { path: "/webhook" });

    module.exports = middleware;
}