console.log("=============Question1.==================");
var oddEven = function (num) {
    var result = num % 2 ? "Evem" : "Odd";
    //    console.log(`the no of ${num} is ${result}`);
    return console.log(`the no of ${num} is ${result}`);
}
oddEven(45);
oddEven(70);
oddEven(67);
oddEven(98);

console.log("=============Question2.==================");
console.log(`age=18`);
var num=18;
if (num <= 18) {
    console.log("You are Eligible for Voting");
} else {
    console.log("You are not Eligible for Voting");
}

console.log(`age=20`);
if (num <= 20) {
    console.log("You are Eligible for Voting");
} else {
    console.log("You are not Eligible for Voting");
}

console.log(`age=17`);
if (num <= 17) {
    console.log("You are Eligible for Voting");
} else {
    console.log("You are not Eligible for Voting");
}

console.log(`age=40`);
if (num <= 40) {
    console.log("You are Eligible for Voting");
} else {
    console.log("You are not Eligible for Voting");
}


console.log("=============Question3.==================");

var str ="JavaScript - ES6";
var result =str.length;
console.log(`The String is = ${str}`);
console.log(`The Stting length is = ${result}`);
if (str.length>10) {
    console.log(`The above Sting contains more than 10 characters`);
}else{
    console.log(`The above Sting are not contains more than 10 characters`);
    
}


console.log("=============Question4.==================");
var str = "JavaScript Language";
console.log(`The Sting are: ${str}`);
if (str.startsWith(`Java`)) {
    console.log(`String Startwith Java :`);
} else {
    console.log(`String are not Startwith Java :`);
}