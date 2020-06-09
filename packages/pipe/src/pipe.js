import { oneself } from '@ject/oneself'
import { nullish } from '@typen/nullish'

export const duopipe = (alpha, beta) => {
  let a = nullish(alpha), b = nullish(beta)
  if (!a && !b) return x => beta(alpha(x))
  if (!a) return alpha
  if (!b) return beta
  return oneself
}

export const pipemany = (...funcs) => {
  let size = funcs.length, func, temp
  while (size >= 0) if ((func = funcs[size--])) break
  while (size >= 0) if ((temp = funcs[size--])) func = duopipe(temp, func)
  return func ?? oneself
}

export const pipe = (...funcs) => {
  let l = funcs.length
  switch (l) {
    case 0:
      return void 0
    case 1:
      return funcs[0]
    case 2:
      return duopipe.apply(null, funcs)
    default:
      return pipemany.apply(null, funcs)
  }
}
