import { deco, logger, ros, says } from '@spare/logger'

function OneClass() {
  this.name = 'one'
  this.oneName = 'oneName'
}

function OtherClass() {
  this.name = 'other'
  this.otherName = 'otherName'
}

const args = []

// 创建一个对象:
var obj1 = Reflect.construct(OneClass, args, OtherClass)

// 与上述方法等效:
var obj2 = Object.create(OtherClass.prototype)
OneClass.apply(obj2, args)

obj1|> deco |> logger
obj2|> deco |> logger

obj1 instanceof OneClass |> says[`obj1`].p('instanceof').p(ros('OneClass'))
obj2 instanceof OneClass |> says[`obj2`].p('instanceof').p(ros('OneClass'))
obj1 instanceof OtherClass |> says[`obj1`].p('instanceof').p(ros('OtherClass'))
obj2 instanceof OtherClass |> says[`obj2`].p('instanceof').p(ros('OtherClass'))

