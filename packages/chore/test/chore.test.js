import { decoFlat, logger, xr } from '@spare/logger'
import { tapDot }               from '@spare/tap'
import { Chore }                from '../src/Chore'

const candidates = {
  a_0() { return Array.from(arguments) },
  a_1(x) { return String(x) },
  b_1(x = 0) { return String(x) },
  c_2(x, y) { return x + y },
  d_2(x = 0, y = 0) { return x + y },
  e_2(...words) { return tapDot(...words.map(String)) },
  f_2(id, ...data) { return { id, data } },
  g_2(key, value, ...data) { return { key, value, data } }
}


for (const [ key, func ] of Object.entries(candidates)) {
  const chore = new Chore(func)
  chore.arg = [ 1, 2, 3 ]
  xr(key).arg(chore.arg).mode(chore.mode).called(decoFlat(chore.caller())) |> logger
}
