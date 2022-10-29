let person = {
    name: "Mohit",
    age: 31,
    city: "Pune",
    address: {
        pin: 431202,
        street: "Kanch pokali"
    }
}
// console.log(person.name, person.age, person.city);
// console.log(person);
let student = JSON.parse(JSON.stringify(person));
// let student = {...person};
console.log(student);

student.city = "Mumbai";
person.age = 33;
console.log(student.city, person.city);
console.log(student.age, person.age);

// student.address.street = "Khav Galli";
// console.log(student.address.street);
// console.log(person.address.street);

// console.table(person);
// console.table(student);

// console.log(`-----------------------------------------------------------------`);

// mobiles = {
//     mobile1: 'nokia',
//     mobile2: `samsang`,
//     mobile3: "jio",
//     mobModels: {
//         model1: 2022,
//         model2: 2012,
//         model3: 2017
//     }
// }

// mobiles.mobModels.model4 = 2012;

// let desp = JSON.parse(JSON.stringify(mobiles.mobModels))
// console.log(desp);

// console.log(`----------------------------------------------------------------`);

// class FullName{
//     constructor(firstName,middleName,lastName){
//         this.firstName=firstName;
//         this.middleName=middleName;
//         this.lastName=lastName;
//     }
//     details(){
//         console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
//     }
// }

// let nameDesp = new FullName("Rohit","Arvind","Pawar");
// console.log(nameDesp);

// nameDesp.details();

