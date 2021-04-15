import { deco, says } from '@spare/logger'
import { Util }       from '../assets/classUtil'
import { Round }      from '../assets/points/Round'

const round = new Round()

Util.getMembers(Round.prototype.__proto__) |> deco |> says['all member names']

Util.getMembers(Round) |> deco |> says['member names']

Util.getDescriptors(Round) |> deco |> says['member descs']