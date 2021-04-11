import { deco, logger, says } from '@spare/logger'
import { mixin }              from '../index'

class Base {
  type = 'base'
  constructor() {}
  log(title, ...message) { logger(title, ...message) }
}

class Fund {
  type = 'fund'
  constructor() {}
}

class Coordinate {
  constructor() {
    this.x = 0
    this.y = 0
  }
  move(dx, dy) { return (this.x += dx), (this.y += dy), this }
  coordinate() { return [ this.x, this.y ] }
}


const Mixed = mixin(Base, Fund, Coordinate)
const mixed = new Mixed()

Base |> deco |> says['Base']
Coordinate |> deco |> says['Squad']
Mixed |> deco |> says['Mixed']
mixed |> deco |> says['mixed']
mixed.move(4, -3).coordinate()|> deco |> says['mixed']
