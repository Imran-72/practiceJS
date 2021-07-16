// // task 1
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

//task 2

const numbers = [10, 4, 100, -5, 54, 2]

for (let i = 0; i <= numbers.length - 1; i++) {
    let count = numbers[i] ** 3
    console.log(count)
}

for (let count of numbers) {
    count **= 3
    console.log(count)
}

numbers.forEach((num) => {
    num **= 3
    console.log(num)
})

numbers.reduce((accumulator) => {
    accumulator **= 3
    console.log(accumulator)
    return accumulator
})