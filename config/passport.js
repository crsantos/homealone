/*
* @Author: crsantos
* @Date:   2014-04-30 09:27:51
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-01 01:21:41
*/

/**
 * Passport configuration
 */
var passport = require('passport');

module.exports.express = {
  customMiddleware: function(app)
  {
    app.use(passport.initialize());
    app.use(passport.session());
  }
};