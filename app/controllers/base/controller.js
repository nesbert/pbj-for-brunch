var Chaplin     = require('chaplin'),
    ViewHelpers = require('views/helper'),
    MainView    = require('views/layouts/main'),
    HeaderView  = require('views/layouts/header');

module.exports  = Chaplin.Controller.extend({
  // Place your application-specific controller features here.
  beforeAction: function() {
    this.compose('main', MainView);
    this.compose('header', HeaderView);
  }
});
