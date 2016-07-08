var tape = require('tape')
var storage = require('./')

tape('reads zeroed out buffers', function (t) {
  var s = storage()

  s.read(0, 100, function (err, buf) {
    t.error(err, 'no error')
    t.same(buf, zero(100))
    t.end()
  })
})

tape('reads large zeroed out buffers', function (t) {
  var s = storage()

  s.read(0, 20 * 1024, function (err, buf) {
    t.error(err, 'no error')
    t.same(buf, zero(20 * 1024))
    t.end()
  })
})

tape('reads 16kb zeroed out buffers', function (t) {
  var s = storage()

  s.read(0, 16 * 1024, function (err, buf) {
    t.error(err, 'no error')
    t.same(buf, zero(16 * 1024))
    t.end()
  })
})

function zero (n) {
  var b = Buffer(n)
  b.fill(0)
  return b
}
