/* eslint linebreak-style: ["error", "unix"]*/
angular.module('clinicalWebsite', ['appTemplateCache','ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
    }
  ]);
