'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const duopipe = (alpha, beta) => {
  if (!alpha) return beta;
  if (!beta) return alpha;
  return x => beta(alpha(x));
};
const pipemany = (...funcs) => {
  let l = funcs.length,
      func = void 0,
      temp = void 0;

  while (l >= 0) if (func = funcs[l--]) break;

  while (l >= 0) if (temp = funcs[l--]) func = duopipe(temp, func);

  return func;
};
const pipe = (...funcs) => {
  let l = funcs.length;
  if (l === 0) return void 0;
  if (l === 1) return funcs[0];
  if (l === 2) return duopipe.apply(null, funcs);
  return pipemany.apply(null, funcs);
};

exports.duopipe = duopipe;
exports.pipe = pipe;
