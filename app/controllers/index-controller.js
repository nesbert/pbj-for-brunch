var Controller = require('controllers/base/controller'),
    View       = require('views/index');

module.exports = Controller.extend({

  index: function() {
    this.adjustTitle('Yummy!');
    this.view = new View({region:'main'});
  }

});
