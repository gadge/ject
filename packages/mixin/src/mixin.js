const
  CONSTRUCTOR = 'constructor',
  PROTOTYPE   = 'prototype',
  NAME        = 'name'

export function mixin(...Ancestors) {
  // copy instance properties of class
  const Inherited = class {
    constructor(options) {
      for (let Ancestor of Ancestors)
        assign(this, new Ancestor(options))
    }
  }
  // copy static and prototype properties of class
  for (let Ancestor of Ancestors)
    inherit(Inherited, Ancestor)
  const name = this?.name ?? Ancestors.map(({ name }) => name).join('')
  Object.defineProperty(Inherited, NAME, { value: name })

  return Inherited
}

export const inherit = (Inherited, Ancestor) => {
  assign(Inherited, Ancestor) // copy static properties of class
  assign(Inherited.prototype, Ancestor.prototype) // copy prototype properties of class
  return Inherited
}

export function assign(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key === CONSTRUCTOR || key === PROTOTYPE || key === NAME) continue
    const desc = Object.getOwnPropertyDescriptor(source, key)
    Object.defineProperty(target, key, desc)
  }
}