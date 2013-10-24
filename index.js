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
  }
};


module.exports = function(client) {
  return new SettingsApi(client);
};

