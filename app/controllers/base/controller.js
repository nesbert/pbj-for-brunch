var Chaplin     = require('chaplin'),
    ViewHelpers = require('views/helper'),
    MainView    = require('views/layouts/main'),
    HeaderView  = require('views/layouts/header');

var Controller = Chaplin.Controller.extend({
  // Place your application-specific controller features here.
  beforeAction: function() {
    this.compose('main', MainView);
    this.compose('header', HeaderView);
  }
});

module.exports = Controller;
