export class Node {
  type = 'node'
  constructor(props = {}) {
    this.options = props
    this.uid = Node.uid++
    this.index = this.index != null ? this.index : -1
    this.parent = props.parent ?? null
    this.children = []
  }
  insert(element, i) {
    if (i === 0) {
      this.children.unshift(element)
    } else if (i === this.children.length) {
      this.children.push(element)
    } else {
      this.children.splice(i, 0, element)
    }
  }
  static uid = 0
}