//! 1996 - js  >>>>  1997 - ECMA >>>> 2015 - ES6/ES2015

//! Function
// A function is a reusable block of code that performs a specific task

//reusable block of code for specific task
function sum (a,b){
     return a + b;
}

console.log(sum(2,3)); // Output: 5
//*--------------------------------------------------------------
//* function declaration
function greet(name) {
    return `Hello, ${name}!`;
}    

console.log(greet("Alice")); // Output: Hello, Alice!

// function keyword
//function name = greet
//curly braces {} contain the body of the function
//function invocation = greet("Alice")

//sum of two numbers
function add(x, y) {
    return x + y;
}

// calling the function with arguments
// hear x,y are the parameters and 5,10 are the arguments
console.log(add(5, 10)); // Output: 15


//*---------------------------------------------------------------
function greet(name){
     return `Hello, ${name}!`;
}

console.log(greet("Bob")); // Output: Hello, Bob! 
console.log(greet("Charlie")); // Output: Hello, Charlie!

//*---------------------------------------------------------------
//! immediately invoked function expression (IIFE)
(function(){
     console.log("This is an IIFE");
})(); // Output: This is an IIFE 

// example 2
(function(a,b){
     console.log(a + b); 
})(5,10); // Output: 15

// example 3
const result = (function(x,y){
     return x * y;
})(4,5);

console.log(result); // Output: 20
// *---------------------------------------------------------------

// !let and const
var favName = "anwar";
favName = "samir";
console.log(favName); // Output: samir
//var can be re-assigned and re-declared

let favColor = "blue";
favColor = "red";
console.log(favColor); // Output: red
//let can be re-assigned but cannot be re-declared

const favAnimal = "dog";
//favAnimal = "cat"; // This would cause an error
console.log(favAnimal); // Output: dog
//const can neither be re-assigned nor re-declared    

// var global scope and let, const block scope
if (true) {
    var globalVar = "I am a global variable";
    let blockLet = "I am a block-scoped variable";
    const blockConst = "I am also  a block-scoped variable";
}    

// ! sum of array [2, 5, 1, 9, 3] → 20

const numbers = [2, 5, 1 , 9, 3];

let sum = 0;

for(let i = 0; i < numbers.length; i++){
     sum += numbers[i];
}
console.log(sum); // Output: 20    