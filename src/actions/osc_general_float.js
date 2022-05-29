const logIt = require("../helper/logIt");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(options) {
    // Internal JavaScript works with Float64, so we must round to Float32
    var parameter = Math.fround(+(options.osc_general_data));

    logIt('DEBUG', 'Send Integer "' + parameter + '" to ' + options.osc_general_path);
    
    OSCClient.send(options.osc_general_path, parameter);
}