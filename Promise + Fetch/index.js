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

const postsListURL = 'https://jsonplaceholder.typicode.com/posts'
const commentURL = 'https://jsonplaceholder.typicode.com/comments?postId='
const dataContainer = document.querySelector('#data-container')

const renderPost = (postId) => {
    const postsURL = fetch(`${postsListURL}/${postId}`, {method: 'GET'})
    postsURL
        .then((response) => {
            if (!response.ok) {
                new Error('Ошибка загрузки!')
            }
            console.log('response', response)
            return response.json()
        })
        .then((post) => {
            const Post = document.createElement('div')
            Post.setAttribute('id', 'pots')
            Post.classList.add('post')

            const post__title = document.createElement('h1')
            post__title.classList.add('post__title')
            post__title.textContent = post.title

            const post__text = document.createElement('p')
            post__text.classList.add('post__text')
            post__text.textContent = post.body

            const post__comments_text = document.createElement('b')
            post__comments_text.classList.add('post__comments-text')
            post__comments_text.textContent = 'Комментарии'

            const post__comments = document.createElement('div')
            post__comments.classList.add('post__comments')

            const post_comment = document.createElement('div')
            post_comment.classList.add('post-comment')



            Post.append(post__title)
            Post.append(post__text)
            Post.append(post__comments_text)
            post__comments.append(post_comment)
            post_comment.append(post_comment__author)
            Post.append(post__comments)
            dataContainer.append(Post)

            console.log('post', post)
        })
        .catch((err) => {
            console.log('err', err)
        })
        .finally(() => {
            span.remove()
        })

}

renderPost(100)

let post_comment__author

const getPostOnId = (commens) => {
    const commentsRes = fetch(`${commentURL}${commens}`)
    commentsRes
        .then((res) => {
            console.log('res', res)
            if (!res.ok) {
                new Error('Ошибка загрузки!')
            }
            return res.json()
        })
        .then((comment) => {
            comment.map(Email => {
                post_comment__author = document.createElement('span')
                post_comment__author.classList.add('post-comment__author')
                post_comment__author.textContent = Email.email

                const post_comment__text = document.createElement('span')
                post_comment__text.classList.add('post-comment__text')
                post_comment__text.textContent = Email.body


            })
            console.log(comment)
        })
        .catch((err) => {
            console.log('err', err)
        })
}

getPostOnId(2)

// const appHolder = document.querySelector('#data-container')
//
// const dataPost = 'https://jsonplaceholder.typicode.com/posts'
// const dataComments = 'https://jsonplaceholder.typicode.com/comments?postId='
//
//
// const preloading = () => {
//     const loader = document.querySelector('#loader')
//     const isHidden = loader.hasAttribute('hidden')
//
//     if (isHidden) {
//         loader.removeAttribute('hidden')
//     } else {
//         loader.setAttribute('hidden', '')
//     }
// }
//
// const renderPost = (post) => {
//     const postEl = document.createElement('div')
//     postEl.className = 'post'
//     postEl.id = 'post'
//     appHolder.append(postEl)
//
//     const postTitle = document.createElement('h1')
//     postTitle.className = 'post__title'
//     postTitle.textContent = post.title
//     postEl.append(postTitle)
//
//     const postText = document.createElement('p')
//     postText.className = 'post__text'
//     postText.textContent = post.body
//     postEl.append(postText)
//
//     const postCommentsText = document.createElement('b')
//     postCommentsText.className = 'post__comments-text'
//     postCommentsText.textContent = 'Комментарии'
//     postEl.append(postCommentsText)
// }
//
// // renderComments
//
// const renderComments = (comments, appHolder) => {
//     const postEl = appHolder.querySelector('.post')
//
//     if (comments) {
//         comments.forEach(comment => {
//             const postComments = document.createElement('div')
//             postComments.className = 'post__comments'
//             postEl.append(postComments)
//             postEl.append(postComments)
//
//             const postComment = document.createElement('div')
//             postComment.className = 'post-comment'
//             postComments.append(postComment)
//
//             const postCommentAuthor = document.createElement('span')
//             postCommentAuthor.className = 'post-comment__author'
//             postCommentAuthor.textContent = comment.email
//             postComment.append(postCommentAuthor)
//
//             const postCommentText = document.createElement('span')
//             postCommentText.className = 'post-comment__text'
//             postCommentText.textContent = comment.body
//             postComment.append(postCommentText)
//         })
//     }
// }
//
//
// const getPost = (postId) => {
//     preloading()
//     const myPost = fetch(`${dataPost}/${postId}`, { method: 'GET'})
//
//     myPost
//         .then((response) => {
//             if (!response.ok) {
//                 new Error('Ошибка')
//             }
//             return response.json()
//         })
//         .then((post) => {
//             renderPost(post)
//             getComments(post.id)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//         .finally(() => {
//             preloading()
//         })
// }
//
//
// const getComments = (id) => {
//     preloading()
//     const myPostComment = fetch(`${dataComments}${id}`, { method: 'GET'})
//
//     myPostComment
//         .then(response => {
//             if (!response.ok) {
//                 new Error('Ошибка')
//             }
//             return response.json()
//         })
//         .then((comments) => {
//             renderComments(comments, appHolder)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//         .finally(() => {
//             preloading()
//         })
// }
//
// getPost(1)
