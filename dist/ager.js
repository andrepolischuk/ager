(function umd(require){
  if ('object' == typeof exports) {
    module.exports = require('1');
  } else if ('function' == typeof define && (define.amd || define.cmd)) {
    define(function(){ return require('1'); });
  } else {
    this['ager'] = require('1');
  }
})((function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @param {Boolean} jumped
   * @api public
   */

  function require(name, jumped){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];

    fn.call(m.exports, function(req){
      var dep = modules[id][1][req];
      return require(dep ? dep : req);
    }, m, m.exports, outer, modules, cache, entries);

    // expose as `name`.
    if (name) cache[name] = cache[id];

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {

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

module.exports = ager;

}, {}]}, {}, {"1":""})
);