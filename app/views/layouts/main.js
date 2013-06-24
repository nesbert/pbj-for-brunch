var BaseView = require('views/base/view'),
    template = require('templates/layouts/main');

var IndexView = BaseView.extend({

    container: 'body',

    id: 'site-container',

    regions: {
      '#header-region': 'header',
      '#main-region': 'main'
    },

    template: template

});

module.exports = IndexView;
