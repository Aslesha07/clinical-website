'use strict';

var cov_1ik1gnzxz6 = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\mainPage\\mainPage.controller.js',
      hash = '866722ed13b67dc2eda6d32d7caa8462cab900a4',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\mainPage\\mainPage.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 11
        },
        end: {
          line: 2,
          column: 15
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
          line: 5,
          column: 2
        },
        end: {
          line: 9,
          column: 4
        }
      },
      '3': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 23
        }
      },
      '4': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 34
        }
      },
      '5': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 20
        }
      },
      '6': {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 60
        }
      },
      '7': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 87
        }
      }
    },
    fnMap: {
      '0': {
        name: 'mainPageController',
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
            column: 54
          },
          end: {
            line: 10,
            column: 1
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 17
          }
        },
        loc: {
          start: {
            line: 5,
            column: 29
          },
          end: {
            line: 9,
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
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0
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

function mainPageController($location, $anchorScroll) {
  ++cov_1ik1gnzxz6.f[0];

  var vm = (++cov_1ik1gnzxz6.s[0], this);
  ++cov_1ik1gnzxz6.s[1];
  vm.message = 'HELLO WORLD';

  ++cov_1ik1gnzxz6.s[2];
  vm.scrollTo = function (id) {
    ++cov_1ik1gnzxz6.f[1];
    ++cov_1ik1gnzxz6.s[3];

    $location.hash(id);
    ++cov_1ik1gnzxz6.s[4];
    console.log($location.hash());
    ++cov_1ik1gnzxz6.s[5];
    $anchorScroll();
  };
}
++cov_1ik1gnzxz6.s[6];
mainPageController.$inject = ['$location', '$anchorScroll'];

++cov_1ik1gnzxz6.s[7];
angular.module('clinicalWebsite').controller('mainPageController', mainPageController);