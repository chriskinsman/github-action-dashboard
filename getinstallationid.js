require('dotenv').config()
const { createAppAuth } = require("@octokit/auth-app");
const { Octokit } = require("@octokit/rest");

const _appId = process.env.GITHUB_APPID;
// Handles newlines \n in private key
const _privateKey = Buffer.from(process.env.GITHUB_APP_PRIVATEKEY || "", "base64").toString("utf-8");
const _clientId = process.env.GITHUB_APP_CLIENTID;
const _clientSecret = process.env.GITHUB_APP_CLIENTSECRET;

const octokit = new Octokit({
    auth: {
        appId: _appId,
        privateKey: _privateKey,
        clientId: _clientId,
        clientSecret: _clientSecret,
    },
    authStrategy: createAppAuth
});

octokit.apps.listInstallations()
    .then(response => {
        response.data.forEach((installation) => {
            console.log(`Account: ${installation.account.login}, installation id: ${installation.id}`);
        });
    })
    .catch(err => {
        console.error(err);
    });