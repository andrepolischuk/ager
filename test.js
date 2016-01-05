'use strict';
var test = require('ava');
var ager = require('./');
var year = (new Date()).getFullYear();

test('return undefined for incorrect args', function (t) {
  t.is(ager(), undefined);
  t.is(ager(72), undefined);
  t.is(ager('asd'), undefined);
});

test('return undefined for incorrect date', function (t) {
  t.is(ager([1975, 7, 52]), undefined);
  t.is(ager([1976, 13, 21]), undefined);
  t.is(ager(1975, 7, 52), undefined);
  t.is(ager(1976, 13, 21), undefined);
});

test('return undefined for future date', function (t) {
  t.is(ager(new Date(year + 50, 5, 15)), undefined);
  t.is(ager([year + 50, 6, 15]), undefined);
  t.is(ager(year + 50, 6, 15), undefined);
});

test('return number', function (t) {
  var ageFromDate = ager(new Date(1980, 7, 11));
  var ageFromArray = ager([1980, 8, 11]);
  var ageFromArgs = ager(1980, 8, 11);
  t.is(typeof ageFromDate, 'number');
  t.is(typeof ageFromArray, 'number');
  t.is(typeof ageFromArgs, 'number');
  t.false(isNaN(ageFromDate));
  t.false(isNaN(ageFromArray));
  t.false(isNaN(ageFromArgs));
});

test('return 31', function (t) {
  t.is(ager(new Date(year - 31, 0, 1)), 31);
  t.is(ager([year - 31, 1, 1]), 31);
  t.is(ager(year - 31, 1, 1), 31);
});
