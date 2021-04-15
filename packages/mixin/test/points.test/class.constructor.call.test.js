import { deco, says } from '@spare/logger'
import { Point }      from '../assets/points/Point'

const thisArg = { foo: 'bar' }
const options = { x: 3, y: 4, r: 2 }

const round = new (Function.prototype.bind.call(Point, thisArg, options))()

round |> deco |> says['round']
