'use strict';

var t = require('chai').assert;
var rk = require('./');

describe('rk', function () {
  it('should join arguments', function () {
    t.strictEqual(rk('A', 'B', 'C', 10), 'A:B:C:10');
  });
});
