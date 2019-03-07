var assert = require('assert');
var sinon = require('sinon');
var mean = require('stats-mean');
var variance = require('./');

describe("Variance calculation", function () {
  it("should return expected value", function () {
    var stub = sinon.stub(mean, "calc");
    stub.withArgs([2, 4, 6]).returns(7);
    stub.withArgs([4, 16, 36]).returns(100);
    assert.equal(variance.calc([2, 4, 6]), 51);
  });
});
