//Exponentiation Operator
let base = 2;
let exponent = 3;
let result = base ** exponent; // 8
console.log(result); // 8
//The exponentiation operator (**) raises the base to the power of the exponent. In this case, 2 raised to the power of 3 equals 8.

//String Concatenation Operator
let str1 = "Hello, ";
let str2 = "world!";
let concatenatedString = str1 + str2;
console.log(concatenatedString); // "Hello, world!"

let s = "Hello" + "world!";
console.log(s); // output "Helloworld!"

console.log(2 + 2 + "1"); // output "41" => The addition operator (+) is left-associative, so it evaluates from left to right. First, 2 + 2 is evaluated to 4, and then 4 + "1" results in the string "41".

console.log("1" + 2 + 2); // output "122" => In this case, the first operation is string concatenation, so "1" + 2 results in the string "12", and then "12" + 2 results in the string "122".
// The binary + is the only operator that supports strings in such a way, other arithmetic operators work only with numberrs and always convert their operans to numbers.
console.log(2 - "1"); // output 1 => The subtraction operator (-) converts the string "1" to a number, so 2 - 1 equals 1.
console.log("6" / "2"); // output 3 => The division operator (/) converts both strings to numbers, so "6" / "2" equals 3.

//Numeric Conversion, unary +
let x = "5";
let y = +x;
console.log(y);
// The + applied to an operand that is not a number, converts it to a number.
console.log(+true); // output 1 => true is converted to 1
console.log(+false); // output 0 => false is converted to 0
console.log(+""); // output 0 => an empty string is converted to 0
console.log(+"text"); // output NaN => a non-numeric string is converted to NaN

//Increment and Decrement Operators
let a = 5;
a++; // increment by 1
console.log(a); // output 6

let b = 5;
b--; // decrement by 1
console.log(b); // output 4

//The increment (++) and decrement (--) operators increase or decrease a variable's value by 1, respectively. They can be used in both prefix and postfix forms, which can affect the order of operations in expressions.
//Increment/decrement operators can only be applied to variables.

//prefix form
let c = 5;
let d = ++c; // increment c first, then assign to d
console.log(c); // output 6
console.log(d); // output 6

//postfix form
let e = 5;
let f = e++; // assign e to f first, then increment e
console.log(e); // output 6
console.log(f); // output 5

//BITWISE OPERATORS
/*
AND (*)
OR (|)
XOR (^)
NOT (~)
Left shift (<<)
Right shift (>>)
Zero-fill right shift (>>>)
*/

//COMMA
//The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. It is often used in for loops and variable declarations to include multiple expressions in a single statement.
let g = (1 + 2, 3 + 4);
console.log(g); // output 7 => The expression (1 + 2, 3 + 4) evaluates both expressions, but only the result of the last expression (3 + 4) is returned and assigned to g.  
//Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

//Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

//COMPARISONS
/* 
greater than (>)
less than (<)
greater than or equal (>=)
less than or equal (<=)
equal (==)
not equal (!=)
strict equal (===)
strict not equal (!==)

The comparison operators compare two values and return a boolean value (true or false) based on the comparison. They can be used with numbers, strings, and other data types. The strict equality operators (=== and !==) check for both value and type equality, while the loose equality operators (== and !=) perform type coercion if the types are different.  

*/