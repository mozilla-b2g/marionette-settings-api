suite('getSetting', function() {
  // requires
  var SettingsApi = require('../lib/settingsapi'),
      getSetting = require('../lib/getsetting').getSetting
      client = createClient();

  marionette.plugin('mozSettingsApi', SettingsApi);

  test('getSetting can return a string', function(done) {
    getSetting(client.mozSettingsApi, 'language.current', function(err, value) {
      console.log(value);
      assert.ok(value.length > 0);
      done();
    });
  });

});
