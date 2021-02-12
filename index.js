try {
    const { resolve } = require('path');
    const history = require('connect-history-api-fallback');
    const express = require('express');
    const configureAPI = require('./configure');
    const app = express();

    const { PORT = 80 } = process.env;

    // API
    configureAPI(app);

    // UI
    const publicPath = resolve(__dirname, './client/dist');
    const staticConf = { maxAge: '1y', etag: false };

    app.use(history());
    app.use(express.static(publicPath, staticConf));

    app.get('/', function (req, res) {
        res.render(path.join(__dirname + '/client/dist/index.html'))
    });

    // Go
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
}
catch (e) {
    console.error('Error on startup');
    console.error(e);
}
