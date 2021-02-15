const debug = require('debug')('action-dashboard:runstatus');

let _client = null;

module.exports.init = function init(server) {
    debug('initializing');
    const io = require('socket.io')(server);
    io.on('connection', client => {
        debug('connected');
        _client = client;
    });
}

module.exports.updatedRun = function updatedRun(run) {
    if (_client) {
        debug(`emitting updatedRun: `, run);
        _client.emit('updatedRun', run);
    }
};
