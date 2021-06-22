import { nullish, valid } from '@typen/nullish'

export class Chore {
  fn
  #n
  #arg
  ctx
  constructor(fn, mode) {
    this.fn = fn
    this.mode = valid(mode) ? mode : fn.length

  }
  static build(fn, arg, ctx, mode) {
    const method = new Chore(fn, mode)
    if (valid(arg)) method.arg = arg
    if (valid(ctx)) method.ctx = ctx
    return method
  }
  static create({ fn, arg, ctx, mode }) { return Chore.build(fn, arg, ctx, mode) }

  get mode() { return this.#n }
  set mode(n) {
    this.#n = n // const prevN = this.#n
    if (n === 0) return ( this.#arg = null, n ) // if (n === 1) return this.#arg = arg
    const arg = this.#arg
    if (valid(arg) && n >= 2 && !Array.isArray(arg)) this.#arg = [ arg ]
    return n
  }

  get arg() { return this.#arg }
  set arg(val) {
    const n = this.#n
    if (n === 0) return this.#arg = val
    if (n === 1) return this.#arg = val
    if (n >= 2) return this.#arg = Array.isArray(val) ? val : [ val ]
  }

  get caller() {
    const { mode, fn, ctx, arg } = this
    return valid(ctx)
      ? nullish(arg) ? fn.bind(ctx) // || mode === 0 ?
        : mode === 1 || !Array.isArray(arg) ? fn.bind(ctx, arg)
          : fn.bind(ctx, ...arg)
      : nullish(arg) ? fn // || mode === 0 ?
        : mode === 1 || !Array.isArray(arg) ? () => fn(arg)
          : () => fn(...arg)
  }
  set caller(fn) {
    this.fn = fn
    if (nullish(this.mode)) this.mode = this.fn.length
  }

  get context() { return this.ctx }
  set context(ctx) { return this.ctx = ctx }

  invoke(arg) {
    arg = arg ?? this.arg
    const { mode, ctx, fn } = this
    return valid(ctx)
      ? nullish(arg) ? fn.call(ctx) // || mode === 0 ?
        : mode === 1 || !Array.isArray(arg) ? fn.call(ctx, arg)
          : fn.apply(ctx, arg)
      : nullish(arg) ? fn() // || mode === 0 ?
        : mode === 1 || !Array.isArray(arg) ? fn(arg)
          : fn(...arg)
  }
}

