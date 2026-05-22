// array
// resizeable list of elements of any type
//collection of data items stored at
//  contiguous memory locations can store multiple values in a single variable
// array is a data structure that can hold more than one value at a time


const myArr=[1,2,3,4,5];
console.log(myArr[0]);

// shallow copy and deep copy
// shallow copy: creates a new array that references the same elements as the original array. Changes to the new array will affect the original array and vice versa.
// deep copy: creates a new array with its own copy of the elements. Changes to the new array will not affect the original array and vice versa.

//Shallow Copy
const original = 
{ name: "Sourabh", 
address: { city: "Kolhapur" } };

const shallow = { ...original }; // shallow copy

shallow.name = "Rahul";           // ✅ original NOT affected
shallow.address.city = "Pune";    // ❌ original IS affected

console.log(original.name);         // "Sourabh"
console.log(original.address.city); // "Pune" ← changed!

const a = [1, 2, [3, 4]];
const b = [...a];

b[2].push(99);

console.log(a); // [1, 2, [3, 4, 99]]   //😱
console.log(b); // [1, 2, [3, 4, 99]]

// Deep Copy
// const original = { name: "Sourabh", address: { city: "Kolhapur" } };

// const deep = JSON.parse(JSON.stringify(original)); // deep copy

// deep.name = "Rahul";           // ✅ original NOT affected
// deep.address.city = "Pune";    // ✅ original NOT affected

// console.log(original.name);         // "Sourabh"
// console.log(original.address.city); // "Kolhapur" ← safe!

const a = [1, 2, [3, 4]];
const c = JSON.parse(JSON.stringify(a));

c[2].push(99);

console.log(a); // [1, 2, [3, 4]] ✅
console.log(c); // [1, 2, [3, 4, 99]] ✅

