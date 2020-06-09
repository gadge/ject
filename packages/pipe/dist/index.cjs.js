'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var oneself = require('@ject/oneself');
var nullish = require('@typen/nullish');

const duopipe = (alpha, beta) => {
  let a = nullish.nullish(alpha),
      b = nullish.nullish(beta);
  if (!a && !b) return x => beta(alpha(x));
  if (!a) return alpha;
  if (!b) return beta;
  return oneself.oneself;
};
const pipemany = (...funcs) => {
  var _func;

  let size = funcs.length,
      func,
      temp;

  while (size >= 0) if (func = funcs[size--]) break;

  while (size >= 0) if (temp = funcs[size--]) func = duopipe(temp, func);

  return (_func = func) !== null && _func !== void 0 ? _func : oneself.oneself;
};
const pipe = (...funcs) => {
  let l = funcs.length;

  switch (l) {
    case 0:
      return void 0;

    case 1:
      return funcs[0];

    case 2:
      return duopipe.apply(null, funcs);

    default:
      return pipemany.apply(null, funcs);
  }
};

exports.duopipe = duopipe;
exports.pipe = pipe;
