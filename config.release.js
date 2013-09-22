var config = require('./config').config;

// override app.js ignore mocks and contracts
config.files.javascripts.joinTo['js/app.js'] = /^app(\/|\\)(?!mocks|contracts)/;

// override vendor.js for release
config.files.javascripts.joinTo['js/vendor.js'] = function(path) {
  var scripts = [
    // list of vendor files to concatenate
    'bower_components/modernizr/modernizr.js',
    'bower_components/console-helper/index.js',
    'bower_components/jquery/jquery.js',
    'bower_components/underscore/underscore.js',
    'bower_components/backbone/backbone.js',
    'bower_components/chaplin/chaplin.js',
    'bower_components/bootstrap/js/bootstrap.js',
    'bower_components/holderjs/holder.js',
    // removed 'bower_components/sinonjs/sinon.js'
    ];
  return Array.prototype.indexOf.call(scripts, path) >= 0;
};

exports.config = config;
