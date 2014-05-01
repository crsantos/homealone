/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    email: {
      type: 'string',
      unique: true,
      required: true
    },
    token: {
      type: 'string',
      required: true,
      minLength: 6
    }
  },

/*
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.token, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.token = hash;
          cb(null, user);
        }
      });
    });
  }
  */
};
