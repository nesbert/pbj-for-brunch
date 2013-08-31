var  Application = require('application');

$(function() {

  // Start mocking framework if using config.js otherwise
  // exception will be thrown since mocks module is not
  // incluled in config.release.js

  // try {
  //    var Mocks = require('mocks/mocks');
  //    (new Mocks.Server()).start();
  // } catch (error) {
  //    // release build do nothing
  // }

  (new Application()).initialize();

});
