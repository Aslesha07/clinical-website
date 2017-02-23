'use strict';

var cov_guap9uxdd = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\services\\services.directive.js',
      hash = '32971d2fe77be5d65ea5f6f9e791bdc856d178eb',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\services\\services.directive.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 12,
          column: 3
        }
      },
      '1': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 11,
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
            column: 37
          },
          end: {
            line: 12,
            column: 1
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

++cov_guap9uxdd.s[0];
angular.module('clinicalWebsite').directive('services', function () {
  ++cov_guap9uxdd.f[0];
  ++cov_guap9uxdd.s[1];

  return {
    restrict: 'E',
    scope: {
      //@ reads the attribute value, = provides two-way binding, & works with functions
      title: '@' },
    templateUrl: 'app/services/services.tpl.html',
    controller: 'servicesController as sCtrl'
  };
});