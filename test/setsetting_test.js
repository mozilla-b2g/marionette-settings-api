suite('setSetting', function() {
  // requires
  var setSetting = require('../lib/setsetting'),
      getSetting = require('../lib/getsetting'),
      client = marionette.client(),
      skipError = require('./support/skip_error');

  skipError(client);

  test('setSetting can set a setting', function() {
    var startValue = getSetting(client, 'accessibility.screenreader');
    setSetting(client, 'accessibility.screenreader', !startValue);
    var newValue = getSetting(client, 'accessibility.screenreader');
    assert.notEqual(startValue, newValue);
  });

});
