//first task
let num = 1
console.log(String(num))
let str = 'string'
console.log(Boolean(str))
let thisNall = null
console.log(String(thisNall))
let thisUndeFined = undefined
console.log(String(thisUndeFined))
let Symbal = Symbol('id')
console.log(String(Symbal))
let obj = {}
console.log(Boolean(obj))
let bigNum = 10n
console.log(Number(bigNum))
let bolean = true
console.log(String(bolean))

//second task
console.log(+'50');
console.log(Number('100'), typeof Number('100')) // явное
console.log('' + 1, typeof '' + 1) // не явное
console.log(String(1), typeof String(1)) // явное
console.log(Boolean(0), typeof Boolean(0)) // явное
console.log(+'001', typeof +'001') // не явное
console.log(1 + '', typeof 1 + '') // не явное
console.log(Boolean(1), typeof Boolean(1)) // явное
console.log(String(001), typeof String(001)) // явное
console.log(Number('Hello World'), typeof Number('Hello World')) // явное

//third task
console.log(String(console.log), typeof String(console.log))
console.log(String({ name: 'Maxim' }), typeof String({ name: 'Maxim' }))
console.log(String(Symbol('key')), typeof String(Symbol('key')))
console.log(Boolean(Number), typeof Boolean(Number))
console.log(Boolean(''), typeof Boolean(''))
console.log(Boolean(0), typeof Boolean(0))
console.log(String(-10), typeof String(-10))
console.log(Number('-105'), typeof Number('-105'))

//4 task
console.log(Number(' 1 2 3 4 5')) // number
console.log(Number('1234 5')) // number
console.log(Number('12345')) // number
console.log(String(false)) // string
console.log(Boolean(0000000)) // false
console.log(Boolean(0.0000001)) // true
console.log(String(undefined)) // string
console.log(Number('100f')) // NaN
console.log(Number('100')) // number
console.log(Number('000001')) // number

