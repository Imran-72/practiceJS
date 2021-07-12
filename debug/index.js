// task one

// let health = +prompt(`Введите число параметра 'здоровье' для персонажа`).trim()
// const isNaN = health !== Number(health)
//
// console.log(health)
//
// if (health <= 0) {
//     alert(`Параметр 'здоровье' должен быть больше нуля!`)
// } else if (isNaN) {
//     alert(`Параметр 'здоровье' должен быть числом!`)
// }else {
//     alert(`Параметр 'здоровье' равен ${health}`)
// }

// task two

// const temperatureInCelsius = +prompt(`Введите темпиратуру в градусах Цельсия`)
//
// console.log(temperatureInCelsius)
//
// if (temperatureInCelsius === 0) {
//     alert(`0 градусов по Цельсию - это темпиратура замерзания воды`)
// } else if (temperatureInCelsius > 0) {
//     alert(`Для замерзания воды темпиратура должна быть 0 градусов по Цельсию либо ниже`)
// }
//
// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32
//
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по фаренгейту.`)

// task three

const salaryOfJuniorDeveloper = 500
const numberOfJuniorDevelopers = 3
let taxPercentage = 13
let totalJuniorDevelopersSalary = 0
//debugger
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100)
    //debugger
    totalJuniorDevelopersSalary += salaryWithTax
}
console.log(`totalJuniorDevelopersSalary`, totalJuniorDevelopersSalary)