var BaseView = require('views/base/view'),
    template = require('templates/layouts/site');

module.exports = BaseView.extend({

    container: 'body',

    id: 'site-container',

    regions: {
      main: '#main-container',
      header: '#header-container',
      footer: '#footer-container'
    },

    template: template

});
