(function() {
  'use strict';

  angular.module('app', [
    'ui.router',

    // app dependencies
    'app.config',
    'app.controllers',
    'app.models',
    'app.directives'
  ]);
})();
