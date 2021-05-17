import { roundD2 }           from '@aryth/math'
import { makeEmbedded }      from '@foba/util'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { Round }             from '../assets/points/Round'

class Pnt extends Round {
  constructor(options = {}) {
    super(options)
  }
  pleaseCalculateAndReturnTheCoordinate = this.coordinate
  _lc = this.pleaseCalculateAndReturnTheCoordinate
  _coord = this.coordinate
  _co = this._coord
  get _c() { return { x: this.x, y: this.y } }
}

const { lapse, result } = strategies({
  repeat: 1E+7,
  candidates: {
    foo: new Pnt({ x: 3, y: 4 }),
    bar: new Pnt({ x: 1, y: roundD2(Math.sqrt(3)) })
  } |> makeEmbedded,
  methods: {
    bench: x => x,
    cla: x => x.coordinate,
    arc: x => x.pleaseCalculateAndReturnTheCoordinate,
    dev: x => x._co,
    edge: x => x._c
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']