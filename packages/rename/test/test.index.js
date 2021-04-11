import { delogger }         from '@spare/deco'
import { decoFunc, logger } from '@spare/logger'
import { Rename }           from '..'
import { rename }           from '../src/rename'

const func = x => x
const newFunc = new Function('x', 'return x + 1')
func.name |> delogger
rename(func, 'bye-bye')
func.name |> delogger

newFunc.name |> delogger
newFunc |> Rename('some(Func)')
newFunc.name |> delogger
newFunc |> decoFunc |> logger
