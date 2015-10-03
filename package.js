Package.describe({
  name: 'scuba:models',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'A package that brings ECMAScript2015 classes to use as models.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/kayvanbree/models',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('models.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('scuba:models');
});
