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

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    compareAge() {

    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

for (let i = 0; i < )
person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим
