import { Counter } from './Counter'

export const Beta = {
  accum() {
    for (let i = 0; i < 3; i++) {
      Counter._++
    }
  }
}
