// task 1

// const body = document.querySelector('#root')
//
// const form = document.createElement('form')
// form.classList.add('create-user-form')
//
// const label = document.createElement('label')
// label.textContent = 'Имя'
//
// const label2 = document.createElement('label')
// label2.textContent = 'Пароль'
//
// const input = document.createElement('input')
// input.setAttribute('type', 'text')
// input.setAttribute('name', 'userName')
// input.setAttribute('placeholder', 'Введите ваше имя')
//
// const input2 = document.createElement('input')
// input2.setAttribute('type', 'password')
// input2.setAttribute('name', 'password')
// input2.setAttribute('placeholder', 'Придумайте Пароль')
//
// const button = document.createElement('button')
// button.setAttribute('type', 'submit')
// button.textContent = 'Подтвердить'
//
// form.append(label)
// label.append(input)
// label2.append(input2)
// form.append(label2)
// form.append(button)
//
// console.log(form)


//task 2

const tasks = [
    {
        id: 1,
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: 2,
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: 3,
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]

const tasks_list = document.querySelector('.tasks-list')
const create_task_block = document.querySelector('.create-task-block')

// create_task_block.addEventListener('submit', (e) => {
//     const {target} = e
//     const inputTaskName = target.taskName
//     e.preventDefault()
//     const inputValue = inputTaskName.value
//     if (!inputValue) return;
//     let newTask = {
//         id: 4,
//         completed: false,
//         text: inputValue
//     }
//     tasks.push(newTask)
// })

// for (let i = 0; i < tasks.length; i++) {
//     const task_item = document.createElement('div')
//     task_item.classList.add('task-item')
//     task_item.setAttribute('data-task-id', `${tasks[i].id}`)
//
//     const task_item__main_container = document.createElement('div')
//     task_item__main_container.classList.add('task-item__main-container')
//
//     const task_item__main_content = document.createElement('div')
//     task_item__main_content.classList.add('task-item__main-content')
//
//     const checkbox_form = document.createElement('form')
//     checkbox_form.classList.add('checkbox-form')
//
//     const checkbox_form__checkbox = document.createElement('input')
//     checkbox_form__checkbox.classList.add('checkbox-form__checkbox')
//     checkbox_form__checkbox.setAttribute('type', 'checkbox')
//     checkbox_form__checkbox.setAttribute('id', `${tasks[i].id}`)
//
//     const task_1 = document.createElement('label')
//     task_1.setAttribute('for', `${tasks[i].id}`)
//
//     const task_item__text = document.createElement('span')
//     task_item__text.classList.add('task-item__text')
//     task_item__text.textContent = `${tasks[i].text}`
//
//     const task_item__delete = document.createElement('button')
//     task_item__delete.className = 'task-item__delete-button default-button delete-button'
//     task_item__delete.setAttribute('data-delete-task-id', '5')
//     task_item__delete.textContent = 'Удалить'
//
//     // task_item__main_container.append(task_item__main_content)
//     // task_item__main_content.append(checkbox_form)
//     // checkbox_form.append(checkbox_form__checkbox)
//     // checkbox_form.append(task_1)
//     // task_item__main_content.append(task_item__text)
//     // task_item__main_container.append(task_item__delete)
//     // task_item.append(task_item__main_container)
//     // tasks_list.append(task_item)
//
// }

// task 3
let task_item

const renderTasks = () => {
    for (let i = 0; i < tasks.length; i++) {
        task_item = document.createElement('div')
        task_item.classList.add('task-item')
        task_item.setAttribute('data-task-id', `${tasks[i].id}`)

        const task_item__main_container = document.createElement('div')
        task_item__main_container.classList.add('task-item__main-container')

        const task_item__main_content = document.createElement('div')
        task_item__main_content.classList.add('task-item__main-content')

        const checkbox_form = document.createElement('form')
        checkbox_form.classList.add('checkbox-form')

        const checkbox_form__checkbox = document.createElement('input')
        checkbox_form__checkbox.classList.add('checkbox-form__checkbox')
        checkbox_form__checkbox.setAttribute('type', 'checkbox')
        checkbox_form__checkbox.setAttribute('id', `${tasks[i].id}`)

        const task_1 = document.createElement('label')
        task_1.setAttribute('for', `${tasks[i].id}`)

        const task_item__text = document.createElement('span')
        task_item__text.classList.add('task-item__text')
        task_item__text.textContent = `${tasks[i].text}`

        const task_item__delete = document.createElement('button')
        task_item__delete.className = 'task-item__delete-button default-button delete-button'
        task_item__delete.setAttribute('data-delete-task-id', '5')
        task_item__delete.textContent = 'Удалить'

        task_item__main_container.append(task_item__main_content)
        task_item__main_content.append(checkbox_form)
        checkbox_form.append(checkbox_form__checkbox)
        checkbox_form.append(task_1)
        task_item__main_content.append(task_item__text)
        task_item__main_container.append(task_item__delete)
        task_item.append(task_item__main_container)
        tasks_list.append(task_item)

    }

}

renderTasks()

const validate = document.createElement('span')
validate.classList.add('error-message-block')

create_task_block.addEventListener('submit', (event) => {
    event.preventDefault()
    const {target} = event
    const inputName = target.taskName
    let inputValue = inputName.value
    tasks_list.innerHTML = ''
    let createNewTask
    if (inputValue) {
        alert(`Вы добавили новую задачу ${inputValue}`)
        createNewTask = {
            id: tasks.length + 1,
            completed: false,
            text: inputValue
        }
        tasks.push(createNewTask)
        renderTasks()
    } else {
        alert('Введите текст задачи')
        renderTasks()
    }
    if (inputValue === '') {
        validate.textContent = 'Название задачи не должно быть пустым.'
        create_task_block.append(validate)
    }
        // else if (createNewTask.text === createNewTask.text) {
        //     validate.textContent = 'Задача с таким названием уже существует.'
        //     create_task_block.append(validate)
    // }
    else {
        validate.remove()
    }
})

// task 5
const body = document.querySelector('#body')

let modal_overlay = document.createElement('div')
modal_overlay.className = 'modal-overlay modal-overlay_hidden'

const delete_modal = document.createElement('div')
delete_modal.className = 'delete-modal'

const delete_modal__question = document.createElement('h3')
delete_modal__question.className = 'delete-modal__question'
delete_modal__question.textContent = 'Вы действительно хотите удалить эту задачу?'

const delete_modal__buttons = document.createElement('div')
delete_modal__buttons.className = 'delete-modal__buttons'

const delete_modal__button = document.createElement('button')
delete_modal__button.className = 'delete-modal__button delete-modal__cancel-button'
delete_modal__button.textContent = 'Отмена'

const delete_modal__button2 = document.createElement('button')
delete_modal__button2.className = 'delete-modal__button delete-modal__confirm-button'
delete_modal__button2.textContent = 'Удалить'

delete_modal__buttons.append(delete_modal__button)
delete_modal__buttons.append(delete_modal__button2)
delete_modal.append(delete_modal__question)
delete_modal.append(delete_modal__buttons)
modal_overlay.append(delete_modal)
body.append(modal_overlay)


tasks_list.addEventListener('click', (e) => {
    const {target} = e
    const navButton = target.closest('.task-item__delete-button')
    if (navButton !== null) {
        modal_overlay.classList.remove('modal-overlay_hidden')
    } else {
        modal_overlay.classList.add('modal-overlay_hidden')
    }
})

delete_modal__button.addEventListener('click', (e) => {
    const {target} = e
    const clickButton = target
    if (clickButton) {
        modal_overlay.remove()
    }
})

delete_modal__button2.addEventListener('click', (e) => {
    const {target} = e
    const clickDelete = target
    if (clickDelete) {
        delete task_item.value
        task_item.remove()
        modal_overlay.remove()
    }
})
