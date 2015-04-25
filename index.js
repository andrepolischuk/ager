
'use strict';

/**
 * Module dependencies
 */

try {
  var type = require('type');
} catch (err) {
  var type = require('component-type');
}

/**
 * Today
 */

var today = new Date();

/**
 * Expose age
 *
 * @param  {Date|Array|Number} year
 * @param  {Number} month
 * @param  {Number} day
 * @return {Number}
 * @api public
 */

module.exports = function(year, month, day) {
  var birthday;

  if (type(year) === 'date') birthday = year;
  if (type(year) === 'array') birthday = parse.apply(null, year);
  if (type(year) === 'number') birthday = parse(year, month, day);
  if (!birthday || birthday > today) return;

  var age = today.getFullYear() - birthday.getFullYear();
  age -= today.getMonth() < birthday.getMonth() ? 1 : 0;
  age -= today.getMonth() === birthday.getMonth() &&
    today.getDate() < birthday.getDate() ? 1 : 0;
  return age;
};

/**
 * Parse date
 *
 * @param  {Number} year
 * @param  {Number} month
 * @param  {Number} day
 * @return {Date}
 * @api private
 */

function parse(year, month, day) {
  if (!month || month > 12) return;
  if (!day || day > new Date(year, month, 0).getDate()) return;

  var date = new Date(year, month - 1, day);
  date.setFullYear(year);
  return date;
}
