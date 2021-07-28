// task 1
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     technologies = [];
//     status = 'Junior';
//
//     setTechnologies(technologies) {
//          this.technologies = [
//             ...technologies,
//         ]
//     }
//
//     setNewStatus(newStatus) {
//         this.status = newStatus;
//     }
// }
//
// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);
// function people(name) {
//     this.name = name
//
//     this.getName = function () {
//         return this.name
//     }
// }

// class people {
//     constructor(name) {
//         this.name = name
//     }
//
//     getName() {
//         return this.name
//     }
// }

// class Plane {
//     constructor(type, passNamber) {
//         this.type = type
//         this.passNamber = passNamber
//     }
//
//     setFligth() {
//         console.log('Gooooo')
//     }
// }
//
// class newPline extends Plane {
//     constructor(type,passNamber) {
//         super(type,passNamber);
//     }
// }
// const pline = new newPline('пассажирский', 20)
// console.log(pline)
// pline.setFligth()
// const namePeople = new people('Imran')
// const namePeople1 = new people('Kamila')
// console.log('name', namePeople1)
// console.log('name1', namePeople.getName())
// console.log('name2', namePeople.name)

// task 2

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//
//     compareAge(person) {
//         if (person.age >= this.age) {
//             alert(`${person.name} старше чем ${this.name}`)
//         } else {
//             alert(`${person.name} младше чем ${this.name}`)
//         }
//     }
// }
//
// const person1 = new Person('Максим', 23);
// const person2 = new Person('Светлана', 36);
// const person3 = new Person('Ирина', 23);
//
// person1.compareAge(person2); // Максим младше, чем Светлана
// person2.compareAge(person3); // Светлана старше, чем Ирина
// person3.compareAge(person1); // Ирина младше, чем Максим

// task 3

// class CarService {
//     static DefaultWorkingHours = {
//         from: '9:00',
//         till: '20:00',
//     }
//
//     constructor(name, workingHours) {
//         this.name = name
//         this.workingHours = workingHours || CarService.DefaultWorkingHours
//     }
//
//     repairCar(carName) {
//         let fromTime = +this.workingHours.from.split(':00').join('')
//         if (new Date().getHours() < fromTime) {
//             alert(`К сожалению, мы сейчас закрыты. Приходите завтра`)
//         } else if (new Date().getHours() > fromTime) {
//             alert(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
//         } else if (!carName) {
//             return console.error(`Вам необходимо указать название машины, чтобы ее отремонтировать`)
//         }
//     }
//
// }
//
// const carService = new CarService('RepairCarNow', {from: '12:00', till: '20:00'})
// carService.repairCar('BMW')

// task 4

class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    add(word, description) {
        if (this.words.word !== word) {
            this.words.word = word
        }
        if (this.words.description !== description) {
            this.words.description = description
        }
    }

    remove(word) {
        if (this.words.word === word) {
            delete this.words.word
        }
    }

    get(word) {
        if (this.words.word === word) {
            return this.words.word
        }
    }

    showAllWords() {
        console.log(`${this.words.word} - ${this.words.description}`)
    }
}

const dictionary = new Dictionary('Толковый словарь')

// task 5

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }

    add(word, description) {
        super.add(word, description)
        this.words.word = word
        this.words.description = description
        this.words.isDifficult = true
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.showAllWords()
hardWordsDictionary.remove('неологизм');



