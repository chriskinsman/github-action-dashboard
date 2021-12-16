const debug = require("debug")("action-dashboard:runstatus");

class RunStatus {
  start(server) {
    debug("initializing");
    const io = require("socket.io")(server);
    io.on("connection", (client) => {
      debug("connected");
      this._client = client;
    });
  }

  updatedRun(run) {
    if (this._client) {
      debug(`emitting updatedRun: `, run);
      this._client.emit("updatedRun", run);
    }
  }
}

module.exports = RunStatus;
