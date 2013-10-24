marionette('public interface', function() {
  var skipError = require('./support/skip_error');
  var client = marionette.client();
  marionette.plugin('SettingsAPI', require('../index'));

  skipError(client);

  suite('#getSetting', function() {
    test('should get single setting', function() {
      value = client.SettingsAPI.get('language.current');
      assert(value.length > 0);
    });
  });

});
