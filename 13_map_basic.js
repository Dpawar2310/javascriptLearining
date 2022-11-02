let map = new Map(); // map method are contains the keys and values 
map.set(22, "sachin");
map.set(11, "dhoni");
map.set(33, "sachin");
map.set(77, "sachin");

console.log(`======adding duplicate key ============`);
map.set(11, "dravind"); //updataing value overide  11 key and dravind is value
console.log(map);

console.log(`======Retriving value ============`);
let value = map.get(33); // the get method getting key for the values and showes the value
console.log(value);

console.log(map.get(99)); // we are get the key but not mention in the array and also we are not get value for the key then result show is undefined

console.log(`======Deleting record ============`);
map.delete(11);
console.log(map);

console.log(`======is keys available or not ============`);
let yes = map.has(33);
console.log(yes);

console.log("------ Traversing over map collection -----we are using for of loop---");
let setOfKeys = map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key)); // to showing the all keys and values
}

console.log(`=============== using class object and constructor method================`);
class Person {
    constructor(rollNo, fullName, city, age, gender) {
        this.rollNo = rollNo;
        this.fullName = fullName;
        this.city = city;
        this.age = age;
        this.gender = gender;
    }
    details() {
        console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person(22, "Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person(44, "Billgates", "USA", 67, "Male");

let mapOfPersons = new Map(); // Here using map method to allow the define keys and values
mapOfPersons.set(22, personAnil); // Here using set method for give the key and there object
mapOfPersons.set(33, personAnita);
mapOfPersons.set(44, personBill);

let mapKeys = mapOfPersons.keys(); // 22   33   44
for (const key of mapKeys) {
    let personObject = mapOfPersons.get(key);
    personObject.details();
}

