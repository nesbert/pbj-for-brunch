exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': function(path) {
          // list of vendor files to concatenate
          var scripts = [
            'bower_components/modernizr/modernizr.js',
            'bower_components/console-helper/index.js',
            'bower_components/jquery/jquery.js',
            'bower_components/underscore/underscore.js',
            'bower_components/backbone/backbone.js',
            'bower_components/chaplin/chaplin.js',
            'bower_components/bootstrap/js/bootstrap.js',
            'bower_components/holderjs/holder.js',
            'bower_components/sinonjs/sinon.js'
            ];
          return Array.prototype.indexOf.call(scripts, path) >= 0;
        }
      },
      order: {
        before: [
          'bower_components/modernizr/modernizr.js',
          'bower_components/console-helper/index.js',
          'bower_components/jquery/jquery.js',
          'bower_components/underscore/underscore.js',
          'bower_components/backbone/backbone.js',
          'bower_components/chaplin/chaplin.js',
          'bower_components/bootstrap/js/bootstrap.js',
          'bower_components/holderjs/holder.js',
          'bower_components/sinonjs/sinon.js'
        ]
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/
//        'css/app.css': /^app/,
//        'css/vendor.css': function(path) {
//          console.log(path);
//          // list of vendor files to concatenate
//          var styles = [
//            'bower_components/bootstrap/css/bootstrap.css',
//            'bower_components/bootstrap/css/bootstrap-theme.css'
//            ];
//          return Array.prototype.indexOf.call(styles, path) >= 0;
//        }
      },
      order: {
        before: [
          'bower_components/bootstrap/css/bootstrap.css',
          'bower_components/bootstrap/css/bootstrap-theme.css',
          'app/styles/base/style.styl'
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
