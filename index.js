
'use strict';

/**
 * Module dependencies
 */

var dts = require('dts');

try {
  var type = require('type');
} catch (err) {
  var type = require('component-type');
}

/**
 * Today
 */

var today = dts();

/**
 * Expose age
 * @param  {Date|Array|Number} year
 * @param  {Number} month
 * @param  {Number} day
 * @return {Number}
 * @api public
 */

module.exports = function(year, month, day) {

  var birthday = type(year) === 'date' ?
    year : dts(year, month, day);

  if (!birthday || birthday > today) {
    return;
  }

  var age = today.getFullYear() - birthday.getFullYear();
  age -= today.getMonth() < birthday.getMonth() ? 1 : 0;
  age -= today.getMonth() === birthday.getMonth() &&
    today.getDate() < birthday.getDate() ? 1 : 0;
  return age;

};
