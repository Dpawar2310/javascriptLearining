console.log(0/0);

var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult);

var myName = "TEST";
var myAge = "31";
console.log(typeof myName);
console.log(typeof myAge);

var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);

var myNameString =  +myName
console.log(myNameString, typeof myNameString);

var myName = "TEST";
var myAge = "31";
console.log(typeof myName);
console.log(typeof myAge);

var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);

var myNameString =  +myName
console.log(myNameString, typeof myNameString);

console.log("===== Implicit conversion======");
console.log("4"-true); // 4-1

var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);
