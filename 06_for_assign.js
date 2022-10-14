console.log("===========Question1.==============");
console.log("Wap to print numbers from 5 to 15 by incrementing 1");
for (let index = 5; index <= 15; index=index+1) { // index++   index = index+1
    // console.log(index);
}

console.log("=============Question2.==============");
console.log("Wap to print numbers from 50 to 40 by decrementing 1");
for(let index =50; index >= 40; index=index-1){
    // console.log(index);
}

console.log("=============Question3.==============");
//console.log("First 15 Odd numbers");
//for (let index = 1; index <30; index=index+2) {
 //console.log(index);   
//}

var oddNumber =1;
for (let index = 1; index < 30; index++) {
    if(index % 2==0){
        console.log(index);
        oddNumber = oddNumber +2;
        if(oddNumber ==15){
            break;
        }
    }
    
    
}

console.log("=============Question4.==============");
//console.log("First 10 Even numbers");
//for (let index = 0; index <=20 ; index=index+2) {
//  console.log(index);   
//}

var evenNumber =0;
for (let index = 0; index <=10; index++) {
    if (index %2==0) {
        console.log(index);
        evenNumber = evenNumber +1;
        if (evenNumber == 10) {
            break;
         }
        
    }
}

console.log("=============Question5.==============");
console.log("Wap to print table of 5");
for (let index = 5; index <55; index=index+5) {
    // console.log(index);
}


console.log("=============Question6.==============");
console.log("Wap to print table of 10");
for (let index = 10; index <110; index=index+10) {
    // console.log(index);
}

console.log("=============Question7.==============");
console.log("Wap to print table of 10 in reverse order");
for (let index = 100; index >=10; index=index-10) {
    // console.log(index);
}
