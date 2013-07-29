var BaseView = require('./base/view'),
    template = require('templates/index');

module.exports = BaseView.extend({

    autoRender: true,

    className: 'index-page',

    template: template

});
