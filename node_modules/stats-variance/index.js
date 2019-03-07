"use strict";

var mean = require('stats-mean');

module.exports = {
  calc: function (data) {
    return mean.calc(data.map(function (a) {
        return Math.pow(a, 2);
      })) - Math.pow(mean.calc(data), 2);
  }
};
