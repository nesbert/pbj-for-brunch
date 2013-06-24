var Chaplin = require('chaplin');

var View = Chaplin.View.extend({

  getTemplateFunction: function() {
    return this.template;
  }

});

module.exports = View;
