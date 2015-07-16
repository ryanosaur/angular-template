(function() {
  'use strict';

  angular.module('app.config.routes', [])
    .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'templates/home.html'
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $locationProvider.hashPrefix('!');
    });
})();
