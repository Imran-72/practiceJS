// task 1

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    technologies = [];

    status = 'Junior';

    setTechnologies = function (technologies) {
       technologies = [
            ...technologies,
        ];

    }

    setNewStatus = function (newStatus) {

        status = newStatus;

    }

}

const student = new Student('Maxim', 20);

student.setTechnologies(['HTML', 'CSS', 'JavaScript']);

student.setNewStatus('Middle');

console.log(student);
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