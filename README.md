# ager [![Build Status][travis-image]][travis-url]

> Age calculations

## Install

```sh
npm install --save ager
```

## Usage

```js
import age from 'ager';
age(new Date(1991, 3, 24)); // 24
age(1991, 4, 24); // 24
age([1991, 4, 24]); // 24
```

## API

### ager(year[, month, day])

#### year

Type: `number`, `date`, `array`

Full year, instance of `Date` or array with date

#### month

Type: `number`

Month in the range `1...12`

#### day

Type: `number`

Day in the range `1...31`

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/ager
[travis-image]: https://travis-ci.org/andrepolischuk/ager.svg?branch=master
