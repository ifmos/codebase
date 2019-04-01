var New = require('./new')

describe('#New', function () {
  it('should be instance of', function () {
    var Person = function (name) {
      this.name = name
    }

    var Fail = function () {

    }

    Fail.prototype.constructor = function () {
      this.name = 'success'
      return {
        name: 'fail'
      }
    }

    var mos = New(Person, 'Mos')

    var fail = New(Fail)

    var error = New({})

    expect(error instanceof Object).toBe(false)

    expect(fail.name).toEqual('fail')

    expect(mos).toBeInstanceOf(Person)
    expect(mos.name).toEqual('Mos')
  })
})