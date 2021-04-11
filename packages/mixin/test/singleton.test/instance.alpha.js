import { Counter } from './Counter'

export const Alpha = {
  accum() {
    for (let i = 0; i < 5; i++) {
      Counter.$++
    }
  }
}