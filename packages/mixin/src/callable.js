export function mixin(...ClassCollection) {
  class Inherited {
    constructor(options) {
      for (let Base of ClassCollection)
        assign(this, new Base(options)) // copy instance properties of class
    }
  }
  for (let Base of ClassCollection) {
    assign(Inherited, Base) // copy static properties of class
    assign(Inherited.prototype, Base.prototype) // copy prototype properties of class
  }
  return Inherited
}

const
  CONSTRUCTOR = 'constructor',
  PROTOTYPE = 'prototype',
  NAME = 'name'
export function assign(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key === CONSTRUCTOR || key === PROTOTYPE || key === NAME) continue
    const desc = Object.getOwnPropertyDescriptor(source, key)
    Object.defineProperty(target, key, desc)
  }
}