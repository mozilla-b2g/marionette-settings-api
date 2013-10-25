/**
 * @constructor
 * @param {Marionette.Client} client Marionette client to use.
 */
function SettingsApi(client) {
  this._client = client;
}

SettingsApi.prototype = {
  get: function(name) {
    return require('./lib/getsetting')(this._client, name);
  },
  set: function(name, value) {
    return require('./lib/setsetting')(this._client, name, value);
  }
};


module.exports = function(client) {
  return new SettingsApi(client);
};

