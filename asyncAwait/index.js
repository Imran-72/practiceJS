// task 1

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
// let isLoading = false
//
// const createNewPost = async () => {
//     try {
//         isLoading = true
//         const response = await fetch(POSTS_URL, {method: 'POST'})
//         console.log('response', response)
//         const result = await response.json()
//         console.log('result', result)
//     } catch (error) {
//         console.log('error', error)
//     } finally {
//         isLoading = false
//         console.log('finally')
//     }
// }
// createNewPost()

// task 2

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// const getTodosByIds = async (ids) => {
//     try {
//         const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`))
//         console.log('requests', requests)
//         const responses = await Promise.all(requests)
//         console.log('responses', responses)
//         const results = responses.map(async (data) => {
//             if (!data.ok) {
//                 throw new Error('Ошибка загрузки данных с сервера!');
//             }
//             return await data.json()
//         })
//         console.log(results)
//         const dataResults = await Promise.all(results)
//         console.log('dataResults', dataResults)
//     } catch (error) {
//         console.log('error', error)
//     }
// }
// getTodosByIds([43, 21, 55, 100, 10])

// task 3

// const URL = 'https://jsonplaceholder.typicode.com/albums'
// const span = document.querySelector('span')
// const dataContainer = document.querySelector('#data-container')
//
//
// const renderAlbums = async () => {
//     try {
//         const response = await fetch(URL, {method: 'GET'})
//         if (!response.ok) {
//             dataContainer.style.color = 'red'
//             dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...'
//         }
//         const result = await response.json()
//         result.map(albums => {
//             const li = document.createElement('li')
//             li.textContent = albums.title
//             dataContainer.append(li)
//         })
//     } catch (error) {
//         console.log('error', error)
//     } finally {
//         span.remove()
//         console.log('finally')
//     }
// }
//
// renderAlbums()