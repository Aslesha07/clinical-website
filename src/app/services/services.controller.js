function servicesController() {
  const vm = this;
  vm.message = 'HELLO WORLD';
  vm.desc = '';

  const listOfServices = [
    'Manual Therapy',
    'Diet and Nutrition',
    'Magnet Therapy',
    'Massage Therapy',
    'Pre/Post Natal Exercises',
    'Therapeutic Exercises',
    'Sports Injuries',
    'Kinesio Taping',
    'Ultrasound Treatment',
    'Electrical Stimulation',
    'Acute and Chronic Pain Management',
    'Mechanical Traction'
  ];

  vm.getServicesNames = function () {
    return listOfServices;
  };

  vm.getDesc = function () {
    return null;
  };

  vm.disableDesc = function () {
    return vm.desc !== '';
  };
}

angular.module('clinicalWebsite').controller('servicesController', servicesController);
