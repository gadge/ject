'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const CONSTRUCTOR = 'constructor',
      PROTOTYPE = 'prototype',
      NAME = 'name';
function mixin(...Ancestors) {
  var _this$name;

  // copy instance properties of class
  const Inherited = class {
    constructor(options) {
      for (let Ancestor of Ancestors) assign(this, new Ancestor(options));
    }

  }; // copy static and prototype properties of class

  for (let Ancestor of Ancestors) inherit(Inherited, Ancestor);

  const name = (_this$name = this === null || this === void 0 ? void 0 : this.name) !== null && _this$name !== void 0 ? _this$name : Ancestors.map(({
    name
  }) => name).join('');
  Object.defineProperty(Inherited, NAME, {
    value: name
  });
  return Inherited;
}
const inherit = (Inherited, Ancestor) => {
  assign(Inherited, Ancestor); // copy static properties of class

  assign(Inherited.prototype, Ancestor.prototype); // copy prototype properties of class

  return Inherited;
};
function assign(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key === CONSTRUCTOR || key === PROTOTYPE || key === NAME) continue;
    const desc = Object.getOwnPropertyDescriptor(source, key);
    Object.defineProperty(target, key, desc);
  }
}

exports.assign = assign;
exports.inherit = inherit;
exports.mixin = mixin;
