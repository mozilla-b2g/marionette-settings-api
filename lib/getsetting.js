var fs = require('fs');

/**
 * Get a setting
 *
 * @param {SettingsApi} SettingsApi state.
 * @param {String} name of the setting.
 * @param {Function} callback [Err err, String value].
 * @return {String} value of the setting.
 */
function getSetting(settingsApi, name, callback) {

  callback = callback || settingsApi._client.defaultCallback;

  var script = fs.readFileSync(
    __dirname + '/scripts/getsetting.js',
    'utf8'
  );

  return client.executeAsyncScript(script, function(err, operation) {
    // handle scripting error
    if (err) {
      console.log('err: ' + err);
      return callback(err);
    }

    // handle error from operation
    if (operation.error) {
      return callback(new Error(operation.error));
    }
    // return the value
    return callback(null, operation.result);
  });

}

module.exports.getSetting = getSetting;
