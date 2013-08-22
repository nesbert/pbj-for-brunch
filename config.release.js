var config = require('./config').config;

// override app.js ignore mocks and contracts
config.files.javascripts.joinTo['js/app.js'] = /^app(\/|\\)(?!mocks|contracts)/;

// override vendor.js for release
config.files.javascripts.joinTo['js/vendor.js'] = function(path) {
  var scripts = [
    // list of vendor files to concatenate
    'vendor/modernizr/modernizr.js',
    'vendor/console-helper/index.js',
    'vendor/jquery/jquery.js',
    'vendor/underscore/underscore.js',
    'vendor/backbone/backbone.js',
    'vendor/chaplin/brunch/chaplin.js',
    'vendor/scripts/brunch-JavaScriptCompiler-handlebars.runtime-1.0.js',
    'vendor/bootstrap/js/bootstrap.js'
    // removed 'vendor/sinonjs/sinon.js'
    ];
  return Array.prototype.indexOf.call(scripts, path) >= 0;
};

exports.config = config;
