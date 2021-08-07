// const TODOS_URL = 'https://jsonplaceholder.typicode.com/tods/1'
//
// const result = fetch(TODOS_URL, {
//     method: 'GET'
// })
// console.log(result)
// result
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Ошибка запроса')
//         }
//         return response.text()
//     })
//     .then((todos) => {
//         console.log('todos', todos)
//     })
//     .catch((error) => {
//         console.log('error', error)
//     })

const setUsers = document.querySelector('#data-container')
const li = document.createElement('li')
const a = document.createElement('a')
a.setAttribute('href', '#')
a.textContent = 'Имя пользователя'
li.append(a)
setUsers.append(li)
console.log(a)

const userListURL = 'https://jsonplaceholder.typicode.com/users'
const userList = fetch(userListURL, {
    method: 'GET'
})
console.log(userList)

userList
    .then((response) => {
        if (!response.ok) {
            console.log('Ошибка запроса')
        }
        return response.json()
    })
    .then((users) => {
        debugger
        a.textContent = users.name
        console.log(...users.username)
    })
    .catch((error) => {
        console.log(error)
    }).

