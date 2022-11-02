let setOfNumbers = new Set(); // set method does not containe duplicate elements and values 
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2); // we are adding the element using add method 
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(setOfNumbers);//  is overide (not display duplicate value)

console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== Checking number elements available into set =======");
console.log(setOfNumbers.size); // showing arrays size of elements

console.log("====== Deleting element 9 =======");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("====== Deleting element 9 =======");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("====== Check whether element 7 available into set or not =======");
let isAvailable = setOfNumbers.has(7); // has() method display the value is avalabile or not in boolean format
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("====== Traversing set =====for of loop are used in set method==");
for (const element of setOfNumbers) {
    console.log(element);
}

console.log(`=========using spread operators===========`); 
const arryaNumbvber = [1, 5, 47, 8, 65, 8, 5, 1];
let arrayUniqeNumber = [...new Set(arryaNumbvber)];
console.log(arrayUniqeNumber);