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

}, {"dts":2,"type":3,"component-type":3}],
2: [function(require, module, exports) {

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
 * Expose new Date()
 * @param  {Array|Number|String} year
 * @param  {Number} month
 * @param  {Number} day
 * @return {Date}
 * @api public
 */

module.exports = function(year, month, day) {
  switch (type(year)) {
    case 'string':
      return parseString(year);
    case 'array':
      return parse(year[0], year[1], year[2]);
    case 'number':
      return parse(year, month, day);
    case 'undefined':
      return new Date();
  }
}

/**
 * Parse string
 * @param  {String} string
 * @return {Date}
 * @api private
 */

function parseString(string) {
  var delimiter = string.match(/\d+(.).+/);
  if (delimiter) {
    string = string.split(delimiter[1]);
    return parse(+string[0], +string[1], +string[2]);
  }
}

/**
 * Parse date
 * @param  {Number} year
 * @param  {Number} month
 * @param  {Number} day
 * @return {Date}
 * @api private
 */

function parse(year, month, day) {
  if (month <= 12 && day <= new Date(year, month, 0).getDate()) {
    var date = new Date(year, month - 1, day);
    date.setFullYear(year);
    return date;
  }
}

}, {"type":3,"component-type":3}],
3: [function(require, module, exports) {
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val)

  return typeof val;
};

}, {}]}, {}, {"1":""})
);