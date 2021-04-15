import { deco, logger, says } from '@spare/logger'
import util                   from 'util'

class Base {
  type = 'base'
  _logger
  constructor(options = {}) {
    if (options.log) this._logger = logger
  }
  static global = null
  static total = 0
  static instances = []
  _log(pre, msg) { return this._logger?.call(null, pre + ': ' + msg + '\n-\n') }
  log() { return this._log('LOG', util.format.apply(util, arguments)) }
}

class Fund {
  type = 'fund'
  constructor(options = {}) {}
}

class Squad extends Base {
  type = 'squad'
  constructor(options = {}) {
    super(options)
  }
}

const squad = new Squad({ log: 'string' })

Base |> deco |> says['Base']
Object.assign({}, Base) |> deco |> says['Base']
Squad |> deco |> says['Squad']
squad |> deco |> says['squad']
squad.log('some')
