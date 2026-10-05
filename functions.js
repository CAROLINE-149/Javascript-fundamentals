const prompt = require ("prompt-sync")();

//Function Declaration
function showMessage() {
    console.log("Hello");
}

//showMessage(); // calling the function

//parameters
function showText(from, text){ // parameters: from,text
  console.log(from + ":" +text);
}
//showText ("Ann", "Hello!"); // Ann: Hello!
//showText ("Ann", "What's up?"); // Ann: What's up?


function text (from, text){
    from = '*' + from + '*';
    console.log (from + ':' + text);
}
let from = "Ann";
//text(from, "Hello"); // *Ann*: Hello

//console.log(from);
// A parameter is the variable listed inside the paranthesis in the function declaration (it's a declaration time term).
// An argument is the value that is passed to the function when it is called (it's a call time term).

//Default values
function message (from, text="no text provided"){
    console.log(from + ":" + text)
}
//message("Ann"); //Ann : no text provided
//we specify the so-called default (to use if omitted) value for a parameter in the function declaration using =
//if the text parameter is not passed it will get the value "no text provided"

//Returning a value
function sum(a,b){
    return a + b;
}
let result = sum(1,2);
//console.log(result);
//The directive return can be in any place of the function.
//When the execution reaches it, the function stops and the value is returned to the calling code(assigned to result above).

// function checkAge(age){
//     if(age >= 18){
//         return true;
//     }
//     else {
//         return confirm('Do you have permission from your parents? ');

//     }
// }
// let age = prompt('How old are you?', 18/*(18 is a default value)*/);

// if (checkAge(age)){
//     console.log("Access granted");
// }
// else{
//     console.log("Access denied");
// }

//NAMING A FUNCTION
/*
Functions are actions so their name is usually a verb.
It is a widespread practice to start a functionwith a verbal prefix which vaguely escribes the action.
There must be an agreement within the team on the meaning of the prefixes.
examples:
"show" - usually show something
"get" - return a value
"calc" - calculate something
"create" - create something
"check" - check something and return a boolean
*/

//FUNCTION EXPRESSION
/*
let sayHi = function(){
   console.log("Hello");
}
Note that, there's no name after the function keyword. Omitting a name is allowed for function expressions.

*/

let sayHi = function(){
   console.log("Hello");
};
//sayHi(); //Hello

//FUNCTION IS A VALUE
function sayHello(){
    console.log("Hello")
}
//console.log(sayHello);
//The last line does not run the function, because there are no parentheses after sayHello.

//CALLBACK FUNCTIONS
// We'll write a function ask(question, yes, no) with three parameters.
/*
question - Text of the question
yes - Function to run if the answer is "yes"
no - Function to run if the answer is "No"

The function should ask the question and depending on the user's answer call yes() or no().
*/

/*
function ask(question, yes, no){
    if (confirm(question)) yes()
        else no();
}

function showOk(){
    console.log("You agrred");
}

function showCancel(){
    console.log("You canceled the execution");
}

ask ("Do you agree?", showOk, showCancel);

The arguments showOk and showCancel of ask are called callback functions or just callbacks.
The idea is that we pass a function and expect it to be "called back" later if necessary.
In this case, showOk becomes the callback for "yes" answer, and showCancel for "no" answer.

*/

//ARROW FUNCTIONS
let Sum = (a,b) => a+b;
//console.log(Sum(1,2)); //3

let Diff = (c,d)=>{
    return c-d;
}
 console.log(Diff(8,5));
