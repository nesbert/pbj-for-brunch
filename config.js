var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': function(path) {
          var included, scripts;
          scripts = [
            'vendor/modernizr/modernizr.js',
            'vendor/console-helper/index.js',
            'vendor/jquery/jquery.js',
            'vendor/underscore/underscore.js',
            'vendor/backbone/backbone.js',
            'vendor/chaplin/brunch/chaplin.js',
            'vendor/scripts/brunch-JavaScriptCompiler-handlebars.runtime-1.0.js',
            'vendor/bootstrap/js/bootstrap.js'
            ];
          return __indexOf.call(scripts, path) >= 0;
        }
      },
      order: {
        before: [
          'vendor/modernizr/modernizr.js',
          'vendor/console-helper/index.js',
          'vendor/jquery/jquery.js',
          'vendor/underscore/underscore.js',
          'vendor/backbone/backbone.js',
          'vendor/bootstrap/js/bootstrap.js'
        ]
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/,
        'css/vendor.css': function(path) {
          var included, styles;
          styles = [
            'vendor/normalize/normalize.css',
            'vendor/bootstrap/css/bootstrap.css'
            ];
          return __indexOf.call(styles, path) >= 0;
        }
      },
      order: {
        before: [
          'app/styles/base/style.css',
          'vendor/normalize/normalize.css',
          'vendor/bootstrap/css/bootstrap.css',
          'vendor/bootstrap/css/bootstrap-responsive.css'
          ],
        after: []
      }
    },
    templates: {
      joinTo: 'js/app.js'
    }
  }
};
