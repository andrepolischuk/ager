# Ager

  Age calculations

## Instalation

  Browser:

```html
<script src="https://cdn.rawgit.com/andrepolischuk/ager/1.0.1/ager.min.js"></script>
```

  Component(1):

```sh
$ component install andrepolischuk/ager
```

  Npm:

```sh
$ npm install ager
```

```js
var ager = require('ager');
```


## API

### ager(date)

  Calculate age via Date object

```js
ager(new Date());
```

### ager(year, month, day)

  Calculate age via date parameters

```js
ager(1991, 7, 24)
```
