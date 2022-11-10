const arrayNumber = [1, 5, 7, 6, 9, 4, 4];
console.log(arrayNumber); // existing array
const newArray = arrayNumber.map((element) => {
    return element + 5;
});
console.log(newArray); // add value ane creating new array like newArray name
