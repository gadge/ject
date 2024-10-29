import { deco } from '@spare/logger'

export class Loggable {
  constructor() {}
  toString() { return deco(this) }
}