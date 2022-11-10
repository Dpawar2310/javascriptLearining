console.log(`=====Assignment for filter()==========`);
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`===== Find out all number are geter than 50 and log =======`);
let findGreterValue = array_numbers.filter((value) => {
    return value > 50;
});
console.log(findGreterValue);

console.log(`===== Find out Even numbers and log =======`);
let evenNumbers = array_numbers.filter((value) => {
    return value % 2 == 0;
});
console.log(evenNumbers);

console.log(`===== Find out Odd numbers and log =======`);
let oddNumbers = array_numbers.filter((value) => {
    return value % 2 != 0;
});
console.log(oddNumbers);

console.log(`===== Find all numbers multiple by 5 and log =======`);
let mult = array_numbers.filter((value) => {
    return value % 5 == 0;
});
console.log(mult);

console.log(`===== Find out all number between 20 and 50 =======`);
array_numbers.filter((value) => {
    if (value >= 20 && value <= 50) {
        console.log(value);
    }
})