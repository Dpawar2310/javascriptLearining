console.log("=========Question 1=======");
var wordLengthSquare = function (arg) {
    console.log(`lenth of words is : ${arg.length}`);
    return console.log("lenght square is :", arg.length * arg.length);
}
wordLengthSquare("JavaScript");
wordLengthSquare("Google");
wordLengthSquare("Developer");

console.log("=========Question 2=======");
var str = function () {
    var string = "I am Angular Developer";
    console.log("The String length is :",string.length);
    console.log("**************************");
    console.log(`Total no of word is:`,string.split(" "),);
    console.log("**************************");
    console.log("string length divided by strings word is :",string.length/4);
    console.log("**************************");
    console.log(`string length multiply by the total words of string is : ${string.length*5}`);
}
str();