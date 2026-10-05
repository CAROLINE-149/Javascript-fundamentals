const prompt = require("prompt-sync")();

//OBJECTS
/*
An object is a data type used to store key:value pairs.
Created using curly braces with an optional list of properties.
A property is a "key: value" pair where:
     key- A string (property name)
     value- can be anything

Syntax for creating an empty object:
let user = new Object(); //object constructor syntax
let user = {}; //object literal syntax
*/

//Literals and properties
let user = {
    name: "John",
    age: 30
};

//We can add, remove and read files from it at any time.

//Property values are accessible using the dot notation.
console.log(user.name);  //John
console.log(user.age);   //30

//Adding a key:value pair in the object (can be of any type)
user.isAdmin = true;  //boolean
console.log(user); //{ name: 'John', age: 30, isAdmin: true }

//To remove a property we use delete
delete user.age;
console.log(user); //{ name: 'John', isAdmin: true }

//we can also use multiword property names but then they must be quoted
let user1 = {
    name: "John",
    age: 30,
    'likes birds': true,
};
console.log(user1) //{ name: 'John', age: 30, 'likes birds': true }

//The last property in the list may end with a comma.
//This is called a "trailing" or "hanging" comma. Makes it easier to add/remove/move around properties, because all lines become alike.

//SQUARE BRACKETS
/*
For multiword properties, the dot access doesn't work. It would give a syntax.
The dot requires the key to be a valid variable identifier. That implies:
   -contains no spaces
   -doesn't start with a digit
   -doesn't include special characters($ and _ are allowed).
The alternative "square bracket notation" works with any string:   
*/

let user2 = {
    name: "Carol",
    age: 21,
};

//set
user2["Likes birds"] = true;
console.log(user2); //{ name: 'Carol', age: 21, 'Likes birds': true }

//get
console.log(user2["Likes birds"]); //true

//delete
delete user2["Likes birds"];
console.log(user2) //{ name: 'Carol', age: 21 }

/*
Square brackets also provide a way to obtain the property name as the
result of any expression as opposed to a literal string
*/
//example
//let key = "Likes birds";
//user1[key] = true;

/*
Here, the variable key may be calculated at run-time or depend on the user input.
And then we use it to access the property.

*/
//example
let user3 = {
    name: "Steve",
    age: 19,
};
//let key = prompt("What doa you want to know about user3: ");
//console.log(user3[key]);

//The dot notation cannot be used in a similar way:

//COMPUTED PROPERTIES
/*
Computed properties allow you to create object properties dynamically using an expression in square brackets.

Syntax:
let propertyName = "dynamicPropertyName";
const obj = {
   [propertyName] : value
};

*/
//example
let propName = "c";

const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};
console.log(rank.c); //3

//Property value shorthand
function makeUser(name,age){
    return{
        name: name,
        age: age,

    }
}
let users= makeUser("John", 30);
console.log(users.name);

const userFunc = (key, value)=>{
    return{
       [key]: value,
    };
};
let user4= userFunc("name","Carol");
console.log(user4);

//Property names limitations
//there is no limitations on property names in objects. They can be strings or symbols.


//Property existence test, "in" operator
//example
let user5 ={
    name: "John",
    age: 30,
}
console.log("age" in user5); //true
console.log("blabla" in user5); //false

//The "for..in" loop
/*
Syntax
for(key in object){
     ...............
}
*/

//examples
let user6 = {
    name: "John",
    age: 30,
    isAdmin: true,
};
for (let key in user6){
    console.log(key);
    console.log(user6[key]);
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
};

for(let code in codes){
    console.log(code); //key
    console.log(codes[code]); //value
    //output order: 1, 41, 44, 49
};

let countries = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA"
};

for (let country in countries) {
  console.log( +country ); // 49, 41, 44, 1
};

//OBJECT REFERENCES AND COPYING
/*
Objects are stored and copied by reference whereas primitive values are always copied as a wwhole value.
A variable assiwgned to an object stores not the object itself, but its address  in memory.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.
*/
//Example
let user7 = {name: "John"};
let admin = user7; //copy the reference
//Now we have two variables, each storing a reference to the same object.
//We can use either variable to access the object and manipulate it.
admin.name = "Pete";
console.log(user7.name);

//COMPARISON BY REFERENCE
let a = {};
let b = a; //copy the reference

console.log(a == b); //true
console.log(a === b); //true
//Here a and b reference the same object hence they are equal

let c = {};
let d = {};

console.log(c == d); //false
//c and d are independent objects hence not equal

/*
An important side effect of storing objects as references is that an object 
declared as const can be modified.

*/
//Example
const person = {
    name: "John",
};
person.name = "Jonasi";
console.log(person.name);
/* The value of person is constant, it must always reference the same object, 
but properties of that object are free to change.
The const person gives an error only if we try to set person=... as a whole */

//CLONING AND MERGING, OBJECT.ASSIGN
