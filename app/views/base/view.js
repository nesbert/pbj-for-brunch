module.exports = Chaplin.View.extend({

  /**
   * @see https://github.com/chaplinjs/chaplin-boilerplate-plain/blob/master/js/views/base/view.js
   */
  getTemplateFunction: function() {
    var template = this.template, templateFunc = null;

    if (typeof template === 'string') {
      templateFunc = Handlebars.compile(template);
      this.constructor.prototype.template = templateFunc;
    } else {
      templateFunc = template;
    }

    return templateFunc;
  }

});
