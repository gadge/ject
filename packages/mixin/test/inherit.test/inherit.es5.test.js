// ECMAScript 5
// Instance is allocated here
import { deco, logger } from '@spare/logger'

function Point(x, y) {
  // Performed before entering this constructor:
  if (!(this instanceof Point)) return new Point(x, y)
  // Object.create(new.target.prototype)
  this.x = x
  this.y = y
}
Object.defineProperty(Point.prototype, 'coordinate', {
  // move(dx, dy) { return this.x += dx, this.y += dy, this },
  value: function () { return [ this.x, this.y ] }
})
Object.assign({}, Point.prototype) |> deco |> logger

function ColorPoint(x, y, color) {
  // Performed before entering this constructor:
  // this = uninitialized
  // const self = Reflect.construct(Point, [ x, y ], new.target) // (A)
  // for (let key of Reflect.ownKeys(self)) {
  //   const desc = Reflect.getOwnPropertyDescriptor(self, key)
  //   Reflect.defineProperty(this, key, desc)
  // }
  Point.call(this, x, y)
  // super(x, y);
  this.color = color
}
Object.setPrototypeOf(ColorPoint, Point)

let cp = Reflect.construct( // (B)
  ColorPoint, [ 25, 8, 'green' ],
  ColorPoint)
// let cp = new ColorPoint(25, 8, 'green');

cp |> deco |> logger
// Reflect.ownKeys(cp) |> deco |> logger
cp.coordinate |> logger