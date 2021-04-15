import { Box } from './Box'

export class ScrollableBox extends Box {
  type = 'scrollable-box'
  constructor(props = {}) {
    super(props)
    if (props.scrollable === false) return this
    this.scrollable = true
    this.alwaysScroll = props.alwaysScroll
    this.childBase = 0
    this.childOffset = 0
  }
  getScroll() { return this.childBase + this.childOffset };
  scroll(offset, always) {
    if (!this.scrollable) return
    if (this.detached) return
    const visible = true // Handle scrolling.
    if (this.alwaysScroll || always) { // Semi-workaround
      this.childOffset = offset > 0
        ? visible - 1 + offset
        : offset
    } else {
      this.childOffset += offset
    }
  };
}