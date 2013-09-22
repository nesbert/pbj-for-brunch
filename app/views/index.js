var BaseView = require('./base/view'),
    template = require('templates/index');

module.exports = BaseView.extend({

  autoRender: true,

  className: 'index-page',

  template: template,

  attach: function() {
    BaseView.prototype.attach.apply(this, arguments);

    // init placholders
    Holder.run();
  }

});
