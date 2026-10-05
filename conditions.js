const prompt = require ("prompt-sync")();

//let year = prompt ("Enter your year of birth? ");
//if (year == 2015){
   // console.log("Correct year");
//}else {
    //console.log("wrong year!");
//}

//let accessAllowed;
//const age = prompt ("Enter your age: ")
//if (age < 18){
    //accessAllowed = false;
//} else{
  //  accessAllowed = true;
//}
//console.log(accessAllowed);

//Conditional operator "?"
//Syntax: let result = condition ? value1 : value2;
// The condition is true then value1 is returned else value2 is returned.

//let accessAllowed = (age>18) ? true : false;
//console.log(accessAllowed);

//Multiple '?'
let age = prompt("age?",18);

let message = (age<3) ? "Hi. baby!":
(age<18) ? "Hello" :
(age < 100) ? "Greetings" :
"What an unusual age!";
console.log(message);