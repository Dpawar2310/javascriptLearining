console.log("=====================Question 1.====================");
class vehical{
    constructor(name, model, color, condition, city){
        this.name = name;
        this.model = model;
        this.color = color;
        this.condition = condition;
        this.city = city;
    }
}
let company1 = new vehical("Oddi", 2008, 'Grey', 'Medium', 'kolkatta');
let company2 = new vehical("Mercidiez", 1998, 'Blue', 'Best', 'Haryana');
let company3 = new vehical("Jagaure", 2022, 'Black', 'Good', 'Pune');
let company4 = new vehical("Vector", 2020, 'Pink', 'Good', 'Hydrabad');
let company5 = new vehical("BMW", 2018, 'Red', 'Good', 'mumbai');
console.log(company1);
console.log(company2);
console.log(company3);
console.log(company4);
console.log(company5);

console.log("====================Question 2.==========================");
class college {
    constructor(collegeName, sinceIn, gradeOfCollege, city) {
        this.collegeName = collegeName;
        this.sinceIn = sinceIn;
        this.gradeOfCollege = gradeOfCollege;
        this.city = city;
    }

}
let college_1 = new college(`KRP`, 1975, `A+`, `Islampur`);
let college_2 = new college(`VVC`, 1965, `A`, `Miraj`);
let college_3 = new college(`KBP`, 1965, `A`, `Kanpur`);
let college_4 = new college(`SGM`, 1968, `A`, `Karad`);
let college_5 = new college(`PRN`, 1955, `A`, `Sangli`);
console.log(college_1);
console.log(college_2);
console.log(college_3);
console.log(college_4);
console.log(college_5);

console.log("======================Question 3.===========================");
const traverse_object = {
    collegeName: 'KRP',
    sinceIn: 1998,
    city: "islampur"
}
for (const key in traverse_object) {
    if (Object.hasOwnProperty.call(traverse_object, key)) {
        const element = traverse_object[key];
        console.log(`${key} ${element}`);
    }
}

console.log("=======================Question 4.========================");

let n1 = 0;
let n2 = 1;
let num;
for (let index = 1; index <= 10; index++) {
    num = n1 + n2;
    n1 = n2;
    n2 = num;
    console.log(n1);

}
