'use strict';

var cov_1vw10ogsmx = function () {
  var path = 'C:\\Projects\\clinical-website\\src\\app\\cover\\cover.directive.js',
      hash = 'd7c6437b10b4cc50069961170b1953a4deb2def0',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Projects\\clinical-website\\src\\app\\cover\\cover.directive.js',
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

++cov_1vw10ogsmx.s[0];
angular.module('clinicalWebsite').directive('cover', function () {
  ++cov_1vw10ogsmx.f[0];
  ++cov_1vw10ogsmx.s[1];

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/cover/cover.tpl.html'
  };
});