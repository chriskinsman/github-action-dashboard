const path = require('path');
const runStatus = require('./runstatus');

const cookieSession = require('cookie-session')


// Handle when server is started from vue-cli vs root
if (path.basename(process.cwd()) === 'client') {
    require('dotenv').config({ path: path.resolve(process.cwd(), '../.env') });
}
else {
    require('dotenv').config()
}
const passport = require('./auth')
const debug = require('debug')('action-dashboard:configure');
//debug(`environment`, process.env);

const bodyParser = require('body-parser')
const routes = require('./routes')

module.exports = {
    before: (app) => {
        app.use(cookieSession({
            name: 'mysession',
            keys: ['vueauthrandomkey'],
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }))
        app.use(bodyParser.json());
        if (process.env.DASHBOARD_USERS) {
          app.use(passport.initialize());
          app.use(passport.session());
        }
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

// Loads webhook support if GITHUB_APP_WEBHOOK_SECRET defined
const webhooks = require('./webhooks');
