var BaseView = require('views/base/view'),
    template = require('templates/layouts/footer');

module.exports = BaseView.extend({

  autoRender: true,

  id: 'footer',

  className: 'footer',

  region: 'footer',

  template: template

});
