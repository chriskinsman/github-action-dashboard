const express = require('express');
const router = express.Router();
const debug = require('debug')('action-dashboard:routes');
const gitHub = require('./github');

router.get('/owner', function (req, res, next) {
    const owner = process.env.GITHUB_ORG || process.env.GITHUB_USERNAME;
    debug(`/owner ${owner}`);
    res.send(owner);
});

router.get('/initialData', function (req, res, next) {
    const initialData = gitHub.getInitialData();
    res.send(initialData);
});

router.get('/runs/:owner/:repo/:workflow_id', function (req, res, next) {
    gitHub.refreshWorkflow(req.params.owner, req.params.repo, parseInt(req.params.workflow_id));
    res.send();
});

module.exports = router;