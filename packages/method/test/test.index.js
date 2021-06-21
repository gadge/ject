import { decoFlat, logger, xr } from '@spare/logger'
import { tapDot }               from '@spare/tap'
import { Method }               from '../src/method'

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
  const method = new Method(func)
  method.arg = [ 1, 2, 3 ]
  xr(key).arg(method.arg).mode(method.mode).called(decoFlat(method.call())) |> logger
}
