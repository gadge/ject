import { deco, says } from '@spare/logger'
import { mixin }      from '../index'

class Base {
  type = 'base'
  constructor() {}
}

class Fund {
  type = 'fund'
  constructor() {}
}

class Squad extends Base {
  type = 'squad'
  constructor() {
    super()
  }
}

const Mixed = mixin(Base, Fund)
const mixed = new Mixed()

Base |> deco |> says['Base']
Squad |> deco |> says['Squad']
mixed |> deco |> says['mixed']
