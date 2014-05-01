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

// var gpio = require("pi-gpio");

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

      // TODO: act on relay PIN

      // gpio.open(16, "output", function(err) {        // Open pin 16 for output
      //     gpio.write(16, 1, function() {            // Set pin 16 high (1)
      //         gpio.close(16);                        // Close pin 16
      //       });
      // });

      return res.json({info:"Acted", newstatus:status},200);

    };

    return res.json('Do not be evil!', 401);
  }

};
