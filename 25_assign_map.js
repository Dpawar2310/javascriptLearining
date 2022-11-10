class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finace", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finace", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const map_employees = [emp_anil, emp_mahesh, emp_monika, emp_radha, emp_rishi, emp_sonali, emp_vinayak];

let show = map_employees.map((element) => {
    console.log(`${element.emp_id}===> Name: ${element.emp_name} Dept: ${element.emp_dept} Company: ${element.emp_company} Salary: ${element.emp_salary}`);
});

console.log(`============Assignment 2 Map==============`);
let array = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(array);
console.log(`====== Adding 10 for each element using map()=========`);
let adding = array.map((element)=>{
    return element+10;
});
console.log(`Befor Adding value is 10 :`, adding);

console.log(`====== sqare the each array element using map()=========`);
let sqare = array.map((element)=>{
    return element*element;
});
console.log(`Sqare of each element is :`,sqare);

console.log(`====== add the index value into it's corresponding each element new array create using map()=========`);
let newArray = array.map((element,index)=>{
    return element+index;
});
console.log(newArray);


