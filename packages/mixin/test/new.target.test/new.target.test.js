class Parent {
  constructor() {
    // implicit (from the `super` call)
    //    new.target = Child;
    // implicit (because `Parent` doesn't extend anything):
    //    this = Object.create(new.target.prototype);
    console.log(new.target.name, new.target) // Child!
  }
}
class Child extends Parent {
  x = 0
  y = 0
  constructor() {
    // `this` is uninitialised (and would throw if accessed)
    // implicit (from the `new` call):
    //    new.target = Child
    super() // this = Reflect.construct(Parent, [], new.target);
    console.log(this)
  }
  get coordinate() {return [ this.x, this.y ]}
  move(dx, dy) {
    this.x += dx
    this.y += dy
    return this.coordinate
  }

}
new Child