'use strict'

function display(name, ...myName) {
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true);

function divide(x, y=1){  // y is default value mentioned
    console.log(x/y);
}
divide(10);


'use strict'
 
let person = {
    fullName: "Mohit Aglawe",
    age: 31,
    city: "Pune",
    pin: 431202,
    state: "MH",
    isMarried: true
}

console.log(`=====================destructuring=======================`);
// let fullName = person.fullName; 
//  let city = person.city; 
//  let pin = person.pin;
//  let state = person.state;
//  let isMarried = person.isMarried;

 let { fullName, city, pin, state, isMarried }  = person;
 console.log(fullName, city, pin, state, isMarried);

 let arrayOfNames = ["Monu", "Golu", "Chottu", "Ponu", "dholu"]
 //  let ele0 =  arrayOfNames[0];
 //  let ele1 =  arrayOfNames[1];
 //  let ele2 =  arrayOfNames[2];
 //  let ele3 =  arrayOfNames[3];
 //  let ele4 =  arrayOfNames[4];
 //  let ele5 =  arrayOfNames[5];
  let [ele0, ele1, ele2, ele3, ele4 ] = arrayOfNames;
 console.log(arrayOfNames);
 console.log(ele0, ele1, ele2, ele3, ele4,ele5);