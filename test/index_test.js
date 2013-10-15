var SettingsAPI = require('../lib/settingsapi');

marionette('public interface', function() {
  var client = createClient();
  marionette.plugin('SettingsAPI', require('../index'));

  suite('#getSetting', function() {
//    var value;
//
//    setup(function(done) {
//      if (client.isSync) {
//        apps = client.apps.list();
//        done();
//      } else {
//        client.apps.list(function(err, _apps) {
//          apps = _apps;
//          done();
//        });
//      }
//    });

    test('should get single setting', function() {
      value = client.SettingsAPI.getSetting('language.current');
      assert(value.length > 0);
    });

  });

});
