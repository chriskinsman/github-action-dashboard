const path = require('path');
// Handle when server is started from vue-cli vs root
if (path.basename(process.cwd()) === 'client') {
    require('dotenv').config({ path: path.resolve(process.cwd(), '../.env') });
}
else {
    require('dotenv').config()
}
const debug = require('debug')('action-dashboard:configure');
debug(`environment`, process.env);

const bodyParser = require('body-parser')
const routes = require('./routes')

module.exports = app => {
    app.use(bodyParser.json());
    app.use('/api', routes);
}
