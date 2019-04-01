var Bind = require('./bind')

describe('#Bind', function () {
  it('should bind', function () {
    var assert = function (name) {
      return this.name === name
    }

    var cat = {
      name: 'cat'
    }

    var failMethod = null

    var fail = Bind(cat, failMethod)

    expect(fail()).toBeFalsy()

    var equal = Bind(cat, assert)

    expect(equal('cat')).toBe(true)
    expect(equal('dog')).toBe(false)
  })
})