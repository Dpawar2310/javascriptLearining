console.log("=========Sqare root========");
var squre = function(arg1){
    console.log(arg1*arg1);
}
squre(5);
squre(6);
squre(25);
squre(100);
console.log('======Question 2========');
var fuctionName = function(){
    console.log(typeof fuctionName);
}
fuctionName();
console.log('======Question 3 Area of Triangle=========');
var areaOfTriangle = function(base,height){
    console.log("Area of Triangle",base*height/2);
}
areaOfTriangle(45,34);

fuctionName();
console.log('=======Question 4 Area of Rectrangle========');
var areaofRectrangle = function( wid,len){
    console.log("Area of Rectrangle",wid*len);
}
areaofRectrangle(499,917);
console.log('======Question 5========');
var swap = function(actor,criketer,num1,num2){
    console.log("=========After Swap=========");
    console.log(actor,criketer);
    temp=actor;
    actor=criketer;
    criketer=temp;
    console.log("========Before swap=========");
    console.log(actor,criketer);
    console.log("=========After Swap=========");
    console.log(num1,num2);
    num3=num1;
    num1=num2;
    num2=num3;
    console.log("========Before swap=========");
    console.log(num1,num2);
}
swap('Anushka','Virat',1000,2000);


console.log('======Question 6========');
var fe = function(str) {
    console.log('Character available in string',str.length);
    console.log('index of character s',str.indexOf('s'));
    console.log('index of string lang',str.indexOf('lang'));
    console.log('last character is',str.charAt(str.length -1));
    console.log('3rd last character is',str.charAt(str.length -3));
}
fe('JavaScript the most popular language');

