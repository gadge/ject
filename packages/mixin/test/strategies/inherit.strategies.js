import { makeEmbedded }      from '@foba/util'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { Point }             from '../assets/points/Point'
import { pythagoras }        from '../helpers/math'

function TempFunc() { }
class TempClass {}

// export function Point(options = {}) {
//   // if (!(this instanceof Point)) return new Point(options)
//   this.x = options.x ?? 0
//   this.y = options.y ?? 0
//   if (options.name) this.name = options.name
// }
//
// Object.defineProperties(Point.prototype, {
//   move: { value(dx, dy) { return this.x += dx, this.y += dy, this } },
//   coordinate: { get() { return [ this.x, this.y ] } },
//   distance: { get() { return pythagoras(this.x, this.y) } }
// })
//
// export class Point {
//
//   constructor(options = {}) {
//     // new.target |> deco |> logger
//     // this |> deco |> logger
//     this.x = options.x ?? 0
//     this.y = options.y ?? 0
//     if (options.name) this.name = options.name
//     this.type = 'point'
//     // console.log(this.type)
//   }
//   move(dx, dy) { return this.x += dx, this.y += dy, this }
//   get coordinate() { return [ this.x, this.y ] }
//   get distance() { return pythagoras(this.x, this.y) }
// }

const PointPrototypeClassic = {
  move(dx, dy) { return this.x += dx, this.y += dy, this },
  get coordinate() { return [ this.x, this.y ] },
  get distance() { return pythagoras(this.x, this.y) },
}

const PointPrototype = {
  move: { value(dx, dy) { return this.x += dx, this.y += dy, this }, configurable: true },
  coordinate: { get() { return [ this.x, this.y ] }, configurable: true },
  distance: { get() { return pythagoras(this.x, this.y) }, configurable: true }
}

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: {
    foo: TempFunc,
    bar: TempClass
  } |> makeEmbedded,
  methods: {
    bench: x => {
      const some = function () {
        this.tag = ''
      }
    },
    cla: C => {
      for (let key in PointPrototypeClassic) {
        // key |> deco |> logger
        C.prototype[key] = PointPrototypeClassic[key]
      }
    },
    rea: C => {
      C.prototype.__proto__ = Point.prototype
    },
    arc: C => {
      return Reflect.setPrototypeOf(C, Point.prototype)
    },
    dev: C => {
      return Object.defineProperties(C.prototype, PointPrototype)
    },
    fut: C => {
      for (let key in PointPrototype) {
        Reflect.defineProperty(C.prototype, key, PointPrototype[key])
      }
    },
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']