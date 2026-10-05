// DATA TYPES
//Javascript is dynamically typed, meaning that there exist data types, but variaables are not bound to any of them.

//NaN - Not a Number, is a value that represents an undefined or unrepresentable value, especially in floating-point calculations. It is a property of the global object. In other words, it is a variable that has been declared but has not yet been assigned a value. It is also the result of an operation that cannot produce a valid number.
let m = NaN + 1;
console.log(m); // output NaN  

let n = "hello" * 2;
console.log(n); // output NaN

let o = 0 ** NaN;
console.log(o); // output  NaN

let p = NaN ** 0;
console.log(p); // output 1  => Only the exponentiation operator (**) treats NaN as a valid number, and any number raised to the power of 0 is 1, even if that number is NaN.

let q = NaN ** NaN;
console.log(q); // output NaN

let r = 0/0;
console.log(r); // output NaN

//STRING
/* 
A string in Javascript must have qutes.
There are 3 types of quotes.
   1. Double quotes (")
    2. Single quotes (')
    3. Backticks (`) - used for template literals, which allow for multi-line strings and string interpolation. 
*/


let name = "John"; // using double quotes
//embed a variable
console.log(`Hello ${name}`);
//embed an expression
console.log(`the result is ${55 + 10}`);

//JS has no character data type. A character is simply a string of length 1. Strings are immutable, meaning that once a string is created, it cannot be changed. Any operation that modifies a string will create a new string.

//BOOLEAN (logical type)
/*A boolean has two valuess, true and false.
It is used to store yes/no values.
*/
let isGreater = 4>1;
console.log(isGreater); // output true

//OBJECTS AND SYMBOLS
/*
OBJECTS are used to store collections of data and more complex entities.
SYMBOL type is used to create unique identifiers for objects.
*/

//THE TYPEOF OPERATOR
//Returns the type of the operand. It's useful when we want to process values of different types differently or just want to do a quick check.
console.log(typeof 4); // output "number"
console.log(typeof "hello"); // output "string"
console.log(typeof true); // output "boolean"
console.log(typeof undefined); // output "undefined"
console.log(typeof null); // output "object" (this is a known quirk in JavaScript)
console.log(typeof Math); // output "object"
console.log(typeof alert); // output "function"
console.log(typeof Symbol("id")); // output "symbol"

//INTERACTION: alert, prompt, confirm

//ALERT
//alert - displays a message and waits for the user to click "OK"
/*alert("Hello!");
The mini-window with the message is called a modal window.
The word modal means that the visitor can't interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case until they press OK.

*/

//PROMPT
/*
The prompt function shows a modal window with a text message, an input field for the visitor, and buttons OK/Cancel.
It accepts two arguments:
   result = prompt(title, [default]);
    title - the text to show the visitor
    default - an optional second parameter, the initial value for the input field.  

The square brackets around default means the parameter is optional.    
*/
//let age = prompt("How old are you?", 100);
//alert(`You are ${age} years old!`);

//CONFIRM
/*
The confirm function shows a modal window with a question and two buttons: OK and Cancel.
It returns true if OK is pressed and false otherwise.
*/
//let isBoss = confirm("Are you the boss?");
//alert(isBoss); // true if OK is pressed, otherwise false

//TYPE CONVERSIONS

//STRING CONVERSION
let value = true;
console.log(typeof value); // boolean
value = String(value);
console.log(typeof value); // string

//NUMERIC CONVERSION
let str = "123";
console.log(typeof str); // string
str = Number(str);
console.log(typeof str); // number

//BOLEAN CONVERSION
//Values that are intuitively "empty", like 0, an empty string, null, undefined, and NaN, become false. Other values become true.
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

