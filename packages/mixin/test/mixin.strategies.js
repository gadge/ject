import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import * as Mixin                    from '../src/mixin'
import { inherit }                   from '../src/mixin'
import { Util }                      from './assets/classUtil'
import { Loggable }                  from './assets/points/Loggable'
import { Point }                     from './assets/points/Point'

const { lapse, result } = strategies({
  repeat: 5E+4,
  candidates: {
    foo: [ Point, Loggable ],
    // bar: null
  },
  methods: {
    // bench: (A, B) => Object.assign({}, A.prototype, B.prototype),
    cla: (A, B) => {
      function C(props) {
        if (!new.target) return new C(props)
        Mixin.assign(this, new A(props))
        Mixin.assign(this, new B(props))
      }
      C.prototype.__proto__ = { ...A.prototype, ...B.prototype }
      return C
    },
    rea: (A, B) => {
      const C = class {
        constructor(options) {
          Object.assign(this, new A(options))
          Object.assign(this, new B(options))
        }
      }
      Object.assign(C.prototype, A.prototype)
      Object.assign(C.prototype, B.prototype)
      return C
    },
    arc: (A, B) => {
      const C = class {
        constructor(options) {
          Mixin.assign(this, new A(options))
          Mixin.assign(this, new B(options))
        }
      }
      Object.setPrototypeOf(C, { ...B.prototype, ...A.prototype })
      return C
    },
    dev: (A, B) => {
      const C = class extends A {
        constructor(options) {
          super(options)
          Mixin.assign(this, new B(options))
        }
      }
      Mixin.assign(C.prototype, B.prototype)
      return C
    },
    fut: (A, B) => {
      const C = class {
        constructor(options) {
          Mixin.assign(this, new A(options))
          Mixin.assign(this, new B(options))
        }
      }
      Mixin.assign(C.prototype, A.prototype)
      Mixin.assign(C.prototype, B.prototype)
      return C
    },
    edge: (...Ancestors) => {
      const Hybrid = class {
        constructor(options) {
          for (let Ancestor of Ancestors)
            Mixin.assign(this, new Ancestor(options))
        }
      }
      for (let Ancestor of Ancestors) inherit(Hybrid, Ancestor)
      return Hybrid
    },
  }
})
lapse |> decoCrostab |> logger
// result |> decoCrostab |> says['result']

const SIDE = 'foo'
for (let label of result.head) {
  '' |> says[label].br('running')
  const Mixin = result.cell(SIDE, label)
  Mixin |> Util.getMembers |> says[label].br('members')
  const arc = new Mixin({ x: 0, y: 0 })
  arc.coordinate |> says[label].br('coordinate')
  arc.toString() |> says[label].br('toString')
  '' |> logger
}


