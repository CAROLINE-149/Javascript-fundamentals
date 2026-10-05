const prompt = require ("prompt-sync")();

let name = prompt ("Enter your full name: ");
let marks = Number(prompt ("Enter your marks: "));

let getGrade = (marks)=>{
    if (marks < 40){
        return "F";
    }
    else if (marks < 50){
        return "D";
    }
    else if (marks < 60){
        return "C";
    }
    else if (marks < 70){
        return "D";
    }
    else {
        return "A";
    }
}

let getStatus=(marks)=>{
    if(marks < 40){
        return "FAIL";
    }
    else{
        return "PASS";
    }
}

console.log(`Name: ${name}`);
console.log(`Marks: ${marks}`);
console.log(`Grade: ${getGrade(marks)}`);
console.log(`Status ${getStatus(marks)}`);