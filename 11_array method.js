let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);

console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));
console.log(`=====================for loop==========================`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}

console.log(`=================for in loop=========================`);

for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    console.log(element);
}

console.log(`==============travers (revers arrat)=====================`);
let totalElements = arrayOfNumbers.length - 1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);

}

console.log(`===========unshift()===begining element add=====================`);

arrayOfNumbers.unshift(45, 9);
arrayOfNumbers.unshift(4);
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

console.log(`=====================shift() method===================`);

arrayOfNumbers.shift(4);
console.log(arrayOfNumbers);

console.log("=======delete first element===== slice() ===========");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
let slicedElements = arrayNumbers.slice(2);
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);

console.log(`===========remove the element==========splice() method===================`);
console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
let splicedElements =  array_numbers.splice(2,2); // removing the starting for 2 and also 2 element remove
console.log(splicedElements);
console.log(array_numbers);

console.log("===0===insert the element without removing any other element====== splice() ===========");

array_numbers.splice(2,0,322);
console.log(array_numbers);


console.log("===1===insert the element removing any other element====== splice() ===========");
array_numbers.splice(2,1,322);
console.log(array_numbers);
array_numbers.splice(2,2,322,55);
console.log(array_numbers);
array_numbers.splice(2,1,322);
console.log(array_numbers);

