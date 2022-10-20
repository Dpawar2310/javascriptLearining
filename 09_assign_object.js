console.log("============================================================");
console.log("======================Empty Object==========================");
let teacher ={
}

console.log("====================Question1.============================");
console.log(teacher);
console.log(`====Adding the Properties of Teacher=========`);
teacher = {
    firstName: "Rutuja",
    lastName: "Patil",
    desination:"Professor",
    subject: "HTML",
    expreince: 10
}
console.table(teacher);

console.log("==================Question2.=================");
console.log("============Nested Object==============");
teacher = {
    firstName: "Rutuja",
    lastName: "Patil",
    desination:"Professor",
    subject: "HTML",
    expreince: 10,
    degree:{
        Engineering: `CSC`,
        PHD: `Adv Computing`,
        performance: `Good`,
        grade: `A`
    }
}
console.table(teacher);

console.log("=================Question3.==================");
console.log("=====Adding nested object certificates in object teacher======");
teacher = {
    firstName: "Rutuja",
    lastName: "Patil",
    desination:"Professor",
    subject: "HTML",
    expreince: 10,
    degree:{
        Engineering: `CSC`,
        PHD: `Adv Computing`,
        performance: `Good`,
        grade: `A`
    },
    certificates:{
        certificate_1: `Hacker Rank Participation`,
        certificate_2: `Certificate in IFE course`,
        certificate_3: `Certificate in Adv Programming`,

    }
}
console.table(teacher);

console.log("================Question4.==================");
console.log("====Add function and concat the degrees");
teacher = {
    degree:{
        Engineering: `CSC`,
        PHD: `Adv Computing`,
        performance: `Good`,
        grade: `A`
    },
    conacating: function(){
        let stringConcating = `${this.degree.Engineering},${this.degree.PHD},${this.degree.performance},${this.degree.grade}`;
        return stringConcating;  
    }
}
let concatTheDegree = teacher.conacating();
console.log(concatTheDegree);
    
console.log("================Question5.==================");
console.log(`==============adding a new property ===============`);
teacher.degree.age=24;
console.table(teacher);

console.log("================Question6.==================");
console.log(`==============modify a property ===============`);
teacher.degree.grade=`B`;
console.table(teacher);

console.log("================Question7.==================");
console.log(`==============deleting a property ===============`);
delete teacher.degree.PHD;
console.table(teacher.degree);

console.log("================Question8.==================");
console.log(`==============nested certificate add  ===============`);
teacher = {
    firstName: "Rutuja",
    lastName: "Patil",
    desination:"Professor",
    subject: "HTML",
    expreince: 10,
    degree:{
        Engineering: `CSC`,
        PHD: `Adv Computing`,
        performance: `Good`,
        grade: `A`
    },
    certificates:{
        certificate_1: `Hacker Rank Participation`,
        certificate_2: `Certificate in IFE course`,
        certificate_3: `Certificate in Adv Programming`,
        newCertificate:{
            certificate_4:`Team Leader`
        }

    }
}
console.table(teacher);

console.log("================Question9.==================");
console.table(teacher.certificates.newCertificate);
