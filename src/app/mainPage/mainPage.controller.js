function mainPageController() {
  var vm = this;
  vm.message = 'HELLO WORLD';
}

angular.module('clinicalWebsite').controller('mainPageController', mainPageController);
