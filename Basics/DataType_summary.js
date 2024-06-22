// JavaScript is Dynamic Language.

// Primitive Data Types

/* 7 Type: 1) String
           2) Number
           3) Boolean
           4) Null
           5) Undefined
           6) Symbol
           7) Big int
*/     


// Non-Primitivie(Reference) Datatype

/*
1) Array
2) Objects 
3) Functions
*/


const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id == anotherid) // Output: false

// const bignumber = 687985412365448


const heros = ["shaktiman" , "naagraj" , "doga"]; // Array

let myinfo = {name : "Dhrupal" , Age: 21 , DOB:"05/06/2004"} // Object

const myfunction = function() {
    console.log("Hello , world");
}

myfunction()
console.log(typeof heros);
console.log(typeof myinfo);
console.log(typeof myfunction);



// --------------------------------------------------------- //

/* Memory In JS: 1) Stack (Primitive)
                 2) Heap (Non-Primitive)
*/

