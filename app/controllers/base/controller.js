var ViewHelper  = require('libs/view-helper'),
    SiteView    = require('views/layouts/site'),
    HeaderView  = require('views/layouts/header'),
    FooterView  = require('views/layouts/footer');

module.exports  = Chaplin.Controller.extend({

  // Place your application-specific controller features here.

  beforeAction: function() {
    this.compose('site', SiteView);
    this.compose('header', HeaderView, {region:'header'});
    this.compose('footer', FooterView, {region:'footer'});
  }

});
