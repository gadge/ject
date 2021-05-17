import { rename } from '@ject/rename';
import { iterate } from '@vect/vector-mapper';

const CONSTRUCTOR = 'constructor',
      PROTOTYPE = 'prototype',
      NAME = 'name';
const {
  ownKeys: getKeys,
  getOwnPropertyDescriptor: getProp,
  defineProperty: setProp
} = Reflect;
function assign(target, source) {
  return iterate(getKeys(source), key => key !== CONSTRUCTOR && key !== PROTOTYPE && key !== NAME ? setProp(target, key, getProp(source, key)) : void 0);
}

const inherit = (Inherited, Ancestor) => {
  assign(Inherited, Ancestor); // copy static properties of class

  assign(Inherited.prototype, Ancestor.prototype); // copy prototype properties of class

  return Inherited;
};

function mixin(...Ancestors) {
  // copy instance properties of class
  const length = Ancestors.length;
  if (length === 1) return Ancestors[0];

  if (length === 2) {
    const [A, B] = Ancestors;
    return duomixin(A, B);
  }

  const Hybrid = class {
    constructor(options) {
      for (let Ancestor of Ancestors) assign(this, new Ancestor(options));
    }

  }; // copy static and prototype properties of class

  for (let Ancestor of Ancestors) inherit(Hybrid, Ancestor); // rename class


  rename(Hybrid, (this == null ? void 0 : this.name) ?? Ancestors.map(({
    name
  }) => name).join(''));
  return Hybrid;
}
function duomixin(A, B) {
  const Hybrid = class extends A {
    constructor(options) {
      super(options);
      assign(this, new B(options));
    }

  };
  inherit(Hybrid, B);
  rename(Hybrid, (this == null ? void 0 : this.name) ?? A.name + B.name);
  return Hybrid;
}

export { assign, inherit, mixin };
