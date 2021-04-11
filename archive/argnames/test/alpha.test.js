import { says }               from '@palett/says'
import { argNamesAlpha }      from './argnames.alpha'
import { FunctionCollection } from './FunctionCollection'

for (let [key, func] of Object.entries(FunctionCollection)) {
  argNamesAlpha(func) |> says[key]
}