//
// mocks.js
//
// A backend API mocking framework built on top of
// chaplin.js and sinon.js.
//
// Mocks.js intercepts and overrides XHR requests. Routes
// are used to match request and they are routed to a
// controller and action. This gives users the ability to
// create models and collections like normal and have
// functioning backend API. With little fuss and all at
// the client level.
//
// @todo add controller layer (Chaplin.Controller)
// @todo allow ability to ignore certain routes/URLs
// @todo extract to its own component, remove unnecessary
//       dependencies and open source this baby
//

var Chaplin   = require('chaplin'),
    Backbone  = require('backbone'),
    _         = require('underscore'),
    routes    = require('./routes');

var Mocks = window.Mocks = {};

Mocks.defaults = {
  debug: true,
  autoRespond: true,
  autoRespondAfter: 400,
  mocksBaseDir: 'mocks/',
  responseStatus: 200
};

Mocks.enabled = false;

var Server = Mocks.Server = function(options) {
  // set defaults
  this.options = _.extend({}, Mocks.defaults, options || {});
  // set internal variables

};

_.extend(Server.prototype, {

  start: function() {
    if (this.options.debug) {
      console.debug('Mocks.Server: started');
    }
    this.server = sinon.fakeServer.create();

    this.server.autoRespond = this.options.autoRespond;
    this.server.autoRespondAfter = this.options.autoRespondAfter;

    this.addRoutes(routes);
  },

  stop: function() {
    this.server.restore();
    if (this.options.debug) {
      console.debug('Mocks.Server: stopped');
    }
  },

  addRoutes: function(mockRoutes) {
    var options = this.options;

    // add routes for each request
    this.server.respondWith(/(.*)$/, function(xhr, url) {
      var match, run, m, reponse, params, log;

      // find matching route
      for (var r in mockRoutes) {
        var route = mockRoutes[r];
        if (xhr.method === route.method) {
          var regexUrl = route.url;
          if (!(regexUrl instanceof RegExp)) {
            // make sure string literal
            regexUrl = new RegExp('^' + regexUrl + '$');
          }
          if (regexUrl.test(url)) {
            match = route;
            break;
          }
        }
      }

      if (!match) {
        throw new Error('No match for "' + url + '"');
      }

      // expode run module#method
      run = match.run.split('#');

      // get module
      m = require(options.mocksBaseDir + run[0]);
      log = 'Mocks.Server: ' + url + ' -> ' + options.mocksBaseDir + run[0];

      // module is response
      if (run.length === 1) {
        response = m;
      } else {
        // execute method on module
        if (1 in run) {

          if (match.url instanceof RegExp) {
            params = url.match(match.url);
          }

          response = m[run[1]](params, match);
          log += '.' + run[1];
        }
      }

      if (!(response instanceof String)) {
        response = JSON.stringify(response);
      }

      xhr.respond(match.responseStatus || options.responseStatus, { 'Content-Type': 'application/json' }, response);

      if (options.debug) {
        console.debug(log);
      }
    });
  }

}, Backbone.Events);

module.exports = Mocks;
