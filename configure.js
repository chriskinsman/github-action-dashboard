const path = require('path');
const runStatus = require('./runstatus');

// Handle when server is started from vue-cli vs root
if (path.basename(process.cwd()) === 'client') {
    require('dotenv').config({ path: path.resolve(process.cwd(), '../.env') });
}
else {
    require('dotenv').config()
}
const debug = require('debug')('action-dashboard:configure');
//debug(`environment`, process.env);

const bodyParser = require('body-parser')
const routes = require('./routes')
const middleware = require('./webhooks')

module.exports = {
    before: (app) => {
        app.use(bodyParser.json());
        app.use('/api', routes);

        if (process.env.GITHUB_APP_WEBHOOK_SECRET) {
            debug(`Setting up webhooks path: /webhook`);
            app.use('/webhook', middleware);
        }
    },
    after: (app, server) => {
        // Attach socket.io to server
        runStatus.init(server);
    }
}
