import { pythagoras } from '../../helpers/math'


export function Point(options = {}) {
  // if (!(this instanceof Point)) return new Point(options)
  this.x = options.x ?? 0
  this.y = options.y ?? 0
  if (options.name) this.name = options.name
}

Object.defineProperties(Point.prototype, {
  move: { value(dx, dy) { return this.x += dx, this.y += dy, this } },
  coordinate: { get() { return [ this.x, this.y ] } },
  distance: { get() { return pythagoras(this.x, this.y) } }
})