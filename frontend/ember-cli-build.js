/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['FACEBOOK_APP_ID'],
      path: {
        development: '../backend/.env',
      }
    }
  });

  // pace
  app.import('bower_components/pace/pace.js');

  return app.toTree();
};
