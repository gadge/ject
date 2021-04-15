import { Deco, deco, logger, says } from '@spare/logger'
import { Point }                    from '../assets/points.classic/Point'
import { Round }                    from '../assets/points.classic/Round'

const thisArg = { foo: 'bar' }
const options = { x: 3, y: 4, r: 2 }

const point = new (Function.prototype.bind.call(Point, thisArg, options))()
point |> deco |> says['point']
point
  .move(1, 1)
  .coordinate
  |> deco
  |> says['point'].p('coordinate')

const round = new Round(options)
// Reflect.ownKeys(Point.prototype)|> console.log
Object.assign({}, Round.prototype) |> Deco({ vert: 1 }) |> says['Round.prototype']
round |> deco |> says['round']
round
  .move(1, 1)
  .coordinate
  |> deco
  |> says['round'].p('coordinate')


function Foo() {
  'foo is called' |> logger
  this.foo = 'bar'
}
const another = Reflect.construct(Round, [ options ], Foo)

another |> deco |> logger