'use strict';

var cov_1mbu6l10nv = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\about\\about.directive.js',
      hash = '19615616c4ce7e08ec6ad30a1ac010cdaa8b7109',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\about\\about.directive.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 8,
          column: 5
        }
      },
      '1': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 7,
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
            column: 22
          },
          end: {
            line: 2,
            column: 23
          }
        },
        loc: {
          start: {
            line: 2,
            column: 34
          },
          end: {
            line: 8,
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

++cov_1mbu6l10nv.s[0];
angular.module('clinicalWebsite').directive('about', function () {
  ++cov_1mbu6l10nv.f[0];
  ++cov_1mbu6l10nv.s[1];

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/about/about.tpl.html'
  };
});