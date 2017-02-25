'use strict';

var cov_2gcbtseubb = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\contact\\contact.controller.js',
      hash = '4fe62e406223b4350cf0a9db9785a6e7bac90759',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\contact\\contact.controller.js',
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
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 85
        }
      }
    },
    fnMap: {
      '0': {
        name: 'contactController',
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1,
            column: 29
          },
          end: {
            line: 4,
            column: 1
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
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

function contactController() {
  ++cov_2gcbtseubb.f[0];

  var vm = (++cov_2gcbtseubb.s[0], this);
  ++cov_2gcbtseubb.s[1];
  vm.message = 'HELLO WORLD';
}

++cov_2gcbtseubb.s[2];
angular.module('clinicalWebsite').controller('contactController', contactController);