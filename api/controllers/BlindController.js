/**
 * BlindController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var gpio = require("pi-gpio");
var constants = require("../../config/constants");

module.exports = {

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to BlindController)
   */
  _config: {},

  act: function(req, res) {

    var status = req.param('status');

    sails.log.info("Received status to act: "+status);

    if (status && !isNaN(status)) {

      // TODO: Refactor this into a PINManager
      gpio.open(constants.PIN1, "output", function(err) {        // Open pin X for output
          gpio.write(constants.PIN1, status, function() {        // Set pin X to the desired state
              gpio.close(constants.PIN1);                        // Close pin X
            });
      });

      return res.json({info:"Acted", newstatus:status},200);

    };

    return res.json('Do not be evil!', 401);
  }

};
