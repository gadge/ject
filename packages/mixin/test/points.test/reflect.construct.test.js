import { deco, says } from '@spare/logger'
import { assign }     from '../../src/mixin'
import { Round }      from '../assets/points/Round'

const ROUND = 'round'
const options = { x: 3, y: 4, r: 2 }
function Round2(options) {
  assign(Round2.prototype, Round.prototype)
  Object.assign(this, options)
  return this
}
const round = Reflect.construct(Round, [ options ], Round2)
round |> deco |> says[ROUND]
round.area |> deco |> says[ROUND].br('area')