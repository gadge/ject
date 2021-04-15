const FUNCTION = 'function'

export class Util {
  static getMembers(Class) {
    return Class?.prototype ? Reflect.ownKeys(Class.prototype) : null
  }

  static getDescriptors(Class) {
    return Reflect
      .ownKeys(Class?.prototype)
      .map(key => [ key, Reflect.getOwnPropertyDescriptor(Class.prototype, key) ])
      |> Object.fromEntries
  }

  static getStaticMethodNames(Class) {
    return Reflect
      .ownKeys(Class)
      .filter(prop => typeof Class[prop] === FUNCTION)
  }

  static getStaticPropertyNames(cls) {
    return Object.keys(cls)
  }
}