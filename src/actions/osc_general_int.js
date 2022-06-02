const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");


module.exports = function(parameter) {
    var value = Math.floor(+(parameter.osc_general_data));

    logIt('DEBUG', 'Send Integer "' + value + '" to ' + parameter.osc_general_path);
    
    var newMessage = new OSCMessage(parameter.osc_general_path);
    newMessage.addIntegerParameter(value);

    OSCClient.send(newMessage);
}