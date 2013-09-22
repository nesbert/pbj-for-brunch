var BaseView = require('views/base/view'),
    template = require('templates/layouts/header');

module.exports = BaseView.extend({

  autoRender: true,

  id: 'header',

  className: 'header',

  region: 'header',

  template: template

});
