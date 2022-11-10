console.log(`============assignment using filter() and reduce() ================`);
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
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_emps = [emp_anil, emp_mahesh, emp_monika, emp_radha, emp_rishi, emp_sonali, emp_vinayak];

console.log("=====Finding all 'Wipro' Companies Employes=====");
array_emps.filter((value) => {
    if (value.emp_company == "Wipro") {
        console.log(`The Id of Employe: ${value.emp_id} Name: ${value.emp_name} Company: ${value.emp_company}`);
    }
});

console.log("=====Finding all 'IT' and 'HR' Departments Employes=====");
array_emps.filter((value) => {
    if (value.emp_dept == "IT" || value.emp_dept == "HR") {
        console.log(`Name: ${value.emp_name} Department : ${value.emp_dept}`);
    }
});

console.log("=====Finding all Employes whoes ID is greater than 50 =====");
array_emps.filter((value) => {
    if (value.emp_id > 50) {
        console.log(`Id: ${value.emp_id} Name: ${value.emp_name} `);
    }
});

console.log("=====Finding all Employes whoes Name is starting from 'A','v' and 'm'=====");
array_emps.filter((value) => {
    if (value.emp_name.startsWith("A") || value.emp_name.startsWith("V") || value.emp_name.startsWith("M")) {
        console.log(`Name: ${value.emp_name}`);
    }
});


console.log("=====Finding the avrage Salary for all departments=====");

let count = 0;
array_emps.filter((value, index) => {
    if (value.emp_salary) {
        count = value.emp_salary + count
    }
});
console.log(count / array_emps.length);

// console.log("=====Finding the avrage Salary for 'IT' departments=====");
// let counts = 0;
// let sum = array_emps.filter((value) => {
//     return value.emp_dept == "IT";
//     // if (value.emp_dept == "IT") {
//     //     counts = value.emp_salary + counts;
//     // }
// });
// console.log(sum);

