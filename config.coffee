exports.config =
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        # limit build to listed files
        'js/vendor.js': (path) ->
          scripts = [
            'vendor/modernizr/modernizr.js',
            'vendor/console-helper/index.js',
            'vendor/jquery/jquery.js',
            'vendor/underscore/underscore.js',
            'vendor/backbone/backbone.js',
            'vendor/chaplin/brunch/chaplin.js',
            # TODO make this more portable
            'vendor/scripts/brunch-JavaScriptCompiler-handlebars.runtime-1.0.js',
            'vendor/bootstrap/js/bootstrap.js'
          ]
          included = path in scripts
      order:
        before: [
          'vendor/modernizr/modernizr.js',
          'vendor/console-helper/index.js',
          'vendor/jquery/jquery.js',
          'vendor/underscore/underscore.js',
          'vendor/backbone/backbone.js'
          'vendor/bootstrap/js/bootstrap.js',
        ]

    stylesheets:
      joinTo:
        'css/app.css': /^app/
        # limit build to listed files
        'css/vendor.css': (path) ->
          styles = [
            'vendor/normalize/normalize.css',
            'vendor/bootstrap/css/bootstrap.css',
            #'vendor/bootstrap/css/bootstrap-responsive.css', # optional
          ]
          included = path in styles
      order:
        before: [
          'app/styles/base/style.css',
          'vendor/normalize/normalize.css',
          'vendor/bootstrap/css/bootstrap.css',
          'vendor/bootstrap/css/bootstrap-responsive.css',
        ]
        after: []

    templates:
      joinTo: 'js/app.js'
