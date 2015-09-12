'use strict';
var ager = require('./');
var assert = require('assert');
var year = (new Date()).getFullYear();

it('should return undefined for incorrect args', function () {
  assert(ager() === undefined);
  assert(ager(72) === undefined);
  assert(ager('asd') === undefined);
});

it('should return undefined for incorrect date', function () {
  assert(ager([1975, 7, 52]) === undefined);
  assert(ager([1976, 13, 21]) === undefined);
  assert(ager(1975, 7, 52) === undefined);
  assert(ager(1976, 13, 21) === undefined);
});

it('should return undefined for future date', function () {
  assert(ager(new Date(year + 50, 5, 15)) === undefined);
  assert(ager([year + 50, 6, 15]) === undefined);
  assert(ager(year + 50, 6, 15) === undefined);
});

it('should return number', function () {
  var ageFromDate = ager(new Date(1980, 7, 11));
  var ageFromArray = ager([1980, 8, 11]);
  var ageFromArgs = ager(1980, 8, 11);
  assert(typeof ageFromDate === 'number' && !isNaN(ageFromDate));
  assert(typeof ageFromArray === 'number' && !isNaN(ageFromArray));
  assert(typeof ageFromArgs === 'number' && !isNaN(ageFromArgs));
});

it('should return 31', function () {
  assert(ager(new Date(year - 31, 0, 1)) === 31);
  assert(ager([year - 31, 1, 1]) === 31);
  assert(ager(year - 31, 1, 1) === 31);
});
