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
const span = document.querySelector('span')


// const userListURL = 'https://jsonplaceholder.typicode.com/users'
const userListURL = 'https://jsonplaceholder.typicode.com/photos'
const userList = fetch(userListURL, {
    method: 'GET'
})
//
// userList
//     .then((response) => {
//         setUsers.append(span)
//         if (!response.ok) {
//             console.log('Ошибка запроса')
//         }
//         return response.json()
//     })
//     .then((users) => {
//         users.map(user => {
//                 const li = document.createElement('li')
//                 const a = document.createElement('a')
//                 a.setAttribute('href', '#')
//                 a.textContent = 'Имя пользователя'
//                 li.append(a)
//                 setUsers.append(li)
//                 a.innerHTML = user.username
//         })
//         span.remove()
//     })
//     .catch((error) => {
//     })

// task 2

// const getUsersByIds = arr => {
//     const todosIds = arr.map(ids => fetch(`${userListURL}/${ids}`))
//     Promise.all(todosIds)
//         .then(responses => {
//             const result = responses.map(response => response.json())
//             return Promise.all(result)
//         })
//         .then(todos => {
//             todos.map(name => {
//                 const li = document.createElement('li')
//                 const a = document.createElement('a')
//                 a.setAttribute('href', '#')
//                 a.textContent = 'Имя пользователя'
//                 li.append(a)
//                 setUsers.append(li)
//                 a.innerHTML = name.username
//             })
//             span.remove()
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }
// getUsersByIds([5, 6, 2, 1])

// task 3

const getFastestLoadedPhoto = (ids) => {
    Promise.race(ids.map(photos => fetch(`${userListURL}/${photos}`)))
        .then(response => {
            return response.json()
        })
        .then(todos => {
            const li = document.createElement('li')
            li.classList.add('photo-item')

            const img = document.createElement('img')
            img.classList.add('photo-item__image')
            img.setAttribute('src', `${userListURL}`)

            const h3 = document.createElement(`${todos.title}`)
            h3.classList.add('photo-item__title')
            h3.textContent = 'accusamus beatae ad facilis cum similique qui sunt'

            li.append(img)
            li.append(h3)

            setUsers.append(li)
            console.log('todos', todos)
        })
}
getFastestLoadedPhoto([60, 12, 55])





// const dataContainer = document.querySelector('#data-container')
// const photoUrl = 'https://jsonplaceholder.typicode.com/photos'

// const preloading = () => {
//   const loader = document.querySelector('#loader')
//   const isHidden = loader.hasAttribute('hidden')

//   if (isHidden) {
//     loader.removeAttribute('hidden')
//   } else {
//     loader.setAttribute('hidden', '')
//   }
// }

// const createPhotoElement = (photo) => {
//   const photoElement = document.createElement('li')
//   photoElement.className = 'photo-item'

//   const img = document.createElement('img')
//   img.src = photo.url
//   img.className = 'photo-item__image'
//   photoElement.append(img)

//   const title = document.createElement('h3')
//   title.className = 'photo-item__title'
//   title.textContent = photo.title

//   return photoElement
// }

// const getFastestLoadedPhoto = (ids) => {
//   preloading()
//   const requests = ids.map(id => fetch(`${photoUrl}/${id}`))
//   console.log('requests', requests)

//   Promise.race(requests)
//   .then(response => {
//     console.log('responses', response)
//     if (!response.ok) {
//         new Error('Ошибка загрузки!')
//       }
//     return response.json()
//   })
//   .then(photo => {
//     console.log('responses', photo)
//     const photoElement = createPhotoElement(photo)
//     dataContainer.append(photoElement)
//   })
//   .catch(err => {
//     console.error('err', err)
//   })
//   .finally(() => {
//     preloading()
//   })
// }

// getFastestLoadedPhoto([12, 55, 60])



