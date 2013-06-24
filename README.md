PBJ for Brunch
==============

[Brunch](http://brunch.io) skeleton/boilerplate for developing HTML5 applications. Main languages are Javascript, CSS and [Handlebars](http://handlebarsjs.com).

### Features

- [Brunch](http://brunch.io) workflow automation.
- [Backbone](http://backbonejs.org)/[Chaplin](http://chaplinjs.org) provides the application architecture.
- [Handlebars](http://handlebarsjs.com) for semantic templating.
- [Bootstrap](http://twitter.github.io/bootstrap/) for some UI/UX goodness.
- [Bower](http://bower.io) is used for front-end package management.
- [Modernizr](http://modernizr.com) for feature detection.
- [Initializr](http://www.initializr.com) as a HTML5 application starting point.
- [Framework TBD] for testing.

## Getting Started

Must have [node.js](http://nodejs.org), [Brunch](http://brunch.io) and [Bower](http://bower.io) installed.

### Installation

Create a new application.

```bash
brunch new <new-pbj-application> -s git@github.com:nesbert/pbj-for-brunch.git
```

Or clone this repository locally.

```bash
git clone git@github.com:nesbert/pbj-for-brunch.git <new-pbj-application>
```

Install Brunch & application dependencies.

```bash
npm install
```

## Workflow

Brunch [commands](https://github.com/brunch/brunch/blob/master/docs/commands.md) can be used to build and deploy the application.

```bash
# continuous incremental rebuild + web server (dev version)
brunch w -s

# build for deployment (optimized version)
brunch b -o

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
- [jQuery](http://jquery.com)
- [Modernizr](http://modernizr.com)
- [node.js](http://nodejs.org)
- [Underscore](http://underscorejs.org)

## License

[MIT](http://opensource.org/licenses/MIT)
