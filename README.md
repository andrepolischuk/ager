# ager [![Build Status](https://travis-ci.org/andrepolischuk/ager.svg?branch=master)](https://travis-ci.org/andrepolischuk/ager)

  Age calculations

## Instalation

  Component(1):

```sh
$ component install andrepolischuk/ager
```

  Npm:

```sh
$ npm install ager
```

  Umd:

```html
<script src="https://cdn.rawgit.com/andrepolischuk/ager/1.2.2/ager.js"></script>
```

## API

### ager(date)

  Calculate age via date

```js
ager(new Date(1991, 6, 24));
```

### ager(year, month, day)

  Calculate age via arguments

```js
ager(1991, 7, 24)
```

### ager(array)

  Calculate age via array

```js
ager([1991, 7, 24])
```

## License

  MIT
