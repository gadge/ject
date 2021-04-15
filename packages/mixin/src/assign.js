import { iterate } from '@vect/vector-mapper'

const
  CONSTRUCTOR = 'constructor',
  PROTOTYPE   = 'prototype',
  NAME        = 'name'

const {
        ownKeys: getKeys,
        getOwnPropertyDescriptor: getProp,
        defineProperty: setProp
      } = Reflect

export function assign(target, source) {
  return iterate(
    getKeys(source),
    key => (key !== CONSTRUCTOR && key !== PROTOTYPE && key !== NAME)
      ? setProp(target, key, getProp(source, key))
      : void 0
  )
}