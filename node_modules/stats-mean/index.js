"use strict";

function add(a, b) {
  return a + b;
}

module.exports = {
  calc: function (data) {
    return data.reduce(add, 0) / data.length;
  }
};
