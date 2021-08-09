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
//
// const setUsers = document.querySelector('#data-container')
// const span = document.querySelector('span')
// //
//
// // const userListURL = 'https://jsonplaceholder.typicode.com/users'
// const userList = fetch(userListURL, {
//     method: 'GET'
// })
// //
// // userList
// //     .then((response) => {
// //         setUsers.append(span)
// //         if (!response.ok) {
// //             console.log('Ошибка запроса')
// //         }
// //         return response.json()
// //     })
// //     .then((users) => {
// //         users.map(user => {
// //                 const li = document.createElement('li')
// //                 const a = document.createElement('a')
// //                 a.setAttribute('href', '#')
// //                 a.textContent = 'Имя пользователя'
// //                 li.append(a)
// //                 setUsers.append(li)
// //                 a.innerHTML = user.username
// //         })
// //         span.remove()
// //     })
// //     .catch((error) => {
// //     })
//
// // task 2
//
// // const getUsersByIds = arr => {
// //     const todosIds = arr.map(ids => fetch(`${userListURL}/${ids}`))
// //     Promise.all(todosIds)
// //         .then(responses => {
// //             const result = responses.map(response => response.json())
// //             return Promise.all(result)
// //         })
// //         .then(todos => {
// //             todos.map(name => {
// //                 const li = document.createElement('li')
// //                 const a = document.createElement('a')
// //                 a.setAttribute('href', '#')
// //                 a.textContent = 'Имя пользователя'
// //                 li.append(a)
// //                 setUsers.append(li)
// //                 a.innerHTML = name.username
// //             })
// //             span.remove()
// //         })
// //         .catch(error => {
// //             console.log(error)
// //         })
// // }
// // getUsersByIds([5, 6, 2, 1])
//
// // task 3
//


// const setUsers = document.querySelector('#data-container')
const span = document.querySelector('span')
//
// const userListURL = 'https://jsonplaceholder.typicode.com/photos'
//
// const getFastestLoadedPhoto = (ids) => {
//     const result = ids.map(photos => fetch(`${userListURL}/${photos}`))
//     Promise.race(result)
//         .then(response => {
//             if (!response.ok) {
//                 new Error('Ошибка загрузки!')
//             }
//             return response.json()
//         })
//         .then(photo => {
//             const li = document.createElement('li')
//             li.classList.add('photo-item')
//
//             const img = document.createElement('img')
//             img.classList.add('photo-item__image')
//             img.setAttribute('src', `${photo.url}`)
//
//             const h3 = document.createElement(`h3`)
//             h3.classList.add('photo-item__title')
//             h3.textContent = `${photo.title}`
//
//             li.append(img)
//             li.append(h3)
//
//             setUsers.append(li)
//         })
//         .catch(error => {
//             console.log('error', error)
//         })
//         .finally(() => {
//             span.remove()
//         })
// }
// getFastestLoadedPhoto([60, 12, 55])

// dop task

const postsListURL = 'https://jsonplaceholder.typicode.com/posts/1'
const commentURL = 'https://jsonplaceholder.typicode.com/comments?postId=1'

const post = document.createElement('div')
post.setAttribute('id', 'pots')
post.classList.add('post')

const post__title = document.createElement('h1')
post__title.classList.add('post__title')
post__title.textContent = 'Название Поста'

const post__text = document.createElement('p')
post__text.classList.add('post__text')
post__text.textContent = 'Текст Поста'

const post__comments_text = document.createElement('b')
post__comments_text.classList.add('post__comments-text')
post__comments_text.textContent = 'Комментарии'

const post__comments = document.createElement('div')
post__comments.classList.add('post__comments')

const post_comment = document.createElement('div')
post_comment.classList.add('post-comment')

const post_comment__author = document.createElement('span')
post_comment__author.classList.add('post-comment__author')
post_comment__author.textContent = 'maxim@gmail.com'

const post_comment__text = document.createElement('span')
post_comment__text.classList.add('post-comment__text')
post_comment__text.textContent = 'laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo \n' +
    '                necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium'

post.append(post__title)
post.append(post__text)
post.append(post__comments_text)
post__comments.append(post_comment)
post_comment.append(post_comment__author)
post_comment.append(post_comment__text)
post.append(post__comments)


const renderPost = (postId) => {
    const postsURL = fetch(`${postsListURL}/${postId}`)
        .then((response) => {
            if (!response.ok) {
                new Error('Ошибка загрузки!')
            }
            console.log('response', response)
            return response.json()
        })
        .then((post) => {
            console.log('post', post)
        })
        .catch((err) => {
            console.log('err', err)
        })
        .finally(() => {
            span.remove()
        })

}

renderPost(1)


