var Extends = require('./extends')
var New = require('./new')

describe('#Extends', function () {
  it('should extends', function () {
    var Person = function (name) {
      this.sex = 'male'
      this.name = name
    }

    var Child = Extends(Person, function () {
      this.sex = 'female'
    })

    var child = New(Child, 'Ben')

    expect(child).toBeInstanceOf(Person)
    expect(child.name).toEqual('Ben')
    expect(child.sex).toEqual('female')
  })
})