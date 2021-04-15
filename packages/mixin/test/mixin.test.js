import { deco, logger, says } from '@spare/logger'
import { mixin }              from '../index'
import { Point }              from './assets/points/Point'

class Base {
  type = 'base'
  constructor() {}
  log(title, ...message) { logger(title, ...message) }
}

class Fund {
  type = 'fund'
  constructor() {}
}


const Mixed = mixin.call({ name: null }, Base, Fund, Point)
const mixed = new Mixed()

Base |> deco |> says['Base']
Point |> deco |> says['Point']
Mixed |> deco |> says['Mixed']
mixed |> deco |> says['mixed']
mixed.constructor.name |> deco |> says['Mixed'].br('name')
mixed.move(4, -3).coordinate |> deco |> says['mixed']
