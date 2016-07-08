# dev-zero-storage

Exposes the same interface as [random-access-file](https://github.com/mafintosh/random-access-file) but instead of writing/reading data to a file it will always return a zero'ed out buffer when reading (similar to reading from /dev/zero).

```
npm install dev-zero-storage
```

[![build status](http://img.shields.io/travis/mafintosh/dev-zero-storage.svg?style=flat)](http://travis-ci.org/mafintosh/dev-zero-storage)

## Usage

``` js
var storage = require('dev-zero-storage')
var zero = storage()

zero.read(0, 10, function (err, buf) {
  console.log(buf) // 10 0-bytes
})

zero.read(0, 1000, function (err, buf) {
  console.log(buf) // 1000 0-bytes
})
```

## License

MIT
