const prompt = require ("prompt-sync")();

//LOOPS: WHILE and FOR

// while loop
/*
while(condition){
  //code
  //loop body
}
*/

let i = 0;
while (i < 3){
    //console.log(i);
    i++;
}
// A single execution of the loop body is called a iteration.
//if the i++ was missing the loop would repeat(in theory) forever.

//A shorter way to write while(i != 0) is while (i):
let j= 3;
while (j){
    //console.log(j);
    j--;
}

//DO...WHILE LOOP
/*
do{
  //loop body
}
  while (condition);

The loop will first execute the body, then check the condition and while it's true, execute it again and again.

*/
let n = 0;
do{
    //console.log(n);
    n++;
}
while (n < 3);
//This form of syntax should only be used when you want the bodt of the loop to execute at least once regardless of the condition being true.

//FOR LOOP
/* 
SYNTAX
for (begin; condition; step){
     //loop body
}
*/

for (let m = 0; m < 3; m++){
   // console.log(m)
}
// begin; let m = 0; Executes once upon entering the loop.
// condition; m < 3; Checked before every loop iteration. If false, the loop stops.
// body; console.log(m); Runs again and again while the condition is true.
// step; m++; Executes after the body on each iteration.

//Breaking the loop
//let sum = 0;
//while(true){
 // let value = +prompt("Enter a number: ","");
  //if (!value){
    //break;
  //};
  //sum += value;
//}
//console.log (`Sum: ${sum}`);
  //if true skip the remaning part of the body
for(k = 0; k<10; k++){
  if (k % 2 == 0){
    continue;
  }
  //console.log(k);
}
//For even values of k, thr directivr stops executing the body and passes control to the next iteration of for (with next number). So the console.log is only called for odd numbers.

//SWITCH statement
/*
SYNTAX
The switch has one or more case and an optional default

switch(x){
   case 'value1' //if (x === 'value1')
   ...
   [break]

   case 'value2' // if (x === 'value2')
   ...
   [break]

   default:
    ...
    [break]
}
*/

//example
let a = 2+2;

switch(a){
  case 3:
    console.log("Too small");
    break;
  case 4:
    //console.log("Exactly");
    break;
  case 5:
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values")    
//The switch starts to comparre a from the first case variant that is 3. The match fails.
//Then 4, that's a match so the execution starts from case 4 until the nearest break.
//If there is no break then the execution continues with the next case without any checks.
}

//Example without break

switch(a){
  case 3:
    //console.log("Too small");
    
  case 4:
    //console.log("Exactly");
    
  case 5:
    //console.log("Too big");
    
  default:
    //console.log("I don't know such values")  

//there is sequential execution of three console.log. That is case 4, case 5 and default.


}

const browser = prompt ("Enter a browser name: ");

if (browser == "Edge"){
  console.log(`You have got the ${browser}`);
}
else if(browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
  console.log(`Okay we support this ${browser} too`);
}
else{
  console.log("We hope that this page looks ok.");
}

const b = +prompt ("Enter a number: ");

switch(b){

  case 0:
    console.log(`Number ${b}`);
    break;

  case 1:
    console.log(`Number: ${b}`);
    break;

  case 2:
  case 3:
    console.log(`Number: ${b}`);
    break;
    
  default:
    console.log("Invalid!")  
}
