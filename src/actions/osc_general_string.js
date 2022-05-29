const logIt = require("../helper/logIt");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {

    logIt('DEBUG', 'Send String "' + parameter.osc_general_data + '" to ' + parameter.osc_general_path);
    
    OSCClient.send(parameter.osc_general_path, parameter.osc_general_data);
}