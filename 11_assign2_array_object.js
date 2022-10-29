class Bank {
    constructor(bank_name, location, account_no, ifsc, inerest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.inerest_rate = inerest_rate;
    }
    details() {
        console.log(`${this.bank_name} ${this.location} ${this.account_no} ${this.ifsc} ${this.inerest_rate} `);
    }
}
console.log(`==========A=============`);
let dataMembers1 = new Bank('Royal Bank', 'Mumbai', 1502457895642, 'royal4785', '7.23%')
console.log(dataMembers1);
console.log(`==========B=============`);
let dataMembers2 = new Bank('Axis Bank', 'Pune', 1896547895642, 'axis1245', '8.23%')
let dataMembers3 = new Bank('SBI Bank', 'Sangli', 178257895642, 'sbi47863', '4.23%')
let dataMembers4 = new Bank('ICICI Bank', 'Islampur', 1579457895642, 'ici142', '11.23%')
let dataMembers5 = new Bank('KOTAK Bank', 'Haryana', 11224595642, 'ko1450', '6.23%')
let dataMembers6 = new Bank('PUNJAB Bank', 'Punjab', 1122455495642, 'pp1450', '9.23%')

dataMembers1.details();
dataMembers2.details();
dataMembers3.details();
dataMembers4.details();
dataMembers5.details();
dataMembers6.details();

console.log(`==========C=============`);
const array = [dataMembers1, dataMembers2, dataMembers3, dataMembers4, dataMembers5, dataMembers6];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element.bank_name, " ", element.location);

}
console.log(`==========D=============`);
const array_kotak = [dataMembers5]
for (let index = 0; index < array_kotak.length; index++) {
    const element = array_kotak[index];
    console.table(element);

}
console.log(`==========E=============`);
const details = [dataMembers1, dataMembers2, dataMembers3, dataMembers4, dataMembers5, dataMembers6];
for (const element of details) {
    console.log(element);
}