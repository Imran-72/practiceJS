//Задание 1
const myName = 'Imran'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen Minin'
const reasonText = 'это даёт мне свободу передвижения'
const numberOfMonth = 5

console.log(`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`)

//Задание 2
let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`

myInfoText = myInfoText.replaceAll('JavaScript', 'JavaScript'.toUpperCase())
console.log(myInfoText)
console.log('myInfoText', myInfoText.length)
console.log(myInfoText[0])
console.log(myInfoText[myInfoText.length - 1])

//Задание 3
// let userName = prompt('Как вас зовут?')
// userName = userName.toUpperCase().trim()
// console.log(userName)
// alert('Вас зовут ' + userName.trim())

//Задание 4
// let userAge = prompt('Сколько вам лет?')
// userAge = Number(userAge.trim())
// console.log(userAge)
// alert(`Вас зовут ${userName} и вам ${userAge} лет` )
//
// //Задание 5
// let userString = prompt('Введите текст для обрезки')
// userString =  userString.trim()
//
// let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
// startSliceIndex = startSliceIndex.trim()
//
// let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')
// endSliceIndex = endSliceIndex.trim()
//
// alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`)

//Задание 6 нужно сделать завтра
// let userText = prompt('Введите текст').trim()
// let wordFromText = prompt('Введите слово из текста').trim()
// let indexOfWord = userText.indexOf(wordFromText)
// alert(`Результат: ${userText.slice(0, indexOfWord)}`)

//Дополнительное задание
let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, ' +
    'императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется ' +
    'как встраиваемый язык для программного доступа к объектам приложений.'
let str = javaScriptDescription.slice(0, 139).replaceAll('a', 'A'.toUpperCase()).trim().repeat(3)
let endString = str.substr(-209, 1)
console.log(endString)
console.log(str)

// Задание 1

const myName = 'Muhammad';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'хочу путешествовать и работать удаленно';
const numberOfMonth = 3;

const greeting = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
console.log(greeting);

// Задание 2

const myInfoText = greeting.replaceAll('JavaScript', 'JAVASCRIPT');

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);

// Задание 3

const userName = prompt('What is your name?').trim().toLowerCase();

alert(`Вас зовут ${userName}!`);

// Задание 4

const userAge = Number(prompt('How old are you?').trim().toLowerCase());

alert(`Вам ${userAge} лет!`);

// Задание 5

const userString = prompt('Введите текст для обрезки').trim();
const startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки'));
const endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки'));

alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex).trim()}`);

// Задание 6

const userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введите слово из текста').trim();
const indexOfWord = userText.indexOf(wordFromText);

alert(`Результат: ${userText.slice(0, indexOfWord).trim()}`);

// Задание 7

const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
const halfLength = Math.floor(javaScriptDescription.length / 2);
const sliceStr = javaScriptDescription.slice(0, halfLength);
const replaceChar = sliceStr.replaceAll('a', 'A').trim();
const repeatStr = replaceChar.repeat(3);
const resStr = repeatStr[Math.floor(repeatStr.length / 2)];

console.log(resStr);