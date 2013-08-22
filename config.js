exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': function(path) {
          // list of vendor files to concatenate
          var scripts = [
            'vendor/modernizr/modernizr.js',
            'vendor/console-helper/index.js',
            'vendor/jquery/jquery.js',
            'vendor/underscore/underscore.js',
            'vendor/backbone/backbone.js',
            'vendor/chaplin/brunch/chaplin.js',
            'vendor/scripts/brunch-JavaScriptCompiler-handlebars.runtime-1.0.js',
            'vendor/bootstrap/js/bootstrap.js',
            'vendor/sinonjs/sinon.js'
            ];
          return Array.prototype.indexOf.call(scripts, path) >= 0;
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
          // list of vendor files to concatenate
          var styles = [
            'vendor/normalize/normalize.css',
            'vendor/bootstrap/css/bootstrap.css'
            ];
          return Array.prototype.indexOf.call(styles, path) >= 0;
        }
      },
      order: {
        before: [
          'app/styles/base/style.styl',
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
  },
  plugins: {
    jshint: {
      pattern: /^app\/.*\.js$/,
      options: {
        bitwise: true,
        curly: true,
        quotmark: true
      },
      globals: {
        jQuery: true
      }
    }
  }
};
