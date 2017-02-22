function mainPageController($location, $anchorScroll) {
  var vm = this;
  vm.message = 'HELLO WORLD';

  vm.scrollTo = function(id) {
    $location.hash(id);
    console.log($location.hash());
    $anchorScroll();
  };
}
mainPageController.$inject = ['$location', '$anchorScroll'];

angular.module('clinicalWebsite').controller('mainPageController', mainPageController);
