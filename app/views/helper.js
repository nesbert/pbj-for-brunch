var Chaplin,
    __slice = [].slice;

Chaplin = require('chaplin');

// handlebars.js helpers

Handlebars.registerHelper('with', function(context, options) {
  if (!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(context);
  }
});

Handlebars.registerHelper('without', function(context, options) {
  var inverse;

  inverse = options.inverse;
  options.inverse = options.fn;
  options.fn = inverse;
  return Handlebars.helpers['with'].call(this, context, options);
});

Handlebars.registerHelper('url', function() {
  var options, params, routeName, _i;

  routeName = arguments[0];
  params = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []);
  options = arguments[_i++];
  return Chaplin.helpers.reverse(routeName, params);
});
