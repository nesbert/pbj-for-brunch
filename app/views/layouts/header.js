var BaseView = require('views/base/view'),
    template = require('templates/layouts/header');

var IndexView = BaseView.extend({

    autoRender: true,

    id: 'header',

    className: 'header',

    region: 'header',

    template: template

});

module.exports = IndexView;
