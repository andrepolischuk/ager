# ager [![Build Status][travis-image]][travis-url]

> Age calculations

## Install

```sh
npm install --save ager
```

```sh
component install andrepolischuk/ager
```

## Usage

```js
var ager = require('ager');
ager(new Date(1991, 3, 24)); // 24
ager(1991, 4, 24); // 24
ager([1991, 4, 24]); // 24
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/ager
[travis-image]: https://travis-ci.org/andrepolischuk/ager.svg?branch=master
