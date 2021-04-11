import { ros }            from '@palett/ros'
import { decoFlat, says } from '@spare/logger'

function args(func) {
  return (func + '')
    .replace(/[/][/].*$/mg, '') // strip single-line comments
    .replace(/\s+/g, '') // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments
    .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters
    .replace(/=[^,]+/g, '') // strip any ES6 defaults
    .split(',').filter(Boolean) // split & filter [""]
}

const candidates = {
  anonyABC: 'function (a,b,c)...', // returns ["a","b","c"]
  noArg: 'function ()...', // returns []
  namedABC: 'function named(a, b, c) ...', // returns ["a","b","c"]
  annotA: 'function (a /* = 1 */, b /* = true */) ...', // returns ["a","b"]
  mixedAnnot: 'function fprintf(handle, fmt /*, ...*/) ...', // returns ["handle","fmt"]
  defaultA: 'function( a, b = 1, c )...', // returns ["a","b","c"]
  defaultB: 'function (a=4*(5/3), b) ...', // returns ["a","b"]
  annotB: 'function (a, // single-line comment xjunk) ...', // returns ["a","b"]
  annotC: 'function (a /* fooled you...', // returns ["a","b"]
  annotD: 'function (a /* function() yes */, \n /* no, */b)/* omg! */...', // returns ["a","b"]
  lineFed: 'function ( A, b \n,c ,d \n ) \n ...', // returns ["A","b","c","d"]
  compact: 'function (a,b)...', // returns ["a","b"]
  special: 'function $args(func) ...', // returns ["func"]
  nullish: 'null...', // returns ["null"]
  direct: 'function Object() ...', // returns []
}

for (let [key, content] of Object.entries(candidates)) {
  args(content) |> decoFlat |> says[key].p(content).to(ros('args'))
}
