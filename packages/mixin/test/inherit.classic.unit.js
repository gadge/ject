import { deco, logger, says } from '@spare/logger'
import util                   from 'util'

function Base(options) {
  this.type = 'base'
  this._logger = options?.log ? logger : null
}
Base.global = null
Base.total = 0
Base.instances = []
Base.prototype._log = function (pre, msg) { return this._logger?.call(null, pre + ': ' + msg + '\n-\n') }
Base.prototype.log = function () { return this._log('LOG', util.format.apply(util, arguments)) }

function Squad(options = {}) {
  if (!(this instanceof Squad)) return new Squad(options) // enable invoke constructor without new
  Base.call(this, options)
  this.x = 0
  this.y = 0
  this.setup()
}
Squad.prototype.__proto__ = Base.prototype
Squad.prototype.type = 'squad'
Squad.prototype.setup = function () { this.type = 'squad' }
Squad.prototype.coordinate = function () { return [ this.x, this.y ]}

const squad = new Squad({ log: 'string' })

Base |> deco |> says['Base']
Object.assign({}, Base) |> deco |> says['Base'].p('static')
Object.assign({}, Base.prototype) |> deco |> says['Base'].p('prototype')

Squad |> deco |> says['Squad']
Object.assign({}, Squad) |> deco |> says['Squad'].p('static')
Object.assign({}, Squad.prototype)|> deco |> says['Squad'].p('prototype')

Object.assign({}, squad) |> deco |> says['squad'].p('instance')
