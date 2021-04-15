import { pythagoras } from '../../helpers/math'

export class Point {

  constructor(options = {}) {
    // new.target |> deco |> logger
    // this |> deco |> logger
    this.x = options.x ?? 0
    this.y = options.y ?? 0
    if (options.name) this.name = options.name
    this.type = 'point'
    // console.log(this.type)
  }
  move(dx, dy) { return this.x += dx, this.y += dy, this }
  get coordinate() { return [ this.x, this.y ] }
  get distance() { return pythagoras(this.x, this.y) }
}