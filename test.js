import test from 'ava';
import ager from './index.es5';
const year = (new Date()).getFullYear();

test('return undefined for incorrect args', t => {
  t.throws(ager.bind(null), 'Value is not a date');
  t.throws(ager.bind(null, 'asd'), 'Value is not a date');
});

test('return undefined for incorrect date', t => {
  t.throws(ager.bind(null, 72), 'Month value is not correct');
  t.throws(ager.bind(null, [1976, 13, 21]), 'Month value is not correct');
  t.throws(ager.bind(null, 1976, 13, 21), 'Month value is not correct');
  t.throws(ager.bind(null, [1975, 7, 52]), 'Day value is not correct');
  t.throws(ager.bind(null, 1975, 7, 52), 'Day value is not correct');
});

test('return undefined for future date', t => {
  t.throws(ager.bind(null, new Date(year + 50, 5, 15)), 'Date cannot be a birthday');
  t.throws(ager.bind(null, [year + 50, 6, 15]), 'Date cannot be a birthday');
  t.throws(ager.bind(null, year + 50, 6, 15), 'Date cannot be a birthday');
});

test('return number', t => {
  const ageFromDate = ager(new Date(1980, 7, 11));
  const ageFromArray = ager([1980, 8, 11]);
  const ageFromArgs = ager(1980, 8, 11);
  t.is(typeof ageFromDate, 'number');
  t.is(typeof ageFromArray, 'number');
  t.is(typeof ageFromArgs, 'number');
  t.false(isNaN(ageFromDate));
  t.false(isNaN(ageFromArray));
  t.false(isNaN(ageFromArgs));
});

test('return 31', t => {
  t.is(ager(new Date(year - 31, 0, 1)), 31);
  t.is(ager([year - 31, 1, 1]), 31);
  t.is(ager(year - 31, 1, 1), 31);
});
