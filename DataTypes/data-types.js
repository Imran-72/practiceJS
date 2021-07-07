//first task
const age = 22
console.log('age', age, typeof age)

const str = '22'
console.log('String', str, typeof str)

const isTrue = true
console.log('Boolean', isTrue, typeof isTrue)

const Nall = null
console.log('Null', Nall, typeof Nall)

const unDefined = undefined
console.log('Undefined', unDefined, typeof unDefined)

const thisObject = {
    name: 'Imran',
    age: 22,
    isWorking: false
}
console.log('Object', thisObject, typeof thisObject)

const thisBigInt = 100n
console.log('Bigint', thisBigInt, typeof thisBigInt)

const id = Symbol('id')
console.log('Symbol', id, typeof id)

//second task
let aGe = 22
let name = 'Imran'
let isBoolean = true

aGe = 'Imran'
name = 22
isBoolean = null

alert(age)
alert(name)
alert(isBoolean)

//third task
let ageOfPerson1 = 18
let ageOfPerson2 = '20'

let nameOfAnimal1 = null
let nameOfAnimal2 = 'Charlie'

const bestProgrammingLanguage1 = 'JavaScript'
const bestProgrammingLanguage2 = 'Java'

// var isJavaScriptProgrammer1 = true
// var isJavaScriptProgrammer2 = false

let helloText1 = 'Hello!'
let helloText2 = 'Привет!'

ageOfPerson2 = ageOfPerson1
console.log(ageOfPerson2, typeof ageOfPerson2)

nameOfAnimal2 = nameOfAnimal1
console.log(nameOfAnimal2, typeof nameOfAnimal2)

console.log('var является устаревшим методом')

let isJavaScriptProgrammer1 = true
let isJavaScriptProgrammer2 = false

isJavaScriptProgrammer2 = isJavaScriptProgrammer1
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)

console.log('Переменную с const нельзя переопределить')
console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1)
console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2)