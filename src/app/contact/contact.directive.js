angular.module('clinicalWebsite')
  .directive('contact', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/contact/contact.tpl.html',
      controller: 'contactController as cCtrl',
    };
  });
