'use strict';

var cov_1p54sszu14 = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\mainPage\\mainPage.directive.js',
      hash = 'fddcde934154e315147994a83101ef29fc957100',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\mainPage\\mainPage.directive.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 13,
          column: 5
        }
      },
      '1': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 12,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 2,
            column: 25
          },
          end: {
            line: 2,
            column: 26
          }
        },
        loc: {
          start: {
            line: 2,
            column: 46
          },
          end: {
            line: 13,
            column: 3
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

++cov_1p54sszu14.s[0];
angular.module('clinicalWebsite').directive('mainPage', function ($document) {
  ++cov_1p54sszu14.f[0];
  ++cov_1p54sszu14.s[1];

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/mainPage/mainPage.tpl.html',
    controller: 'mainPageController as mainCtrl'
  };
});