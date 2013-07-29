var Chaplin     = require('chaplin'),
    ViewHelpers = require('views/helper'),
    MainView    = require('views/layouts/main'),
    HeaderView  = require('views/layouts/header'),
    FooterView  = require('views/layouts/footer');

module.exports  = Chaplin.Controller.extend({
  // Place your application-specific controller features here.
  beforeAction: function() {
    this.compose('main', MainView);
    this.compose('header', HeaderView);
    this.compose('footer', FooterView);
  }
});
