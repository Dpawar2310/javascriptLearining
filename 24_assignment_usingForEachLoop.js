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

const array_employees = [emp_anil, emp_mahesh, emp_monika, emp_radha, emp_rishi, emp_sonali, emp_vinayak];

console.log(`======= only TCS company employees===========`);
array_employees.forEach((value) => {
    if (value.emp_company == "TCS") {
        console.log(`TCS company Employees are : ${value.emp_name} ${value.emp_company}`);
    }
});

console.log(`======= The Greater than 50000 salary Employes===========`);
array_employees.forEach((value) => {
    if (value.emp_salary <= 50000) {
        console.log(value);
    }
});
1
console.log(`======= Sum of all employes salary===========`);
let sum = 0;
let sumOfSalary = array_employees.forEach((value, index) => {
    if (value.emp_salary) {
        sum = value.emp_salary + sum;
    }
});
console.log(sum);

console.log(`======= Salary Avarage===========`);
let sumAvarage = 0;
array_employees.forEach((value) => {
    // console.log(array_employees.length);
    if (value.emp_salary) {
        sumAvarage = value.emp_salary + sumAvarage;
    }
});
console.log(sumAvarage / array_employees.length);

console.log(`======= IT and HR department employes and salary greater than 75000 ===========`);
array_employees.forEach((value) => {
    if (value.emp_dept == "IT", "HR" && value.emp_salary >= 75000) {
        console.log(value);
    }
});

