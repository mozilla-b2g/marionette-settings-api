suite('getSetting', function() {
  // requires
  var getSetting = require('../lib/getsetting'),
      client = marionette.client(),
      skipError = require('./support/skip_error');

  skipError(client);

  test('getSetting can return a string', function() {
    var value = getSetting(client, 'language.current');
    assert.equal(value, 'en-US');
  });

});
