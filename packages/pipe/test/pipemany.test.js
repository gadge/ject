import { ros }      from '@palett/ros'
import { decoFunc } from '@spare/deco-func'
import { says }     from '@spare/logger'
import { tap }      from '@spare/tap'
import { pipe }     from '../src/pipe'

const ALPHA = ros('alpha'), BETA = ros('beta'), GAMMA = ros('gamma'), NULL = ros('null')

const test = () => {
  const
    value = 1,
    alpha = x => ++x,
    beta = x => x * 3,
    gamma = x => x / 10

  alpha |> decoFunc |> says[ALPHA]
  beta |> decoFunc |> says[BETA]
  gamma |> decoFunc |> says[GAMMA]

  value |> says['value']
  value |> pipe(alpha)                   |> decoFunc |> says['pipe'].br(tap(ALPHA))
  value |> pipe(alpha, beta)             |> decoFunc |> says['pipe'].br(tap(ALPHA, BETA))
  value |> pipe(alpha, null)             |> decoFunc |> says['pipe'].br(tap(ALPHA, NULL))
  value |> pipe(null, beta)             |> decoFunc |> says['pipe'].br(tap(NULL, BETA))
  value |> pipe(alpha, beta, gamma)      |> decoFunc |> says['pipe'].br(tap(ALPHA, BETA, GAMMA))
  value |> pipe(alpha, null, null)       |> decoFunc |> says['pipe'].br(tap(ALPHA, NULL, NULL))
  value |> pipe(null, beta, null)   |> decoFunc |> says['pipe'].br(tap(NULL, BETA, NULL))
  value |> pipe(null, null, gamma)  |> decoFunc |> says['pipe'].br(tap(NULL, NULL, GAMMA))
  value |> pipe(null, null, null)   |> decoFunc |> says['pipe'].br(tap(NULL, NULL, NULL))
}

test()
