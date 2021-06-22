import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { Chore }             from '../src/Chore'

function adder(a, b, c) { return a + b + c }
const chore = Chore.create({ fn: adder, ctx: {} })

const { lapse, result } = strategies({
  repeat: 3E+6,
  candidates: {
    empty: [ 1, 2, 3 ],
    alpha: [ 2, 3, 4 ],
    beta: [ 3, 4, 5 ],
  },
  methods: {
    bench: v => v,
    cla: adder,
    dev: (...args) => chore.invoke(args),
    edg: chore.caller,
  }
  // cla, dev, edg, rea, arc, epi
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
