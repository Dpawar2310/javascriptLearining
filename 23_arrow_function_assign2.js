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
console.log(`===== Name : Dipali Pawar ======`);
console.log(`=============== Question 1 Employes for "TCS" Compnies ========================`);
for (const iterator of array_employees) {
    if (iterator.emp_company === "TCS") {
        console.log(`The Employe Name : ${iterator.emp_name} ${iterator.emp_company}`);
    }
}

console.log(`==================== Question 2 Employes for Finace Department ====================`);
for (const iterator of array_employees) {
    if (iterator.emp_dept === "Finace") {
        console.log(`The Employee Name: ${iterator.emp_dept} ${iterator.emp_name}`);
    }
}

console.log(`=================== Question 3 Name star for "R" Character ====================`);
for (const iterator of array_employees) {
    if (iterator.emp_name.startsWith("R")) {
        console.log(iterator);
    }
}
console.log(`=================== Question 4 Salary is Greater than 70000 =====================`);
for (const iterator of array_employees) {
    if (iterator.emp_salary > 70000) {
        console.log(`Employee Name : ${iterator.emp_name} ${iterator.emp_company} ${iterator.emp_salary}`);
    }
}
console.log(`======================= Question 5 The Employee Salary is 50000 and "IT" department ===================`);
for (const iterator of array_employees) {
    if (iterator.emp_salary >= 50000 && iterator.emp_dept == "IT") {
        console.log(iterator);
    }
}

console.log(`================= Question 6 Employes Work from "Infy" Company ===================`);
for (const iterator of array_employees) {
    if (iterator.emp_company === "Infy") {
        console.log(iterator);
    }
}