var Chaplin    = require('chaplin'),
    Controller = require('controllers/base/controller'),
    View       = require('views/index');

// set page title
Chaplin.mediator.publish('!adjustTitle', 'Yummy!');

module.exports = Controller.extend({
  index: function() {
    this.view = new View({region:'main'});
  }
});
