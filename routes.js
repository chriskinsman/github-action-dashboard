const debug = require("debug")("action-dashboard:routes");

class Routes {
  constructor(actions, owner) {
    this._owner = owner;
    this._actions = actions;
  }

  attach(router) {
    router.get("/owner", (req, res, next) => {
      debug(`/owner ${this._owner}`);
      res.send(this._owner);
    });

    router.get("/initialData", (req, res, next) => {
      const initialData = this._actions.getInitialData();
      res.send(initialData);
    });

    router.get("/runs/:owner/:repo/:workflow_id", (req, res, next) => {
      this._actions.refreshWorkflow(
        req.params.owner,
        req.params.repo,
        parseInt(req.params.workflow_id)
      );
      res.send();
    });
  }
}

module.exports = Routes;
