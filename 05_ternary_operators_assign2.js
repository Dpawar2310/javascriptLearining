console.log("============Question1.===========");
var ternary = function (arg1, arg2) {
    var result = arg1 > arg2 ? "Gretest no is : 10 " : "smallest no is: -10";
    console.log(result);
    var result = arg1 > arg2 ? "Gretest no is : 899 " : "smallest no is: 800";
    console.log(result);
    // var result = arg1<arg2? "positive:" : "negative:" ;
    // console.log(result);
}
ternary(10, -10);
ternary(800, 899);

console.log("==========Question2.===============");
var checkNo = function (num) {
    var result = num % 2 ? "false" : "true"
    console.log(result);
}
checkNo(29);
checkNo(44);
checkNo(0);
checkNo(101);

console.log("=========Question 3=========");

var words = function (arg) {
    //    console.log(arg.length); 
    var result = arg.length % 2 ? "Odd" : "Even";
    return console.log(result);
}
words("JavaScript");
words("developer");
words("Google");





