import { Point } from './Point'

export class Round extends Point {

  constructor(options = {}) {
    super(options)
    this.type = 'round'
    this.r = options.r ?? 1
    console.log(this.type)
  }
  get area() { return Math.PI * this.r ** 2 }
  get circumference() { return 2 * Math.PI * this.r }
}