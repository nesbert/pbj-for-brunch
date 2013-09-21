PB&J for Brunch
==============

[Brunch](http://brunch.io) skeleton/boilerplate for developing HTML5 applications. Main languages are Javascript, CSS/[Stylus](http://learnboost.github.io/stylus/) and [Handlebars](http://handlebarsjs.com).

### Features

- [Brunch](http://brunch.io) workflow automation.
- [Backbone](http://backbonejs.org)/[Chaplin](http://chaplinjs.org) provides the application architecture.
- [Handlebars](http://handlebarsjs.com) for semantic templating.
- [Stylus](http://learnboost.github.io/stylus/) for css preprocessing.
- [Bootstrap](http://twitter.github.io/bootstrap/) for some UI/UX goodness.
- [Bower](http://bower.io) is used for front-end package management.
- [Modernizr](http://modernizr.com) for feature detection.
- [Initializr](http://www.initializr.com) as a HTML5 application starting point.
- [JSHint](http://www.jshint.com) for javascript linting.
- [Framework TBD] for testing.

## Getting Started

Must have [node.js](http://nodejs.org), [Brunch](http://brunch.io) and [Bower](http://bower.io) installed.

### Installation

Create a new application via [Brunch](http://brunch.io)@1.6.7.

```bash
brunch new <new-pbj-application> -s git@github.com:nesbert/pbj-for-brunch.git
```

Or clone this repository locally and install dependencies.

```bash
# clone and name application
git clone git@github.com:nesbert/pbj-for-brunch.git <new-pbj-application>

# change to project directory
cd <new-pbj-application>

# install application dependencies
npm install
```

## Workflow

Brunch [commands](https://github.com/brunch/brunch/blob/master/docs/commands.md) can be used to build and deploy the application.

```bash
# continuous incremental rebuild + web server (dev version)
./node_modules/.bin/brunch w -s

# build for deployment (optimized version)
./node_modules/.bin/brunch b -o

# view aplication
open http://localhost:3333
```

## The Stack

Made by OSS <3.

- [Backbone](http://backbonejs.org)
- [Brunch](http://brunch.io)
- [Bootstrap](http://twitter.github.io/bootstrap/)
- [Bower](http://bower.io)
- [Chaplin](http://chaplinjs.org)
- [Handlebars](http://handlebarsjs.com)
- [Initializr](http://www.initializr.com)
- [JSHint](http://www.jshint.com)
- [jQuery](http://jquery.com)
- [Modernizr](http://modernizr.com)
- [node.js](http://nodejs.org)
- [Stylus](http://learnboost.github.io/stylus/)
- [Underscore](http://underscorejs.org)

## License

[MIT](http://opensource.org/licenses/MIT)
