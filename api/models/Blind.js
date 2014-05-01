/**
 * Blind
 *
 * @module      :: Model
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

  },

};
