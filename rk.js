'use strict';

module.exports = function rk() {
  return Array.prototype.slice.call(arguments).join(':');
};
