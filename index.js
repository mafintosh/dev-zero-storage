module.exports = ZeroStorage

function ZeroStorage () {
  if (!(this instanceof ZeroStorage)) return new ZeroStorage()
  this.blank = Buffer(16 * 1024)
  this.blank.fill(0)
  this.length = Infinity
}

ZeroStorage.prototype.open = function (cb) {
  if (cb) cb()
}

ZeroStorage.prototype.read = function (offset, length, cb) {
  while (length > this.blank.length) {
    this.blank = Buffer(2 * this.blank.length)
    this.blank.fill(0)
  }

  if (length === this.blank.length) cb(null, this.blank)
  else cb(null, this.blank.slice(0, length))
}

ZeroStorage.prototype.write = function (offset, buf, cb) {
  if (cb) cb()
}
