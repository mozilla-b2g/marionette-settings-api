var fs = require('fs');

/**
 * Set a setting
 *
 * @param {Marionette.Client} client for marionette.
 * @param {String} name of the setting.
 * @param {String} value of the setting.
 */
function setSetting(client, name, value) {
  var script = fs.readFileSync(
    __dirname + '/scripts/setsetting.js',
    'utf8'
  );

  var result = client.executeAsyncScript(script, [name, value]);

  if (result.error) {
    throw new Error(result.error);
  }

}

module.exports = setSetting;
