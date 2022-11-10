let arrayOfNumber = [4, 5, 2, 5, 47, 4,];
let usingReduceMethod = arrayOfNumber.reduce((value, runninngTotal) => {
    return value + runninngTotal;
},100);// adding these value in output 67;
console.log(usingReduceMethod);
