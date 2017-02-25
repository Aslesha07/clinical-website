'use strict';

var cov_1pbqir9qhc = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\index.js',
      hash = 'b6e194d8ec1b9e00be123c9c9a00eabf730bf190',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\index.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 9,
          column: 5
        }
      },
      '1': {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 44
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 50
          },
          end: {
            line: 8,
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

++cov_1pbqir9qhc.s[0];
/* eslint linebreak-style: ["error", "unix"]*/
angular.module('clinicalWebsite', ['appTemplateCache', 'ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  ++cov_1pbqir9qhc.f[0];
  ++cov_1pbqir9qhc.s[1];

  $urlRouterProvider.otherwise('/home');
}]);