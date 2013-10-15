(function() {

  console.log('it worked!');
  SpecialPowers.addPermission('settings-read', true, document);
  var req = window.navigator.mozSettings.createLock().get(name);
  req.onsuccess = function() {
    console.log('setting retrieved');
    result = name === '*' ? req.result : req.result[name];
    marionetteScriptFinished({ result: result });
  };
  req.onerror = function() {
    console.log('error getting setting', req.error.name);
    marionetteScriptFinished({ error: req.error.name });
  };
  marionetteScriptFinished({ result: 'bob-test' });

})();
