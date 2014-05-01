/*
* @Author: crsantos
* @Date:   2014-04-30 09:30:02
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-01 10:41:20
*/

/**
 * Allow any authenticated user.
 */
var passport = require('passport');

module.exports = function (req, res, done) {

  passport.authenticate('bearer', {session: false}, function(err, user, info) {

    console.log("Authenticating the user: "+user);
    console.log("err: "+err);
    console.log("info: "+info);
    // console.log(req);
    if (err) return done(err);
    if (user) return done();

    return res.send(403, {message: "You are not permitted to perform this action."});

  })(req, res);

};