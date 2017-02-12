angular.module('clinicalWebsite')
  .directive('about', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/about/about.tpl.html',
    };
  });
