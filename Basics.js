/* 
DECLARATIONS
var- Declares a variable, optionally initializing it to a value.
let - Declares a block-scoped variable, optionally initializing it a value.
const - Declares a block-scoped variable that cannot be re-assigned, which must be initialized at declaration.
using - Declares a variable like const that is synchronously disposed
await using - Declares a variable like const that is asynchronously disposed

*/

/*VARIABLES
Variables are symbolic names for values in your application.
Variables are named container used to store and manage data in a computer program.

IDENTIFIERS
Is a user-defined name given to a program element like a variable, function, class or module.

RULES
1. Starts with a letter, underscore or dollar sign.
2. Subsequent characters can be numbers.
3. Letters include both uppercase and lowercase (JS is case sensitive)
4. Unicode letters can be used.

*/

//DECLARING VARIABLES
//Example 1
//var x = 42; // This syntax can be used to declare both local and global variables, depending on execution context.

//Example 2 (With const or let)
//let y = 13; //Can be used to declare a block-scope local variable.

//DECLARATION AND INITIALIZATION
//let x = 200;
/* 
let x - declaration
= 200; - initializer
The declaration allows the variable to be accessed later in code without throwing a ReferenceError,
The initializer assigns a value to the variable.
*/

//In var and let declarations, the initializer is optional. If a variable is declared without an initializer, it is assigned the value undefined.
let x;
console.log (x); // output undefined

var y;
console.log (y); // output undefined

// let x = 42; is equivalent to let x; x = 42; and var y = 13; is equivalent to var y; y = 13;
/*
const declarations always need an initializer, 
becausethey forbid any kind of assignment after declaration 
and implicitly initializing it with undefined is likely a programmer mistake.

*/ 
/* 
VARIABLE SCOPE
Global scope - The variable is accessible from anywhere in the program.
Local scope - The variable is accessible only within the function or block in which it is declared.
Block scope - The variable is accessible only within the block in which it is declared.
               Variables declared with let or const have block scope.It is created with a pair of curly braces {}.
Function scope - The variable is accessible only within the function in which it is declared.
Module scope - The variable is accessible only within the module in which it is declared.
*/

//var are not block scoped, but ony locaalto the function that the block resides in.
//Example
if (true) {
    var a = 10; // a is accessible outside the block
}
console.log(a); // output 10

//let and const are block scoped, and are not accessible outside the block in which they are declared.
//Example
if (true) {
    let b = 20; // b is not accessible outside the block
    const c = 30; // c is not accessible outside the block
}
//console.log(b); // ReferenceError: b is not defined
//console.log(c); // ReferenceError: c is not defined

/* 
VARIABLE HOISTING
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
This means that you can use variables and functions before they are declared in the code.

VARIABLE HOISTING WITH VAR
Variables declared with var are hoisted to the top of their function or global scope, but they are initialized with undefined.
This means that you can reference a var variable before its declaration, but it will have the value undefined until the line where it is assigned a value is executed.
*/
//Example 1
//console.log(d === undefined); // true
var d = 3;

(function() {
    //console.log(d); // undefined
    var d = "local value";
})();

//Example 2
var e;
//console.log(e === undefined); // true
e = 3;

(function () {
  var e;
  //console.log(e); // undefined
  e = "local value";
})();

//Whether let and const are hoisted is a matter of debate. They are hoisted to the top of their block scope, but they are not initialized. This means that you cannot reference a let or const variable before its declaration, and doing so will result in a ReferenceError.
//console.log(f); // ReferenceError
const f = 3;

//console.log(g); // ReferenceError
let g = 3;

//Function declarations are hoisted to the top of their containing scope, and they are initialized with the function definition. This means that you can call a function before its declaration in the code.

/*
GLOBAL VARIABLES
In web pages, the global object is window, so you can read and set global variables using the window.variable syntax.
In all environments, the globalThis variable(which itself is a global variable) may be used to read and set global variables.

Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, 
if a variable called phoneNumber is declared in a document, 
you can refer to this variable from an iframe as parent.phoneNumber.
 
*/