//Задание 1
// const existedUserLogin = 'the_best_user'
// const existedUserPassword = 12345678
//
// const userLogin = prompt('Введите логин').trim()
// const userPassword = prompt('Введите пароль').trim()
//
// if (existedUserLogin == userLogin && existedUserPassword == userPassword) {
//     alert(`Добро пожаловать, ${existedUserLogin}`)
// } else {
//     alert('Логин и (или) Пароль введены неверно!')
// }

//Задание 2
// let i = 0
// // while (i < 3) {
// //     let newStudent = prompt('Введите имя нового студента!')
// //     newStudent = newStudent.trim()
// //     if (newStudent) {
// //         alert(`Добро пожаловать, ${newStudent} !`)
// //     }
// //     i += 1
// // }
//
// do {
//     let newStudent = prompt('Введите имя нового студента!')
//     newStudent = newStudent.trim()
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent} !`)
//     }
//     i += 1
// } while (i < 3)

//Задание 3
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum += i
//     console.log(sum);
// }

//Задание 4
//
// let task1 = 'Сколько будет 2 + 2?'
// let userResponse1 = prompt(task1)
// let correctAnswer1 = 4
// Number(userResponse1) === correctAnswer1
//     ? alert('Ответ Верный')
//     : alert('Ответ Неверный')
//
// let task2 = 'Сколько будет 2 * 2?'
// let userResponse2 = prompt(task2)
// let correctAnswer2 = 4
// Number(userResponse2) === correctAnswer2
//     ? alert('Ответ Верный')
//     : alert('Ответ Неверный')
//
// let task3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
// let userResponse3 = prompt(task3)
// let correctAnswer3 = 1
// Number(userResponse3) === correctAnswer3
//     ? alert('Ответ Верный')
//     : alert('Ответ Неверный')
//
// let task4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
// let userResponse4 = prompt(task4)
// let correctAnswer4 = 12
// Number(userResponse4) === correctAnswer4
//     ? alert('Ответ Верный')
//     : alert('Ответ Неверный')
//
// let task5 = 'Сколько будет 2 + 2 * 2?'
// let userResponse5 = prompt(task5)
// let correctAnswer5 = 6
// Number(userResponse5) === correctAnswer5
//     ? alert('Ответ Верный')
//     : alert('Ответ Неверный')

let correctAnswers = incorrectAnswers = 0;

let a = Number(prompt('Сколько будет 2 + 2?'))
switch (a) {
    case 4:
        alert('Ответ Верный');
        correctAnswers++;
        break;
    default:
        alert('Ответ Неверный')
        incorrectAnswers++;
}
let b = Number(prompt('Сколько будет 2 * 2?'))
switch (b) {
    case 4:
        alert('Ответ Верный')
        correctAnswers++
        break;
    default:
        alert('Ответ Неверный')
        incorrectAnswers++
}
let c = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'))
switch (c) {
    case 1:
        alert('Ответ Верный')
        correctAnswers++
        break;
    default:
        alert('Ответ Неверный')
        incorrectAnswers++
}
let d = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет.' +
    ' Сколько в итоге конфет осталось у Маши?'))
switch (d) {
    case 12:
        alert('Ответ Верный')
        correctAnswers++
        break;
    default:
        alert('Ответ Неверный')
        incorrectAnswers++
}
let e = Number(prompt('Сколько будет 2 + 2 * 2?'))
switch (e) {
    case 6:
        alert('Ответ Верный')
        correctAnswers++
        break
    default:
        alert('Ответ Неверный')
        incorrectAnswers++
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)


