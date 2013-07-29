var Chaplin = require('chaplin');

module.exports = Chaplin.View.extend({

  getTemplateFunction: function() {
    return this.template;
  }

});
