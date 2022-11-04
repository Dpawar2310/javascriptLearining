console.log("====Name:- Dipali Pawar=======");
console.log("==============Question1.=============");
var message = () => {
console.log(`${`"Good Evening, Today is Sunday"`}`);
}
message();

console.log("==============Question2.=============");
let val = (a, b, c=2) =>{
let multi = a * b* c;
console.log(`Multiplication : ${multi}`);
}
val(5,5);
val(10, 4);

console.log("==============Question3.=============");
let sumvalues = (a, b, c, d, e) => {
console.log(`${a} ${b} ${c} ${d} ${e}`);
return a + b + c + d + e;
}
console.log(`Addition Number is : ${sumvalues(100, 100, 200, 349, 756)}`);
sumvalues("I am", "learning", "ES6", "features", "in depth")

