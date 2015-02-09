// Ager © 2014-2015 Andrey Polischuk
// github.com/andrepolischuk/ager

!function() {

  'use strict';

  /**
   * Module
   * @param  {Object|Number} year
   * @param  {Number} month
   * @param  {Number} day
   * @return {Number}
   */

  function ager(year, month, day) {

    var birthday = year && typeof year.getMonth === 'function' ?
      birthday = year : (month && day) ?
      new Date(+year, +month - 1, +day) : undefined;

    if (!birthday || +month > 12) {
      return;
    }

    if (month) {
      birthday.setFullYear(+year);
    }

    day = +day || birthday.getDate();

    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    var monthDaysLength = new Date(birthday.getFullYear(),
      birthday.getMonth() + 1, 0).getDate();

    if (monthDaysLength < day || today < birthday) {
      return;
    }

    age -= today.getMonth() < birthday.getMonth() ? 1 : 0;
    age -= today.getMonth() === birthday.getMonth() &&
      today.getDate() < birthday.getDate() ? 1 : 0;

    return age;

  }

  /**
   * Module exports
   */

  if (typeof define === 'function' && define.amd) {
    define([], function() { return ager; });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = ager;
  } else {
    this.ager = ager;
  }

}.call(this);
