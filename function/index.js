//task one

//function expression
// function getName1(name) {
//     return `Имя равно ${name}`
// }
//
// console.log(getName1(`Imran`))
//
// //function declaration
// const getName2 = function(name) {
//     return `Имя равно ${name}`
// }
//
// console.log(getName2(`Maga`))
//
// //стрелочная функция
// const getName3 = (name) => `Имя равно ${name}`
//
// console.log(getName3(`Heda`))

//task two

// const getSumOfNumbers = (number, type = 'odd') => {
//
//     let sum = 0
//
//     for (let i = 1; i <= number; i++) {
//
//         if (type === 'odd' && i % 2 !== 0) {
//             sum += i
//         } else if (type === 'even' && i % 2 === 0) {
//             sum += i
//         } else if (type === '') {
//             sum += i
//         }
//     }
//     return sum
// }
//
// console.log(getSumOfNumbers(100, ''))

// task 3

// const getDivisors = (number = 1) => {
//     let a = 0
//     let b = 0
//
//     if (number <= 0 && Number.isInteger(number)) {
//         alert(`number должен быть целым числом и больше нуля!`)
//     }
//
//     while (a <= number) {
//         if (number % a === 0) {
//             b++
//         }
//         a++
//     }
//     return b
// }
// console.log(getDivisors())
//
// // task 4
//
// const checkQuestionAnswer = (question, correctAnswer) => {
//     let userCorrectAnswer = prompt(question).toLowerCase().trim()
//     let CorrectAnswer = correctAnswer.toLowerCase().trim()
//
//     if (CorrectAnswer === userCorrectAnswer) {
//         alert(`Ответ верный`)
//     } else {
//         alert(`Ответ неверный`)
//     }
// }
// checkQuestionAnswer(`Арбуз это фрукт или ягода?`, `Ягода`)
// checkQuestionAnswer(`Сколько в среднем зубов у взрослого человека?`, `32`)
// checkQuestionAnswer(`Как называется самая маленькая птица в мире?`, `Колибри`)

// task dop

const showSuccessMessage = (message) => {
    console.log(message)
}
const showErrorMessage = (message) => {
    console.error(message)
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    let isErrorSymbol = true
    for (let i = 0; i <= text.length; i++) {
        if (text[i] === errorSymbol) {
            isErrorSymbol = false
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`)
        }
    }
    if (isErrorSymbol){
        successCallback('В данном тексте нет запрещенных символов')
    }
}
const messageText = `Привет! Как дела! Давно мы с тобой не виделись.`
checkTextOnErrorSymbol(messageText, 'а', showSuccessMessage, showErrorMessage)

// let name = `Imran!!!`
// let re = /[A-Z а-я]/
//
// for (let i = 0; i <= name.length; i++) {
//     let newName = name[i]
//     if (newName.search(re) !== -1) {
//         console.log('yeeeee')
//     } else {
//         console.log('beeeeee')
//     }
// }


// function isValid(username) {
//     return /^[a-zA-Z0-9]+$/.test(username)
// }
//
// console.log(isValid('Adam'));
// console.log(isValid('Adam$%%@#@D)*FU(Q'));

const showSuccessMessage = (message) => {
    console.log(message)
}

const showErrorMessage = (message) => {
    console.error(message)
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    let isErrorSymbol = true

    for (let i = 0; i <= text.length; i++) {
        let currentEl = text[i]
        if (currentEl === errorSymbol) {
            isErrorSymbol = false
            errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${i}.`)
        }
    }

    if (isErrorSymbol) successCallback('В данном тексте нет запрещенных символов')

}

let str = 'Привет! Как дела? Давно мы с тобой не виделись.'

console.log(checkTextOnErrorSymbol(str, 'а', showSuccessMessage, showErrorMessage))
//
