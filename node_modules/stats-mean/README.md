# Mean [![Build Status](https://travis-ci.org/msn0/stats-mean.svg?branch=master)](http://travis-ci.org/msn0/stats-mean)

> Calculate mean of data.

## Installation

```sh
$ npm install stats-mean
```

## Usage

```js
var mean = require('stats-mean');

var data = [1, 10, 100, 45, -4, 0.9, -16];

mean.calc(data); // → 19.5
```

### API

#### calc(data)

##### data

Type: `array`

The data to be analysed; an array of numbers.

## License
MIT &copy; [Michał Jezierski](https://pl.linkedin.com/in/jezierskimichal)
