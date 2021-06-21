import { nullish, valid } from '@typen/nullish'


export class Method {
  fn
  #n
  #arg
  ctx
  constructor(fn, mode) {
    this.fn = fn
    this.mode = valid(mode) ? mode : fn.length

  }
  static build(fn, arg, ctx, mode) {
    const method = new Method(fn, arg, ctx, mode)
    if (valid(arg)) method.arg = arg
    if (valid(ctx)) method.ctx = ctx
    return method
  }
  static create({ fn, arg, ctx, mode }) { return Method.build(fn, arg, ctx, mode) }

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

  get function() { return this.fn }
  set function(fn) {
    this.fn = fn
    if (nullish(this.mode)) this.mode = this.fn.length
  }

  get context() { return this.ctx }
  set context(ctx) { return this.ctx = ctx }

  call(arg) {
    arg = arg ?? this.#arg
    return valid(this.ctx)
      ? nullish(arg) ? this.fn.call(this.ctx) // || this.#n === 0 ?
        : this.#n === 1 || !Array.isArray(arg) ? this.fn.call(this.ctx, arg)
          : this.fn.apply(this.ctx, arg)
      : nullish(arg) ? this.fn() // || this.#n === 0 ?
        : this.#n === 1 || !Array.isArray(arg) ? this.fn(arg)
          : this.fn(...arg)
  }
}

