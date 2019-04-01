/**
 * 指定this
 * @param obj {object}
 * @param method {function}
 * @return {function(): *}
 */
module.exports = function Bind(obj, method) {
  if (typeof obj !== 'object' || typeof method !== 'function') {
    return function () {

    }
  }
  return function () {
    return method.apply(obj, arguments)
  }
}