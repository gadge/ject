import { rename }  from '@ject/rename'
import { assign }  from './assign'
import { inherit } from './inherit'

export function mixin(...Ancestors) {
  // copy instance properties of class
  const length = Ancestors.length
  if (length === 1) return Ancestors[0]
  if (length === 2) {
    const [ A, B ] = Ancestors
    return duomixin(A, B)
  }
  const Hybrid = class {
    constructor(options) {
      for (let Ancestor of Ancestors)
        assign(this, new Ancestor(options))
    }
  }
  // copy static and prototype properties of class
  for (let Ancestor of Ancestors)
    inherit(Hybrid, Ancestor)
  // rename class
  rename(Hybrid, this?.name ?? Ancestors.map(({ name }) => name).join(''))

  return Hybrid
}

export function duomixin(A, B) {
  const Hybrid = class extends A {
    constructor(options) {
      super(options)
      assign(this, new B(options))
    }
  }
  inherit(Hybrid, B)
  rename(Hybrid, this?.name ?? (A.name + B.name))
  return Hybrid
}

