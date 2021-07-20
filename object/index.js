// task 1

// const users = [
//     {
//         username: 'David',
//         status: 'online',
//         lastActivity: 10
//     }, {
//         username: 'Lucy',
//         status: 'offline',
//         lastActivity: 22
//     }, {
//         username: 'Bob',
//         status: 'online',
//         lastActivity: 104
//     }
// ]
//
// const onlineUsers = []
// for (const keys in users) {
//     const value = users[keys]
//     if (value.status === 'online') {
//         onlineUsers.push(value)
//     }
// }
// let usersOnline1 = [onlineUsers[0].username]
// let usersOnline2 = [onlineUsers[1].username]
// const usersOnlineNames = [...usersOnline1, ...usersOnline2].join(', ')
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)


// task 2

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// }
//
// let updatedStudent
// const giveJobToStudent = (fullName, jobName) => {
//     alert(`Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`)
//     return updatedStudent = {...student}
// }
// student.job = 'веб-разработчик'
// giveJobToStudent(student.fullName, 'веб-разработчик')
// console.log(updatedStudent)

// let usersOnlineNames = Object.assign({}, onlineUsers)
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)
// const myInfo = {
//     name: 'Imran',
//     age: 22,
//     job: false,
//     direction: {
//         type: 'Front-End',
//         frameWork: 'React-Js'
//     }
// }
// for (const keys in myInfo) {
//     const value = myInfo[keys]
//     console.log('value',value)
// }
// const keys = Object.keys(myInfo)
// console.log(keys)

// const values = Object.values(onlineUsers)
// console.log(values)

// const entries = Object.entries(myInfo)
// console.log(entries[0])
// .log('frameWork', myInfo.direction.frameWork)
// console.log('frameWork', myInfo['direction']['frameWork'])

// myInfo.age = 18
// console.log(myInfo.age)

// myInfo.language = 2
//
// console.log(myInfo)

// delete myInfo.job

// console.log(myInfo)

// task 3

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// }
//
// const handleObject = (obj, key, action) => {
//     switch (action) {
//         case 'get':
//             return key
//         case 'add':
//             obj.key = ''
//             return obj
//         case 'delete':
//             delete obj.key
//             return obj
//         default:
//             return obj
//     }
// }
//
// const result = handleObject(student, 'programmingLanguage', 'wef')
// console.log('result', result)


// task 4

// if (getKillers.James.includes('Bill') && getKillers.James.includes('Lucas') === true) {
//     alert(`Убийца James`)
// }
// if (getKillers.Johnny.includes('Bill') && getKillers.Johnny.includes('Lucas') === true) {
//     alert(`Убийца Johnny`)
// }
// if (getKillers.Peter.includes('Bill') && getKillers.Peter.includes('Lucas') === true) {
//     alert('Убийца Peter')
// }

//
// const getKiller = (suspectInfo, deadPeople) => {
//     for (let i=0; i< suspectInfo.length; i++) {
//         if ()
//     }
//     // if (suspectInfo.includes(deadPeople) && suspectInfo.includes(deadPeople) === true) {
//     //     alert(`Убийца James`)
//     // }
//     // if (getKiller.includes('Bill') && getKiller.includes('Lucas') === true) {
//     //     alert(`Убийца Johnny`)
//     // }
//     // if (getKiller.includes('Bill') && getKiller.includes('Lucas') === true) {
//     //     alert('Убийца Peter')
//     // }
// }
//
// getKiller({
//     James: ['Jacob', 'Bill', 'Lucas'],
//     Johnny: ['David', 'Kyle', 'Lucas'],
//     Peter: ['Lucy', 'Kyle'],
// }, ['Lucas', 'Bill'])

// task 6

// const todayWinner = {
//     prize: '10 000$',
// }
//
// const winnerApplicants = {
//     '001': {
//         name: 'Максим',
//         age: 25,
//     },
//     '201': {
//         name: 'Светлана',
//         age: 20,
//     },
//     '304': {
//         name: 'Екатерина',
//         age: 35,
//     },
// }
//
//
// function getRandomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// const numResult = getRandomNumberInRange(1, 304)
// let obj
// const getWinner = (applicants, winnerObject) => {
//     if (numResult === 1) {
//         return obj = {...winnerObject, ...applicants['001']}
//     } else if (numResult === 201) {
//         return obj = {...winnerObject, ...applicants['201']}
//     } else if (numResult === 304) {
//         return obj = {...winnerObject, ...applicants['304']}
//     } else {
//         alert(`Крутите ещё`)
//     }
// }
//
// const resultWinner = getWinner(winnerApplicants, todayWinner);
// console.log('resultWinner', resultWinner)


// task 6

const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
]

let newObj

const giveTalonsInOrder = (patients, orders) => {
    debugger
    return newObj = patients.sort((a, b) => {
        debugger
        return orders.indexOf(a.id) - orders.indexOf(b.id)
    })
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result)

// task dop

const groceries = {
    "Orange Juice": {
        price : 1.5,
        discount: 10,
    },
    "Chocolate": {
        price : 2,
        discount : 0,
    },
// more items...
}

const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
]

const getTotalPriceOfShoppingBag = (shoppingBag) => {

}