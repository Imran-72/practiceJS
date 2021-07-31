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

create_task_block.addEventListener('submit', (e) => {
    const {target} = e
    const inputTaskName = target.taskName
    e.preventDefault()
    const inputValue = inputTaskName.value
    if (!inputValue) return;
    let newTask = {
        id: 4,
        completed: false,
        text: inputValue
    }
    tasks.push(newTask)
    // tasks_list.append(create_task_block)
})

for (let i = 0; i < tasks.length; i++) {
    const task_item = document.createElement('div')
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

// task 3


console.log(tasks)

