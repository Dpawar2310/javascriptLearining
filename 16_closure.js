var global_variable = 300;
function outer() {
    let outer_fun_variable = 100;
    let inner_fun = function() {
        let inner_fun_variable = 200;
        console.log(inner_fun_variable, outer_fun_variable, global_variable);
    }
    return inner_fun;  // the inner fuction can be return 
}
let returnValue = outer();
returnValue();

// practice
var str = "these is a global varible";
function outerFunction() {
    var str1 = " these is outer fuction";
    function innerFunction() {
        var str2 = "these is an inner fuction";
        console.log(str,str1,str2);
    }
    return innerFunction;
}
outerFunction()();