// task 1

// let objDate = new Date(2021, 6, 20)
//
// const getDateFormat = (date, separator = '.') => {
//     if (separator === '.') {
//         return `0${date.getDay()}.0${date.getMonth()}.${date.getFullYear()}`
//     } else if (separator === '-') {
//         return `0${date.getDay()}-0${date.getMonth()}-${date.getFullYear()}`
//     }
// }
// console.log(getDateFormat(objDate, '-'))

//task 2

// let objBirthday = new Date(2022, 6, 2)
// let convertMsToD
// const getDaysBeforeBirthday = (nextBirthdayDate) => {
//     return convertMsToD = nextBirthdayDate - new Date()
// }
//
// const convertMsToDays = (convertMsToD) => {
//     return  Math.round(convertMsToD)
// }
// // console.log(convertMsToDays(348.444444))
// console.log(convertMsToDays(getDaysBeforeBirthday(objBirthday)))
let months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12)
console.log(months)