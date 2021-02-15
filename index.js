try {
    const { resolve } = require('path');
    const history = require('connect-history-api-fallback');
    const express = require('express');
    const app = express();
    const server = require('http').createServer(app);

    const configureAPI = require('./configure');

    const { PORT = 8080 } = process.env;

    // API
    configureAPI.before(app);
    configureAPI.after(app, server);

    // UI
    const publicPath = resolve(__dirname, './client/dist');
    const staticConf = { maxAge: '1y', etag: false };

    app.use(history());
    app.use(express.static(publicPath, staticConf));

    app.get('/', function (req, res) {
        res.render(path.join(__dirname + '/client/dist/index.html'))
    });

    // Go
    server.listen(PORT, () => console.log(`Action Dashboard running on port ${PORT}`));
}
catch (e) {
    console.error('Error on startup');
    console.error(e);
}
