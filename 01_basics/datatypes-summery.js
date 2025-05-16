// 1. Primitive Datatypes
// 7 types : String, Number, Boolean, null, Undefined, Symbol, Bigint

// 🧬 Characteristics of Primitive Data Types:
// Immutable: Their values cannot be changed once set.
// Compared by value (not reference).
// Stored directly in the variable's memory.
// Not objects and do not have properties or methods.

// Primitive data types are the most basic types of data in JavaScript. They represent single, immutable values — that is, they are not objects and have no methods.

// *************** Exmaple ***************

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
 
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 12121324347984579304598n

console.log(typeof bigNumber);

// 2. Refrence (Non Primitive Datatypes)

// Array, Objects, Functions

// 🧬 Characteristics of Reference Data Types:
// Mutable: You can change the contents without changing the reference.
// Stored in memory by reference.
// Variables hold references (addresses) to the actual data, not the data itself.
// Two variables pointing to the same object will reflect changes made through either one.

// Type	Example	Description
// Object	{ name: "John", age: 30 }	Key-value pairs
// Array	[1, 2, 3]	Ordered list of values
// Function	function greet() {}	Blocks of code that can be invoked
// Date	new Date()	Date and time handling
// RegExp	/abc/	Regular expressions for pattern matching

// *************** Exmaple ********

const heros = ["thor","ironman","hwakeye"] ;//array

let myObj = {
    name:"Deepak",
    age: 29,
} // objects

const myFunction = function(){
    console.log("Hello world");
    
} //function

console.log(typeof heros);









