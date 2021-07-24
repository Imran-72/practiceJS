// const user = {
//     name: 'Imran',
//     getName(age, exiriense) {
//         console.log(age)
//         console.log(exiriense)
//         // console.log(this)
//         console.log(this.name)
//     }
// }
// // const getUsername = user.getName.bind(user)
// const getName = user.getName
// // getName.call(user, 22, 1)
// getName.a(user, [22, 1])
// // getUsername(22, 3)

// console.log(student.improveLevel())
// for (let i = 1; i < 6; i++) {
//     if (i === 2) {
//         console.log(student.improveLevel(student.level = 2, student.stack.push('CSS')))
//     }
// if (i === 3) {
//     student.improveLevel(student.level = 3, student.stack.push('JavaScript'))
// }
// if (i === 4) {
//     student.improveLevel(student.level = 4, student.stack.push('React'))
// }
// if (i === 5) {
//     student.improveLevel(student.level = 5, student.stack.push('NodeJS'))
// }
// }

// task 1

// const student = {
//     stack: ['HTML'],
//     level: 1,
//     improveLevel() {
//         return this
//     }
// }
// console.log(student.improveLevel(student.level = 2, student.stack.push("CSS")))
// console.log(student.improveLevel(student.level = 3, student.stack.push("JavaScript")))
// console.log(student.improveLevel(student.level = 4, student.stack.push("React")))
// console.log(student.improveLevel(student.level = 5, student.stack.push("NodeJS")))
// if (student.level === 5) {
//     alert(`Студент выучил все технологии!`)
// }
// .improveLevel(student.level = 3)
// .improveLevel()
// for (let i = 1; i <= 6; i++) {
//     if (i === 2) {
//         student.improveLevel(student.level = 2, student.stack.push("CSS"))
//     }
//     if (i === 3) {
//         student.improveLevel(student.level = 3, student.stack.push("JavaScript"))
//     }
//     if (i === 4) {
//         student.improveLevel(student.level = 4, student.stack.push("React"))
//     }
//     if (i === 5) {
//         student.improveLevel(student.level = 5, student.stack.push("NodeJs"))
//         console.log(student.improveLevel())
//     } else if (i >= 5) {
//         alert(`Студент выучил все технологии!`)
//     }
// }

// task 2

// const dog = {
//     name: 'Чарли',
//     type: 'Собака',
//     makeSound() {
//         return 'Гав-Гав'
//     }
// }
//
// const bird = {
//     name: 'Петя',
//     type: 'Воробей',
//     makeSound() {
//         return 'Чик-чирик'
//     }
// }
//
// let newObj
//
// const makeDomestic = (isDomestic) => {
//     console.log(`${dog.type} по имени ${dog.name} говорит ${dog.makeSound()}`)
//     console.log(`${bird.type} по имени ${bird.name} говорит ${bird.makeSound()}`)
//     return dog.isDomestic = isDomestic
// }
//
// makeDomestic(true)
//
// console.log(dog)

// task 3

// const footballer = {
//     fullName: 'Cristiano Ronaldo',
//     attack: function() {
//         console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
//     },
//     scoreGoal(sound) {
//         console.log(`${this.fullName} забил гол! Вот это да!`);
//         this.celebrate(sound);
//     },
//     celebrate(sound) {
//         console.log(sound);
//     },
//     goToSubstitution: function(newPlayer) {
//         console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
//     }
// }
// const attack = footballer.attack.bind(footballer);
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;
// attack()
// score.call(footballer,'Сиииии')
// substitute.apply(footballer,['Paulo Dibala'])

// task dop

const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}