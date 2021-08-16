const express = require('express');
const router = express.Router();
const debug = require('debug')('action-dashboard:routes');
const gitHub = require('./github');
const passport = require('passport')


const authMiddleware = (req, res, next) => {
    if (process.env.DASHBOARD_USERS) {
        if (!req.isAuthenticated()) {
            res.status(401).send('You are not authenticated')
        } else {
            return next()
        }
    } else {
        // skip middleware if no users defined
        return next()
    }
}

router.get('/owner', authMiddleware, function (req, res, next) {
    const owner = process.env.GITHUB_ORG || process.env.GITHUB_USERNAME;
    if (process.env.DASHBOARD_USERS) {
        res.statusCode = 210;
    }
    debug(`/owner ${owner}`);
    res.send(owner);
});

router.get('/initialData', authMiddleware, function (req, res, next) {
    const initialData = gitHub.getInitialData();
    res.send(initialData);
});

router.get('/runs/:owner/:repo/:workflow_id', authMiddleware, function (req, res, next) {
    gitHub.refreshWorkflow(req.params.owner, req.params.repo, parseInt(req.params.workflow_id));
    res.send();
});

// Login user with passport
router.post('/login', function (req, res, next) {
    debug('/login');
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return next(err);
        }
    
        if (!user) {
            console.log("login error")
            return res.status(400).send([user, "Cannot log in", info]);
        }
    
        req.login(user, err => {
            console.log("logged in")
            res.send("Logged in");
        });
    })(req, res, next);
});

// Logout user
router.get('/logout', function (req, res, next) {
    req.logout();
    console.log("logged out")
    return res.send("logged out");
});

// Get the current user
router.get('/user', function (req, res, next) {
    res.send(req.user);
});

module.exports = router;