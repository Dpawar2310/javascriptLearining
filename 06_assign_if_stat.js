console.log("==============Question1.================");
function maleMarriageEligibility(gender, age, boyName) {
    var result = gender = "male" && age >= 21 ? "You are Eligible for Marriage" : "You are not Eligible for Marriage"
    console.log(result);
    return console.log(`${boyName} ${result}`);    
}
maleMarriageEligibility("male", "25", "Bilgates");
maleMarriageEligibility("male", "25", "Stew Jobs");

console.log("============ Question 2.===============");
function femaleMarriageEligiblity(gender,age,girlName) {
    var result = gender = "female" && age>=18 ? "you are Eligible for marriage" : "you are not Eligible for marriage"; 
    console.log(result);
    return console.log(`${girlName}`);
}
femaleMarriageEligiblity("female",16,"Jenifer");
femaleMarriageEligiblity("female",27,"Malinda Gates");