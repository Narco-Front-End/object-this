const hotel = {
    quantityOfPlaces: 10,
    priceByPlace: 20,
    bankAccount: 0,
    guests: {},
    getLength: function () {
        return Object.keys(this.guests).length;
    },
    getActualFreePlace: function () {
        return this.quantityOfPlaces - this.getLength();
    },
    paidPerPlace: function () {
        return this.bankAccount + this.priceByPlace;
    },
    checkInGuest: function (firstName, lastName, moneyQty) {
        if (moneyQty < this.priceByPlace) {
            return 'Sorry, you do not have enough money';
        } else if (this.getActualFreePlace() < this.getLength()) {
            return 'Sorry, we do not have free spaces';
        } else {
            return Object.assign({firstName, lastName, moneyQty:moneyQty-this.priceByPlace}, this.guests, this.paidPerPlace());
        }
    }
}


console.log(hotel.checkInGuest('Oleksii', 'Ustinov', 30));


//
// const objExample = {
//     allLessonsQuantity: 30,
//     students: [
//         {
//             name: 'Bohdan',
//             grade: 97,
//             group: 1,
//             amountOfMissedLessons: 12,
//         },
//         {
//             name: 'Oleksii',
//             grade: 95,
//             group: 1,
//             amountOfMissedLessons: 0,
//         },
//         {
//             name: 'Ivan',
//             grade: 54,
//             group: 2,
//             amountOfMissedLessons: 19,
//         },
//         {
//             name: 'Anton',
//             grade: 79,
//             group: 2,
//             amountOfMissedLessons: 25,
//         },
//         {
//             name: 'Valentin',
//             grade: 89,
//             group: 1,
//             amountOfMissedLessons: 3,
//         },
//         {
//             name: 'Vladimir',
//             grade: 97,
//             group: 1,
//             amountOfMissedLessons: 5,
//         },
//         {
//             name: 'Julia',
//             grade: 82,
//             group: 2,
//             amountOfMissedLessons: 3,
//         }, {
//             name: 'Dirol',
//             grade: 23,
//             group: 1,
//             amountOfMissedLessons: 30,
//         }
//
//     ],
//     //Створимо метод для отримання оцінок студентів
//     getAGradeStudents: function () {
//         return this
//             .students
//             .filter((item) => item.grade >= 90);
//     },
//     //Створимо метод для отримання імен студентів
//     getStudentsName: function () {
//         return this
//             .students
//             .filter((item) => item.grade >= 90)
//             .map((item) => item.name)
//             .join(', ');
//     },
//     addAStudent(name, grade, group = 1, missing = 0) {
//         this.students.push({name, grade, group, missing})
//     },
//     showStudentsWithLessThanFifty() {
//         return this
//             .students
//             .filter((student) => (student.amountOfMissedLessons * 100 / this.allLessonsQuantity) < 50)
//             .map((item) => item.name)
//             .join(', ');
//     },
//     showStudentsWithoutMissedLessons(attending) {
//         if (attending > 100 || attending < 0) {
//             return 'Incorrect input';
//         }
//         return this
//             .students
//             .filter((student) => student.amountOfMissedLessons * 100 / this.allLessonsQuantity < attending)
//             .map((item) => item.name)
//             .join(', ');
//     },
//     showStudentsByGroup(group) {
//         // if (!this.students.some((student) => student.group === group)) {
//         //     return 'Incorrect group'
//         // }
//         const result = this
//             .students
//             .filter((student) => student.group === group)
//             .map((item) => item.name)
//             .join(', ');
//
//         return !result ? 'Incorrect group' : result;
//     },
// };
// console.log(objExample.getAGradeStudents());
// //Додамо ще одного студента
// objExample.students.push({name: 'Helga', grade: 100, group: 1, amountOfMissedLessons: 0});
// console.log(objExample.getAGradeStudents());
// console.log(objExample.showStudentsWithLessThanFifty());
// console.log(objExample.showStudentsWithoutMissedLessons(10));
// console.log(objExample.showStudentsByGroup(2));
//
//
// function getRAndomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }
//
// const hospital = {
//     maxPatientsAmount: 6,
//     patients: [],
//     id: 1,
//     addAPatient: function (name, age, diagnose, isNearDeath) {
//         if (this.patients.length >= this.maxPatientsAmount) return "We can't take more patients";
//         const patient = {
//             name,
//             age,
//             diagnose,
//             isNearDeath,
//             id: this.id++
//         }
//         this.patients.push(patient);
//         return patient;
//     },
//     getPatientNames() {
//         return this
//             .patients
//             .map((patient) => patient.name)
//             .join(', ');
//     },
//     treatAPatient(id) {
//         const patient = this.patients.find((patient) => patient.id === id);
//         const patientIndex = this.patients.findIndex((patient)=>patient.id===id);
//         if(patient.isNearDeath){
//
//         } else{
//
//         }
//     }
// }
// console.log(hospital.treatAPatient(2))
//
// console.log(hospital.addAPatient('John', 35, 'cholera', 'true'))
// console.log(hospital.addAPatient('Stanley', 25, 'running nose', 'false'))
// console.log(hospital.addAPatient('Martin', 35, 'broken bone', 'true'))
// console.log(hospital.addAPatient('Michael', 21, 'Bad pain', 'false'))
// console.log(hospital.getPatientNames());
