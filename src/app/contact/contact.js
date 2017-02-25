angular.module('clinicalWebsite')
  .directive('contact', function () {
    return {
      restrict: 'E',
      scope: {
        //@ reads the attribute value, = provides two-way binding, & works with functions
        title: '@'         },
      templateUrl: 'app/contact/contact.tpl.html',
      controller: 'contactController as cCtrl',
      //link: function ($scope, element, attrs) { } //DOM manipulation
    };
  });
