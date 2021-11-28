const path = require("path");
const runStatus = require("./runstatus");

// Handle when server is started from vue-cli vs root
if (path.basename(process.cwd()) === "client") {
  require("dotenv").config({ path: path.resolve(process.cwd(), "../.env") });
} else {
  require("dotenv").config();
}
const debug = require("debug")("action-dashboard:configure");

const bodyParser = require("body-parser");
const routes = require("./routes");

module.exports = {
  before: (app) => {
    if (!process.env.DOCKER_BUILD) {
      debug("configure before");
      app.use(bodyParser.json());
      app.use("/api", routes);
    }
  },
  after: (app, server) => {
    if (!process.env.DOCKER_BUILD) {
      debug("configure after");
      // Attach socket.io to server
      runStatus.init(server);
    }
  },
};

// Loads webhook support if GITHUB_APP_WEBHOOK_SECRET defined
if (!process.env.DOCKER_BUILD) {
  const webhooks = require("./webhooks");
}
