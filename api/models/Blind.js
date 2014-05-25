/**
 * Blind
 *
 * @module      :: Blind
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      unique: true,
      required: true
    },

    status: {
      type: 'bool',
      required: true,
      defaultsTo: false
    },

    last_status: {
      type: 'bool',
      required: false,
      defaultsTo: true
    },

  },

  beforeUpdate: function(blind, cb) {

    // save previous state
    last_status = status;
    cb(null, user);

  },

};
