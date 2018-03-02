Package.describe({
  name: 'meteormogul:vuetify-dist',
  // Will keep this in synch with version of Vuetify exported
  version: '1.0.4',
  // Brief, one-line summary of the package.
  summary: 'Simple binding to Vuetify for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor-mogul/mogul-vuetify-dist.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');    // use same versions of packages used by Meteor 1.6.1
  api.use('ecmascript');        // necessary for export / import of Vuetify
                                // NOTE: version constrained by api.versionsFrom
  api.addFiles('vuetify.css');  // addFiles not mainModule
  api.mainModule('vuetify.js'); // mainModule not addFiles
  api.export("Vuetify");        // so symbol is available in meteor app
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteormogul:vuetify-dist');
  api.mainModule('vuetify-dist-tests.js');
});
