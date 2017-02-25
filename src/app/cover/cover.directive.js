angular.module('clinicalWebsite')
  .directive('cover', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/cover/cover.tpl.html',
      link: function ($scope, element, attrs) {

        $('.carousel').carousel({
          interval: false,
        })

      } //DOM manipulation
    };
  });
