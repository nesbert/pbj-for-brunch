var BaseView = require('./base/view'),
    template = require('templates/index');

var IndexView = BaseView.extend({

    autoRender: true,

    className: 'index-page',

    template: template

});

module.exports = IndexView;
