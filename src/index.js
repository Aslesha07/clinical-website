/* eslint linebreak-style: ["error", "unix"]*/
angular.module('clinicalWebsite', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider.state('mainPage', {
        url: '/home',
        templateUrl: 'app/mainPage/mainPage.tpl.html',
        controller: 'mainPageController'
      });
    }
  ]);
