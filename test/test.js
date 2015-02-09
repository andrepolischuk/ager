var ager = require('../');
var should = require('should');

describe('ager', function() {

  it('should return undefined for incorrect args', function() {
    should(ager()).be.type('undefined');
    should(ager(72)).be.type('undefined');
    should(ager('asd')).be.type('undefined');
  });

  it('should return undefined for future date', function() {
    should(ager(2050, 6, 15)).be.type('undefined');
    should(ager(new Date(2050, 5, 15))).be.type('undefined');
  });

  it('should return undefined for incorrect date', function() {
    should(ager(1975, 7, 52)).be.type('undefined');
    should(ager(1976, 13, 21)).be.type('undefined');
  });

  it('should return number for 1980.8.11', function() {
    ager(1980, 8, 11).should.be.a.Number.and.not.be.NaN;
    ager(new Date(1980, 7, 11)).should.be.a.Number.and.not.be.NaN;
  });

  it('should return 31 for 1984.1.5', function() {
    ager(1984, 1, 5).should.equal(31);
    ager(new Date(1984, 0, 5)).should.equal(31);
  });

});
