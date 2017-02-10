/* eslint linebreak-style: ["error", "unix"]*/
angular.module('clinicalWebsite', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
    }
  ]);
