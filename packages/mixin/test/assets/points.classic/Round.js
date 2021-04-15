import { Point } from './Point'


export function Round(options = {}) {
  this.uid = Round.uid++
  Point.call(this, options)
  this.r = options.r ?? 1
}
Round.uid = 0
// Round.prototype.__proto__ = Point.prototype
Reflect.setPrototypeOf(Round.prototype, Point.prototype)
Reflect.defineProperty(Round.prototype, 'area', { get() { return Math.PI * this.r ** 2 } })
Reflect.defineProperty(Round.prototype, 'circumference', { get() { return 2 * Math.PI * this.r } })


