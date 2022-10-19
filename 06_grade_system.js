function gradeSystem(score) {
    if (score > 1 && score < 35 ) {
        console.log(`you are Failed`);
    } 
    if (score >= 35 && score < 60) {
        console.log("Passed and GRADE is 'C'");
    }
    if (score >= 60 && score < 75) {
        console.log("Passed and GRADE is 'B'");
    }
    if (score >= 75 && score < 90) {
        console.log("Passed and GRADE is 'A'");
    }
    if (score >= 90 && score <= 100) {
        console.log("Passed and GRADE is 'A+'");
    }
    if (score < -score) {
        console.log(`invalid Score like -ve score`);
    }
    if (score > 100) {
        console.log(`invalid Score like more than 100`);
    }
    if (score <= "score") {
        console.log(`invalid input like string format`);
    } else {
        // console.log("invalid output");
    }
}
gradeSystem(66);
gradeSystem(13);
gradeSystem("");
gradeSystem(98);
gradeSystem("fifty Five");
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);
