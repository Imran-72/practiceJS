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
const getKillers = {
    James: ['Jacob', 'Bill', 'Lucas'],
    Johnny: ['David', 'Kyle', 'Lucas'],
    Peter: ['Lucy', 'Kyle'],
}

const deadPeoples = ['Lucas', 'Bill']

// if (getKillers.James.includes('Bill') && getKillers.James.includes('Lucas') === true) {
//     alert(`Убийца James`)
// }
// if (getKillers.Johnny.includes('Bill') && getKillers.Johnny.includes('Lucas') === true) {
//     alert(`Убийца Johnny`)
// }
// if (getKillers.Peter.includes('Bill') && getKillers.Peter.includes('Lucas') === true) {
//     alert('Убийца Peter')
// }


const getKiller = (getKiller, deadPeople) => {
    if (getKiller.includes('Bill') && getKiller.includes('Lucas') === true) {
        alert(`Убийца James`)
    }
    // if (getKiller.includes('Bill') && getKiller.includes('Lucas') === true) {
    //     alert(`Убийца Johnny`)
    // }
    // if (getKiller.includes('Bill') && getKiller.includes('Lucas') === true) {
    //     alert('Убийца Peter')
    // }
}

getKiller(getKillers.О, deadPeoples)
// const killer = getKiller( {
//     'James': ['Jacob', 'Bill', 'Lucas'],
//     'Johnny': ['David', 'Kyle', 'Lucas'],
//     'Peter': ['Lucy', 'Kyle'],
// }, ['Lucas', 'Bill'])
//
// console.log('killer', killer)
