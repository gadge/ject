import { says }               from '@palett/says'
import { decoFlat, decoPale } from '@spare/logger'
import { ripper }             from '@spare/ripper'

const ZEN = 'zen'

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  get distance() { return Math.sqrt(this.x ** 2 + this.y ** 2)}
}

const candidates = {
  simple: { foo: 1, bar: 2, zen: 3 },
  nestedO: { foo: { bar: { zen: null } } },
  nestedV: ['foo', ['bar', [ZEN]]],
  point: new Point(3, 4)
}

const REG = /[{:}]/g
const parser = (body) => {
  const list = ripper.call(REG, body)
  for (let el of list) {

  }
  return list
}

for (let [key, object] of Object.entries(candidates)) {
  object |> decoPale |> parser |> decoFlat |> says[key]
}



