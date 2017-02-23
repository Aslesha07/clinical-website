'use strict';

var cov_1pmjpfw1uo = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\services\\services.controller.js',
      hash = 'f813826cfa74b85f90ba9a50aca27374b233a28a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\services\\services.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 13
        },
        end: {
          line: 2,
          column: 17
        }
      },
      '1': {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 29
        }
      },
      '2': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 15
        }
      },
      '3': {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 19,
          column: 3
        }
      },
      '4': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      },
      '5': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 26
        }
      },
      '6': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 4
        }
      },
      '7': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 16
        }
      },
      '8': {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 31,
          column: 4
        }
      },
      '9': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 26
        }
      },
      '10': {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 87
        }
      }
    },
    fnMap: {
      '0': {
        name: 'servicesController',
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 27
          }
        },
        loc: {
          start: {
            line: 1,
            column: 30
          },
          end: {
            line: 32,
            column: 1
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 21,
            column: 24
          },
          end: {
            line: 21,
            column: 25
          }
        },
        loc: {
          start: {
            line: 21,
            column: 36
          },
          end: {
            line: 23,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 25,
            column: 15
          },
          end: {
            line: 25,
            column: 16
          }
        },
        loc: {
          start: {
            line: 25,
            column: 27
          },
          end: {
            line: 27,
            column: 3
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 29,
            column: 19
          },
          end: {
            line: 29,
            column: 20
          }
        },
        loc: {
          start: {
            line: 29,
            column: 31
          },
          end: {
            line: 31,
            column: 3
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function servicesController() {
  ++cov_1pmjpfw1uo.f[0];

  var vm = (++cov_1pmjpfw1uo.s[0], this);
  ++cov_1pmjpfw1uo.s[1];
  vm.message = 'HELLO WORLD';
  ++cov_1pmjpfw1uo.s[2];
  vm.desc = '';

  var listOfServices = (++cov_1pmjpfw1uo.s[3], ['Manual Therapy', 'Diet and Nutrition', 'Magnet Therapy', 'Massage Therapy', 'Pre/Post Natal Exercises', 'Therapeutic Exercises', 'Sports Injuries', 'Kinesio Taping', 'Ultrasound Treatment', 'Electrical Stimulation', 'Acute and Chronic Pain Management', 'Mechanical Traction']);

  ++cov_1pmjpfw1uo.s[4];
  vm.getServicesNames = function () {
    ++cov_1pmjpfw1uo.f[1];
    ++cov_1pmjpfw1uo.s[5];

    return listOfServices;
  };

  ++cov_1pmjpfw1uo.s[6];
  vm.getDesc = function () {
    ++cov_1pmjpfw1uo.f[2];
    ++cov_1pmjpfw1uo.s[7];

    return null;
  };

  ++cov_1pmjpfw1uo.s[8];
  vm.disableDesc = function () {
    ++cov_1pmjpfw1uo.f[3];
    ++cov_1pmjpfw1uo.s[9];

    return vm.desc !== '';
  };
}

++cov_1pmjpfw1uo.s[10];
angular.module('clinicalWebsite').controller('servicesController', servicesController);