angular.module('clinicalWebsite')
  .directive('services', function () {
    return {
      restrict: 'E',
      scope: {
        //@ reads the attribute value, = provides two-way binding, & works with functions
        title: '@'         },
      templateUrl: 'app/services/services.tpl.html',
      controller: 'servicesController as sCtrl',
      //link: function ($scope, element, attrs) { } //DOM manipulation
    };
});
