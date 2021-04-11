import { deco, logger } from '@spare/logger'
import { Counter }      from './Counter'
import { Alpha }        from './instance.alpha'
import { Beta }         from './instance.beta'

Alpha.accum()
Beta.accum()
Object.assign({}, Counter) |> deco |> logger
