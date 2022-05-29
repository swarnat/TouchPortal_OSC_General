const logIt = require('../helper/logIt');

const Client = require('./node-osc/Client.js');
var OSCCLient = null;

module.exports = {
    connect: function(host, port) {
        logIt("DEBUG","OSC Client: Connect to Server " + host + ":" + port);

        OSCClient = new Client(host, port);
    },

    send: function(path, parameter) {
        if(OSCClient === null) throw 'OSC Client not connected';

        OSCClient.send(path, parameter);
    }
}