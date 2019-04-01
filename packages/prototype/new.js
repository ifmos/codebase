/**
 * 实例化
 * @constructor
 * @return {object}
 */
module.exports = function New() {
  var Constructor = Array.prototype.splice.call(arguments, 0, 1)[0]

  if (typeof Constructor !== 'function') {
    return Object.create(null)
  }

  var obj = Object.create(Constructor.prototype)

  obj = Object.assign(obj, Constructor.prototype.constructor.apply(obj, arguments))

  return obj
}