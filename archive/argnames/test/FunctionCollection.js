import { rand }      from '@aryth/rand'
import { isNumeric } from '@typen/num-loose'

const { noop } = require('@ject/noop')

const { oneself } = require('@ject/oneself')

const coordinate = function () {
  const { x, y } = this
  return { x, y }
}

export const FunctionCollection = {
  additiveLambdaDev: x => ++x,
  additiveLambdaFut: (x, y) => { return x + y },
  additiveFunction: function additive(x) { return ++x },
  additiveAnonymous(x = function () {}) { return ++x },
  additiveWithThis: function (x) { return x + this.x},
  coordinate,
  conditional: function (x) {
    if (x % 2) {
      return 'odd'
    } else {
      return 'even'
    }
  },
  coordinateBind: coordinate.bind({ x: 1, y: 2 }),
  parseNumeric: x => isNumeric(x) ? +x : NaN,
  nested() {
    const alpha = () => () => this
    const beta = function () { Object.assign({ foo: true }, this) }
    function gamma({ a = rand() } = {}) { return ++a }
    return true
  }
}

export const ESNextParamCollection = {
  destructObject:function({ x, y }) { return x + y },
  destructArray:function([x, y]) { return x + y },
  destructCombo:function({ args = [1, 2, 3], mapper = oneself, zipper = noop } = {}) { return { args, mapper, zipper } },
  combinedObject:({ foo: f = 16, bar: b = 256 }, c = { x: 1, y: 2 }) => { return { f, b, c }}
}
