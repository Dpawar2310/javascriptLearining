console.log("=====Assignment for reduce ()========");
console.log("=====sum of all elements ========");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
let sum = array_numbers.reduce((value, index) => {
    return value + index;
});
console.log(`The Sum of all numbers : ${sum}`);

console.log("=====sum of all elements ========");
let even = array_numbers.filter((value) => {
    return value % 2 == 0;
});
console.log(`The even number are : ${even}`);
let sumOfEvenNumber = even.reduce((value, index) => {
    return value + index;
});
console.log(`The sum of even number is : ${sumOfEvenNumber}`);

console.log(`==== Avrage of given array ====`);
let avarage = array_numbers.reduce((value, index) => {
    sum = value + index;
    return sum / array_numbers.length
});
console.log(avarage);
