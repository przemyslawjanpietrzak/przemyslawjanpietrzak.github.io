var assert = require('assert');
var mean = require('./');

describe("Mean calculation", function () {
  it("should return expected value", function () {
    var data = [1, 10, 100, 45, -4, 0.5, -16];
    assert.equal(mean.calc(data), 19.5);
  });
});
