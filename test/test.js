
'use strict';

var ager = require('..');
var assert = require('assert');
var year = (new Date()).getFullYear();

describe('ager()', function() {
  it('should return undefined for incorrect args', function() {
    assert(ager() === undefined);
    assert(ager(72) === undefined);
    assert(ager('asd') === undefined);
  });
});

describe('ager(date)', function() {
  it('should return undefined for future date', function() {
    assert(ager(new Date(year + 50, 5, 15)) === undefined);
  });

  it('should return number', function() {
    var age = ager(new Date(1980, 7, 11));
    assert(typeof age === 'number' && !isNaN(age));
  });

  it('should return 31', function() {
    assert(ager(new Date(year - 31, 0, 1)) === 31);
  });
});

describe('ager(array)', function() {
  it('should return undefined for future date', function() {
    assert(ager([year + 50, 6, 15]) === undefined);
  });

  it('should return undefined for incorrect date', function() {
    assert(ager([1975, 7, 52]) === undefined);
    assert(ager([1976, 13, 21]) === undefined);
  });

  it('should return number', function() {
    var age = ager([1980, 8, 11]);
    assert(typeof age === 'number' && !isNaN(age));
  });

  it('should return 31', function() {
    assert(ager([year - 31, 1, 1]) === 31);
  });
});

describe('ager(year, month, day)', function() {
  it('should return undefined for future date', function() {
    assert(ager(year + 50, 6, 15) === undefined);
  });

  it('should return undefined for incorrect date', function() {
    assert(ager(1975, 7, 52) === undefined);
    assert(ager(1976, 13, 21) === undefined);
  });

  it('should return number', function() {
    var age = ager(1980, 8, 11);
    assert(typeof age === 'number' && !isNaN(age));
  });

  it('should return 31', function() {
    assert(ager(year - 31, 1, 1) === 31);
  });
});
