console.log(`============assignment forEach()================`);
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

console.log("=====list of all employee name and log new array========");
array_employees.forEach((value) => {
    console.log(value.emp_name);
});

console.log("=====list for department========");
array_employees.forEach((value)=>{
    console.log(value.emp_dept);
});

console.log("=====list for emp_id========");
array_employees.forEach((value)=>{
console.log(value.emp_id);
});