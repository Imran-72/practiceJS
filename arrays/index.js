// // task 2
//
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']
//
// const giveParcel = () => {
//     let name = peopleWaiting.splice(0, 3)
//     let count = peopleWaiting.length + name.length - 1
//     for (let i = 0; i <= name.length - 1; i++) {
//         alert(`${name[i]} получил(а) посылку. В очереди осталось ${count--} человек.`)
//     }
// }
//
// giveParcel()
//
// const leaveQueueWithoutParcel = () => {
//     let name = peopleWaiting.splice(0, peopleWaiting.length)
//     for (let i = 0; i <= name.length - 1; i++) {
//         alert(`${name[i]} не получил(а) посылку и ушел(ла) из очереди`)
//     }
// }
//
// leaveQueueWithoutParcel()

//task 3

// const numbers = [10, 4, 100, -5, 54, 2]
//
// for (let i = 0; i <= numbers.length - 1; i++) {
//     let count = numbers[i] ** 3
//     console.log(count)
// }
//
// for (let count of numbers) {
//     count **= 3
//     console.log(count)
// }
//
// numbers.forEach((num) => {
//     num **= 3
//     console.log(num)
// })
//
// let a = numbers.reduce((acc, numbers) => {
//     return acc + (numbers ** 3)
// }, 0)

// console.log(
//     numbers.reduce((a, b) => a + b, 0)
// )

// task 4

// const coffees = ['Latte', 'Cappuccino', 'Americano']
// const prices = [1.5, 1, 2]
// const updatedPrices = prices.map(prices => prices + 0.5)

//  coffees.forEach((name,updatedPrices) => {
//      alert(`Кофе ${name} сейчас стоит ${updatedPrices} евро`)
//  })
// console.log(coffees)
// const coffeeName = prompt(`Поиск кофе по названию:`).toLowerCase().trim()
// const haveCoffee = coffees.find((coffee) => coffee.toLowerCase() === coffeeName)
// if (haveCoffee) {
//     coffees.findIndex((coffee, i) => {
//         if (coffee.toLowerCase() === coffeeName) {
//             alert(`Держите ваш любимый кофе ${coffee}. Он ${++i}-й по популярности в нашей кофейне.`)
//         }
//     })
// } else {
//     alert(`К сожалению, такого вида кофе нет в наличии`)
// }

// task 5
// const coffees = ['Latte', 'Cappuccino', 'Americano']
// const prices = [1.5, 1, 2]
// const updatedPrices = prices.map(prices => prices + 0.5)
// coffees.forEach((name) => {
//     alert(`${name} ${updatedPrices}`)
// })
// for (let i = 0; i <= coffees.length - 1; i++) {
//         alert(`Кофе ${coffees[i]} сейчас стоит ${updatedPrices[i]} евро`)
// }

// task 6

// const clientsEstimations = []
//
// const askClientToGiveEstimation = () => {
//     const userResponse = +prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`)
//     if (userResponse >= 1 && userResponse <= 10) {
//         clientsEstimations.push(userResponse)
//     }
// }
//
// for (let i = 1; i <= 5; i++) {
//     askClientToGiveEstimation()
// }
//
// const goodEstimations = clientsEstimations.filter((num) => num > 5)
// const notGoodEstimations = clientsEstimations.filter((num) => num <= 5)
//
// alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)


// task 7

const goals = [8, 1, 1, 3, 2, -1, 5]
let numberOfGoals = Math.max.apply(Math, goals)
let number = goals.indexOf(numberOfGoals)
alert(`Самый результативный матч был под номером ${++number}. В нем было забито ${numberOfGoals} гол(ов).`)
// let numberOfGoalS = goals.filter((num) => num < numberOfGoals)
// let numbers = numberOfGoalS.findIndex((num) => num > 5  )
// console.log(numbers)
// alert(`Самые не результативные матчи были под номерами ${numbers}. В каждом из них было забито по ${numberOfGoalS } мячу(а).`)

