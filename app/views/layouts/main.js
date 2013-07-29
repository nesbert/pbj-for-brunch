var BaseView = require('views/base/view'),
    template = require('templates/layouts/main');

module.exports = BaseView.extend({

    container: 'body',

    id: 'site-container',

    regions: {
      '#header-region': 'header',
      '#footer-region': 'footer',
      '#main-region': 'main'
    },

    template: template

});
