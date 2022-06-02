const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");


module.exports = function(parameter) {

    logIt('DEBUG', 'Send String "' + parameter.osc_general_data + '" to ' + parameter.osc_general_path);
    
    var newMessage = new OSCMessage(parameter.osc_general_path);
    newMessage.addStringParameter(parameter.osc_general_data);

    OSCClient.send(newMessage);
}