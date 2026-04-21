//*var is old and allows redeclaration. let allows updating value but not redeclaration. const is used for fixed values and cannot be reassigned.

//*“Primitive types store single values. Non-primitive types store collections like objects and arrays.”

//*“React is a JavaScript library used to build fast and interactive user interfaces, especially single page applications.”

//*“A component is a reusable piece of UI. In React, we build applications using components like buttons, headers, and forms.”

//* Reverse string
let firstName = "anwar";

console.log(firstName.length);

var newString = ""

for(let i = firstName.length - 1; i >= 0; i--){
     newString = newString + firstName[i];
}

console.log(newString);

// ------------------------------------------------------------------------

//*Find largest number

let array = [2, 5, 1, 9, 3];

console.log("array.length:", array.length)

let large = array[0];

for(let i = 1; i < array.length; i++){

     if(large < array[i]){
          large = array[i]
     }

}

console.log(large)