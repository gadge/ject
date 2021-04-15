import { deco, says } from '@spare/logger'
import { Point }      from '../assets/points.classic/Point'
import { Round }      from '../assets/points.classic/Round'

const ROUND = 'round'
const options = { x: 3, y: 4, r: 2 }
const round = Reflect.construct(Round, [ options ], Point)
round |> deco |> says[ROUND]
round.area |> deco |> says[ROUND].br('area')