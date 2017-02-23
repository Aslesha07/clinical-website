'use strict';

var cov_1nro73tsxp = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\mainPage\\mainPage.js',
      hash = 'aa2a6a021bdb81868cdea58a6e26135b9defc4c4',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\mainPage\\mainPage.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 11,
          column: 5
        }
      },
      '1': {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 9,
          column: 9
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 4,
            column: 4
          },
          end: {
            line: 4,
            column: 5
          }
        },
        loc: {
          start: {
            line: 4,
            column: 30
          },
          end: {
            line: 10,
            column: 5
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
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

++cov_1nro73tsxp.s[0];
angular.module('clinicalWebsite').config(['$stateProvider', function ($stateProvider) {
  ++cov_1nro73tsxp.f[0];
  ++cov_1nro73tsxp.s[1];

  $stateProvider.state('mainPage', {
    url: '/home',
    templateUrl: 'app/mainPage/mainPage.tpl.html',
    controller: 'mainPageController as mainCtrl'
  });
}]);