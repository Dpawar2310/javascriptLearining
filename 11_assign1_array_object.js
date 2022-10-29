const bank_sbi = {
    bankName: 'SBI Bank',
    bankAddress: 'Near Shree complex',
    bankLineNumber: 023427,
    bankId: 785,

}
const bankLocation = {
    street: 'Juhu line',
    city: 'Mumbai',
    pin_code: '457 527',
}
console.log(`============Using Object assign method============`);
let cloningObjects = Object.assign({}, bank_sbi, bankLocation);
console.table(cloningObjects);

console.log(`============Using spread oprator ============`);
let spreadOperator = { ...bank_sbi, ...bankLocation }
console.table(spreadOperator);

console.log(`============Creating literals rate_of_interest ============`);
const rate_of_interest = {
    home_loan_interest : "12.33%",
    personal_loan_interest : '11.43%',
    due_loan_interest : '09.29%'
}
    console.log(`============Merging step 1,2,4 ============`);
    let sbi_details = Object.assign({},bank_sbi,bankLocation,rate_of_interest)
    console.table(sbi_details);

    console.log(`============travsing step 5 ============`);
    const array = [sbi_details];
    for (const element of array) {
        console.log(element);
    }