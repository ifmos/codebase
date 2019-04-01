/**
 * 模拟类继承
 * @param parent {function}
 * @param constructor {function}
 * @return {Function}
 */

module.exports = function Extends(parent, constructor) {
  var child = function () {
    parent.apply(this, arguments)
    constructor.apply(this, arguments)
  }

  child.prototype = Object.create(parent.prototype)

  child.prototype.constructor = child

  return child
}