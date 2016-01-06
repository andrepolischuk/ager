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

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/ager
[travis-image]: https://travis-ci.org/andrepolischuk/ager.svg?branch=master
