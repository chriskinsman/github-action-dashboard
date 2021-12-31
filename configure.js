const bodyParser = require("body-parser");
const debug = require("debug")("action-dashboard:configure");
const express = require("express");
const path = require("path");
const Actions = require("./actions");
const GitHub = require("./github");
const Routes = require("./routes");
const RunStatus = require("./runstatus");
const WebHooks = require("./webhooks");

const baseDir = path.basename(process.cwd());
// Handle when server is started from vue-cli vs root
if (baseDir) {
  require("dotenv").config({ path: path.resolve(process.cwd(), "../.env") });
}
// Handle when server is started from
else {
  require("dotenv").config();
}

const {
  PORT = 8080,
  LOOKBACK_DAYS = 7,
  GITHUB_APPID,
  GITHUB_APP_CLIENTID,
  GITHUB_APP_CLIENTSECRET,
  GITHUB_APP_INSTALLATIONID,
  GITHUB_APP_WEBHOOK_PORT = 8081,
  GITHUB_APP_WEBHOOK_SECRET,
  GITHUB_APP_WEBHOOK_PATH = "/",
  GITHUB_ORG,
  GITHUB_USERNAME,
} = process.env;

// Handles newlines \n in private key
const GITHUB_APP_PRIVATEKEY = Buffer.from(
  process.env.GITHUB_APP_PRIVATEKEY || "",
  "base64"
).toString("utf-8");

// For sharing runStatus across before/after stages
let _runStatus = null;

module.exports = {
  before: (app) => {
    debug("configure before");

    const gitHub = new GitHub(
      GITHUB_ORG,
      GITHUB_USERNAME,
      GITHUB_APPID,
      GITHUB_APP_PRIVATEKEY,
      GITHUB_APP_CLIENTID,
      GITHUB_APP_CLIENTSECRET,
      GITHUB_APP_INSTALLATIONID
    );
    _runStatus = new RunStatus();
    const actions = new Actions(gitHub, _runStatus, LOOKBACK_DAYS);
    const routes = new Routes(
      actions,
      process.env.GITHUB_ORG || process.env.GITHUB_USERNAME
    );
    const router = express.Router();

    routes.attach(router);

    app.use(bodyParser.json());
    app.use("/api", router);

    const webhooks = new WebHooks(
      PORT,
      GITHUB_APP_WEBHOOK_SECRET,
      GITHUB_APP_WEBHOOK_PORT,
      GITHUB_APP_WEBHOOK_PATH,
      gitHub,
      actions,
      app
    );

    // Start everything
    actions.start();
    webhooks.start();
  },
  after: (app, server) => {
    debug("configure after");

    // Attach socket.io to server
    _runStatus.start(server);
  },
};
