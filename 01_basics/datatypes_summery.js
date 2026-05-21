// primitive data types

// 7 primitive data types in JavaScript
// 1. String =  "Hello World", 'Hello World', `Hello World`
// 2. Number = 42, 3.14, -10, 0, NaN, Infinity
// 3. Boolean = true or false
// 4. null = represents the intentional absence of any object value. 
// It is a primitive value that can be assigned to a variable 
// as a representation of no value. For example, 
// if you want to indicate that a variable should 
// not have any value, you can assign it null:

// 5. undefined = represents the intentional absence of 

// any object value. It is a primitive value that can be 
// assigned to a variable as a representation of no value.

// 6. BigInt = a built-in object that provides a way to 
// represent whole numbers larger than 2^53 - 1, which is
//  the largest number JavaScript can reliably represent 
// with the Number type. BigInt values are created 
// by appending "n" to the end of an integer literal 
// or by calling the BigInt() constructor function. 
//  For example:
// const bigInt1 = 1234567890123456789012345678901234567890n;
// const bigInt2 = BigInt("1234567890123456789012345678901234567890");

// 7. Symbol = a built-in object that provides a way to create unique identifiers for object properties. Symbols are created using the Symbol() function, which returns a new symbol value each time it is called. For example:

const score = 100;
const scorevalue = "100";
const isPassed = true;
const student = null;
const noValue = undefined;
const bigInt = 1234567890123456789012345678901234567890n;
const uniqueSymbol = Symbol("id");



const id = Symbol("123");
const anotherId = Symbol("123");

console.log("id =========>",id === anotherId); // Output: false

// Reference (non-primitive) data types

// 1. Object
// 2. Array
// 3. Function 

const heros = ["Superman", "Batman", "Spiderman"];

let myObj = {
    name: "Sourabh",
    age: 22
};

// varibale way to declare function

const myFunc = function() {
    console.log("Hello World");
}

// console.log(typeof score); // Output: number
// console.log(typeof scorevalue); // Output: string
// console.log(typeof isPassed); // Output: boolean
// console.log(typeof student); // Output: object
// console.log(typeof noValue); // Output: undefined
// console.log(typeof bigInt); // Output: bigint
// console.log(typeof uniqueSymbol); // Output: symbol
// console.log(typeof id); // Output: symbol
// console.log(typeof anotherId); // Output: symbol
// console.log(typeof heros); // Output: object
// console.log(typeof myObj); // Output: object
// console.log(typeof myFunc); // Output: function



// MEMORY

// Stack Memory = used for storing primitive data types and function references.
// Heap Memory = used for storing non-primitive data types.

// Primitive data types are stored in the stack memory, while non-primitive data types are stored in the heap memory.

let myYoutubeName = "Sourabh";
let anotherYoutubeName = myYoutubeName;

console.log(myYoutubeName);
console.log(anotherYoutubeName);

let userOne = {
    name: "Sourabh",
    age: 22
};

let userTwo = userOne;

userTwo.name = "Sourabh Kumar";

console.log(userOne.name);
console.log(userTwo.name);




// Part 1 — Strings (Primitive) → STACK
// jslet myYoutubeName = "Sourabh";
// let anotherYoutubeName = myYoutubeName;
// What happens in Stack memory:
// STACK
// ┌─────────────────────────────┐
// │ myYoutubeName    = "Sourabh"│  ← original
// │ anotherYoutubeName= "Sourabh"│  ← COPY created
// └─────────────────────────────┘
// ✅ Two separate boxes in stack
// ✅ Changing one does NOT affect the other
// ✅ Primitives (string, number, boolean) always get copied by value

// Part 2 — Objects (Non-Primitive) → HEAP
// jslet userOne = { name: "Sourabh", age: 22 };
// let userTwo = userOne;
// userTwo.name = "Sourabh Kumar";
// What happens in Heap memory:
// STACK                    HEAP
// ┌──────────────┐         ┌─────────────────────┐
// │ userOne  ●───┼────────▶│ name: "Sourabh Kumar"│
// │ userTwo  ●───┼────────▶│ age: 22              │
// └──────────────┘         └─────────────────────┘
//      both point to          ONE object in heap
//      same address!
// ❌ NOT two separate objects
// ❌ Both variables point to same memory address in heap
// ❌ So changing userTwo.name also changes userOne.name!

// Output Explained
// js// Part 1 - Strings
// console.log(myYoutubeName);     // "Sourabh"        ✅ unchanged
// console.log(anotherYoutubeName);// "Sourabh"        ✅ unchanged

// // Part 2 - Objects
// console.log(userOne.name); // "Sourabh Kumar"  😱 changed!
// console.log(userTwo.name); // "Sourabh Kumar"  ✅ changed

// Golden Rule
// Primitive  → Stack → Copy by VALUE   → Independent ✅
// Object     → Heap  → Copy by REFERENCE → Same object ⚠️

// How to fix object problem? — Spread operator
// jslet userTwo = { ...userOne }; // creates NEW copy in heap
// userTwo.name = "Sourabh Kumar";

// console.log(userOne.name); // "Sourabh"       ✅ safe!
// console.log(userTwo.name); // "Sourabh Kumar" ✅

// 💡 This is why in your Node.js backend you always use spread {...obj} or Object.assign() when copying objects — to avoid accidentally modifying original data! You were already doing this without knowing the theory 😄🎯