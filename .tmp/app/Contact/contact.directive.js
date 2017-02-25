'use strict';

var cov_2pxc9ddqu0 = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\contact\\contact.directive.js',
      hash = '19c019c07b24f91065ff7ba1ec948cb93cdfdb1d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\contact\\contact.directive.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 12,
          column: 5
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
            column: 24
          },
          end: {
            line: 2,
            column: 25
          }
        },
        loc: {
          start: {
            line: 2,
            column: 36
          },
          end: {
            line: 12,
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

++cov_2pxc9ddqu0.s[0];
angular.module('clinicalWebsite').directive('contact', function () {
  ++cov_2pxc9ddqu0.f[0];
  ++cov_2pxc9ddqu0.s[1];

  return {
    restrict: 'E',
    scope: {
      //@ reads the attribute value, = provides two-way binding, & works with functions
      title: '@' },
    templateUrl: 'app/contact/contact.tpl.html',
    controller: 'contactController as cCtrl'
  };
});