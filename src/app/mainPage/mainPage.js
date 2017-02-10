angular.module('clinicalWebsite')
  .config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('mainPage', {
        url: '/home',
        templateUrl: 'app/mainPage/mainPage.tpl.html',
        controller: 'mainPageController'
      });
    }
  ]);
