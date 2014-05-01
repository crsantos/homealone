/*
* @Author: crsantos
* @Date:   2014-04-30 09:31:02
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-01 11:29:14
*/

var passport = require('passport')
  , util = require('util')
  , BearerStrategy = require('passport-http-bearer').Strategy;

/**
 * BearerStrategy
 *
 * This strategy is used to authenticate either users or clients based on an access token
 * (aka a bearer token).  If a user, they must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 */
 var bearer = passport.use(new BearerStrategy('bearer',

  function(token, done) {

    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: '*' });
    });

  }

));