import { Deco, deco, logger, says } from '@spare/logger'
import { assign }                   from '../../src/mixin'

class Edge {
  constructor(props) {
    this.x = props.x ?? 0
    this.y = props.y ?? 0
  }
  get coordinate() { return [ this.x, this.y ] }

}
class Some extends Edge {
  constructor(options = {}) {
    super(options)
    if (!(this instanceof Some)) return new Some(options)
    // assign(Some.prototype, Edge.prototype)
    // assign(this, new Edge(options))
    assign(this, options)
    this.some = 'some'
  }
}
// const inheritResult = Reflect.setPrototypeOf(Some, Edge.prototype)
// inheritResult |> deco |> says['inheritResult']
// Object.assign({}, Some.prototype) |> deco |> logger

const options = { ace: 'cooper' }
const some = new Some(options)
some |> deco |> logger
const node = Reflect.construct(
  Some,
  [ options ],
  Edge.prototype.constructor
)

node |> Deco({ vert: 1 }) |> logger
node.x |> deco |> says['node.x']
node.coordinate |> deco |> says['node.coordinate']