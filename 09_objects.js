let objectName = {
    fullName: 'Rohit',
    age: 26,
    address: {
        street: "pune",
        pincode: 124575,
        state: "mh",
    },
    eat: function () {
        console.log('create fuction');
    },
    
    person:function() {
        console.log(this.fullName);
    },
    details:function(){
        let personDetails =`details are ${this.fullName},${this.age},${this.address.state}`;
        return personDetails;
    }
}

let pDetails = objectName.details();
console.log(pDetails);


console.log(typeof objectName);
console.table(objectName.address);

console.log(objectName);
var personFullName = objectName.fullName
console.log(personFullName);
console.log(objectName.fullName);

objectName.pincode = 123456;
console.table(objectName);

// update value
objectName.fullName = "Rohit Pawar";
console.table(objectName);

objectName.eat(); 

