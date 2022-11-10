let array = [10, 20, 30, 50, 47, 15, 42, 10, 20, 20, 50];
// array.forEach(function(currentValue, index , array){
// console.log(currentValue,index,array);
// });

array.forEach((currentValue, index) => console.log(currentValue, index)); // arrow function 

console.log(`=======Travesing Set Method=======`);
const setNumber = new Set(array);
setNumber.forEach((value) => {
    console.log(value);
});

console.log(`=======Travesing map Method=======`);
console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach((key, value) => {
    console.log(key, value);
});

