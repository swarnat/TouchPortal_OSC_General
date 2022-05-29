const logIt = require("../helper/logIt");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(options) {
    var parameter = Math.floor(+(options.osc_general_data));

    logIt('DEBUG', 'Send Integer "' + parameter + '" to ' + options.osc_general_path);
    
    OSCClient.send(options.osc_general_path, parameter);
}