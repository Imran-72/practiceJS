//task one

//function expression
// function getName1(name) {
//     return `Имя равно ${name}`
// }
//
// console.log(getName1(`Imran`))
//
// //function declaration
// const getName2 = function(name) {
//     return `Имя равно ${name}`
// }
//
// console.log(getName2(`Maga`))
//
// //стрелочная функция
// const getName3 = (name) => `Имя равно ${name}`
//
// console.log(getName3(`Heda`))

//task two

// const getSumOfNumbers = (number, type = 'odd') => {
//
//     let sum = 0
//
//     for (let i = 1; i <= number; i++) {
//
//         if (type === 'odd' && i % 2 !== 0) {
//             sum += i
//         } else if (type === 'even' && i % 2 === 0) {
//             sum += i
//         } else if (type === '') {
//             sum += i
//         }
//     }
//     return sum
// }
//
// console.log(getSumOfNumbers(100, ''))

// task 3
//
// const getDivisors = (number = 1) => {
// let divisor = [], i = 3
//
// while (i < number) {
//     if (number % i === 0) divisor.push(i)
//     i += 3
// }
// return divisor
// }
//
// console.log(getDivisors(20))

const getDivisors = (number = 1) => {
    let divisor = []
    for (let i = 3; i < number; i += 3) {
        if (number < 0 && Number.isInteger(number)) {
            alert(`number должен быть целым числом и больше нуля!`)
        } else if (number % i === 0) {
            divisor.push(i)
        }
    }
    return divisor
}
console.log(getDivisors(10))

// let n = 4, divisor = [], i = 2;
//
// while (i < n) {
//
//     if (n % i === 0) divisor.push(i);
//
//     i = i + 2;
// }
//
// alert(divisor);
// let number = 15;
// for (let i=  1; i <= number; i++) {
//     if (number % i === 0 && number !== number && number !== 1) {
//         console.log(i);
//     }
// }