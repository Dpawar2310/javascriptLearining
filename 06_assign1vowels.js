console.log("===============Question1.================");
console.log("Good Morning IT Champ");
var myString = "Good Morning IT Champ";
var vowelsLoweCase = "aieou";
var vowelUpperCase = "AIEOU";
var volIsCount = 0;
for (let index = 0; index < myString.length; index++) {
    var char = myString.charAt(index);
    var isLowerAvailable = vowelsLoweCase.includes(char);
    var isUpperAvailable = vowelUpperCase.includes(char);
    if (isLowerAvailable || isUpperAvailable) {
        //console.log(char,isLowerAvailable,isUpperAvailable);
        volIsCount = volIsCount + 1;
    }
}
console.log(`Total vowels count: ${volIsCount}`);

console.log("====================Question2.=================");
console.log("I Love JavaScript");
var myString = "I Love JavaScript";
var vowelsLoweCase = "aieou";
var vowelUpperCase = "AIEOU";
var volIsCount = 0;
for (let index = 0; index < myString.length; index++) {
    var char = myString.charAt(index);
    var isLowerAvailable = vowelsLoweCase.includes(char);
    var isUpperAvailable = vowelUpperCase.includes(char);
    if (isLowerAvailable || isUpperAvailable) {
        //console.log(char,isLowerAvailable,isUpperAvailable);
        volIsCount = volIsCount + 1;
    }
}
console.log(`Total vowels count: ${volIsCount}`);

console.log("=================Question3.=================");
var sum = function () {
    let sum = 0;
    for (let index = 1; index <= 10; index++) {
        sum = sum + index;
    }
    console.log(sum);
}
sum();

console.log("===============Question4.=================");
function getSquare() {
    var add = 0;
    for (let index = 1; index <= 5; index++) {
        var count = (index * index);
        var add = count + add;
    }
    console.log(`the addition of ${add}`);
}
getSquare();

console.log("===============Question 5.Even=================");
console.log("");

function oddPositionChars(givenstring)
{
    console.log(`Given String is: ${givenstring}`);
    lostring=givenstring.toLowercase();
    var result="";
    for (let index = 0; index < lostring.length; index++) {
     var char = lostring.charAt(index);
     if (index%2!=0 && char!=" ") {
        //console.log(char);
        result = result + char;
     }
        
    }
    console.log(`odd character from given string are: ${result}`);
}
oddPositionChars("Hard work always pays back")
console.log("");
oddPositionChars("Soon i will be Angular IT Champ")
console.log("");






















