import { Node } from './Node'

export class Element extends Node {
  type = 'element'
  constructor(props = {}) {
    super(props)
    if (props.scrollable && !this._ignore && this.type !== 'scrollable-box') {
      const ScrollableBox = require('./ScrollableBox').ScrollableBox
      Object
        .getOwnPropertyNames(ScrollableBox.prototype)
        .forEach(function (key) {
          if (key === 'type') return
          const desc = Object.getOwnPropertyDescriptor(ScrollableBox.prototype, key)
          Object.defineProperty(this, key, desc)
        }, this)
      this._ignore = true
      ScrollableBox.call(this, props)
      delete this._ignore
      return this
    }
    this.name = props.name
  }
  hide() {
    if (this.hidden) return
    // this.clearPos()
    this.hidden = true
    // this.emit('hide');
    // if (this.screen.focused === this) {
    //   this.screen.rewindFocus();
    // }
  }
  show() {
    if (!this.hidden) return
    this.hidden = false
    // this.emit('show');
  }
  toggle() { return this.hidden ? this.show() : this.hide() }
}