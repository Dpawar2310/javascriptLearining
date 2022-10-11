console.log("=============Question 1==========");
var sringHandsOn = function(){
    var str = "    Hey you are doing good, keep it up    "; 
    console.log(str);
    console.log("=============Question 2==========");
    console.log('lengyh of string is :',str.length);
    console.log("=============Question 3==========");
    console.log("Removing the leading and trailling extra spaces",str.trim());
    console.log("=============Question 4==========");
    var tr = str.trim();
    // console.log(tr);
    console.log("The extra space are in string is :",str.length - tr.length);
    console.log("=============Question 5==========");
    console.log("First character after trim",tr.charAt(),"Last character after trim",tr.charAt(33));
    console.log("=============Question 6==========");
    var str = "Hey,you,are,doing,good,keep,it,up";
    console.log(str.split(","));
    console.log("=============Question 7==========");
    console.log("index of word 'good' is :",tr.indexOf("good"));
    console.log("=============Question 8==========");
    console.log("Starting from index no 22 :",tr.substring(22));
    console.log("=============Question 9==========");
    console.log("Check the string is ends with 'up':",tr.includes("up"));
    console.log("=============Question 10==========");
    console.log("Check the string is ends with'Hey'",tr.includes('Hey'));
}
sringHandsOn();