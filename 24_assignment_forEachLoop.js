console.log(`++++++ Assignment Of Using ForEach Loop with Arrow function +++++`);
console.log(`========log the array elements and index ==========`);
const array_number = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array_number.forEach((value, index) => {
    console.log(value, index);
});

console.log(`========find the Positive Numbers ==========`);
array_number.forEach((value) => {
    if (value > 0) {
        console.log(value);
    }
});

console.log(`========find the Negative Numbers ==========`);
array_number.forEach((value) => {
    if (value < 0) {
        console.log(value);
    }
});

console.log(`========finding a even number  ==========`);
array_number.forEach((value) => {
    if (value % 2 == 0) {
        console.log(value);
    }
});

console.log(`======== sum of all elements  ==========`);
// // const array_number = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
let sum = array_number.reduce((value, index) => {
    return value + index;
});
console.log(`The sum of all elements : ${sum}`);

console.log(`======== even position array value  ==========`);
array_number.forEach((value, index) => {
    if (index % 2 == 0) {
        console.log(value);
    }
});

console.log(`======== Odd position array value  ==========`);
array_number.forEach((value, index) => {
    if (index % 2 == 1) {
        console.log(value);

    }
});

