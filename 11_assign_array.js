const array_namber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log('=========Total element in Array is : ===========');
let len = array_namber.length;
console.log(len);

console.log('=========First and last element in Array is log on ===========');
console.log(`first element is : ${array_namber[0]} last element is : ${array_namber[10]}`);

console.log('=========Third last element log on ===========');
// for (let index = 8; index <= array_namber.length; index=index+0) {
//     const element = array_namber[index];
//     console.log(element);
// }

console.log('=========Even Number find in array ===========');
for (let index = 0; index < array_namber.length; index++) {
    const element = array_namber[index];
    if (element % 2 == 0) {
        console.log(`The even Number of Array is: ${element}`);
    }
}

console.log('=========Even Number find in array ===========');
for (let index = 0; index < array_namber.length; index++) {
    const element = array_namber[index];
    if (element % 2 == 1) {
        console.log(`The odd Number of Array is: ${element}`);
    }
}

console.log('=========Even Position number are find in array ===========');
for (let index = 0; index < array_namber.length; index++) {
    const element = array_namber[index];
    if (index % 2 == 0) {
        console.log(element);
    }
}

console.log('=========Odd Position number are find in array ===========');
for (let index = 0; index < array_namber.length; index++) {
    const element = array_namber[index];
    if (index % 2 == 1) {
        console.log(element);
    }
}
console.log('=========Sum of all Elements in array ===========');
let sum = 0;
for (let index = 0; index < array_namber.length; index++) {
    const element = array_namber[index];
    if (element) {
        sum = sum + element;
    }
}
console.log(`Sum of all elements is : ${sum}`);

console.log('=========Finding the Multiple of 5 elements===========');
for (let index = 0; index < array_namber.length; index++) {
    const element = array_namber[index];
    if (element % 5 == 0) {
        console.log(element);
    }

}

console.log('=========Inclues===========');
var findNumber = array_namber.includes(115);
console.log(findNumber);
var findNumber = array_namber.includes(23);
console.log(findNumber);
