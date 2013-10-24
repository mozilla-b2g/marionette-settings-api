var fs = require('fs');

/**
 * Get a setting
 *
 * @param {Marionette.Client} client for marionette.
 * @param {String} name of the setting.
 * @return {String} value of the setting.
 */
function getSetting(client, name) {
  var script = fs.readFileSync(
    __dirname + '/scripts/getsetting.js',
    'utf8'
  );

  var result = client.executeAsyncScript(script, [name]);

  if (result.error) {
    throw new Error(result.error);
  }

  return result.value;
}

module.exports = getSetting;
