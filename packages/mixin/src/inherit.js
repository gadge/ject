import { assign } from './assign'

export const inherit = (Inherited, Ancestor) => {
  assign(Inherited, Ancestor) // copy static properties of class
  assign(Inherited.prototype, Ancestor.prototype) // copy prototype properties of class
  return Inherited
}
