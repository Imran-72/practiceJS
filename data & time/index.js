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
//
// const getDaysBeforeBirthday = (nextBirthdayDate) => {
//     return Math.round((nextBirthdayDate - new Date()) / 1000 / 3600 / 24)
// }
//
// console.log(getDaysBeforeBirthday(objBirthday))

// task 3

// let dateObj = new Date()
// // let time = dateObj.getTime()
//
// // console.log(time)
//
// const addDays = (date, days = 1) => {
//     const updateDays = () => {
//         return date.getTime() + days
//     }
//     return dateObj
// }
// console.log(addDays(dateObj))

// dop task

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
]

let dateObj = new Date()

const allowVisa = (people) => {
    return people.filter(newPeople =>  {
        return newPeople.criminalRecord === false || people.passportExpiration > dateObj
    })
}

const result = allowVisa(peopleWithVisa)
console.log('result', result)