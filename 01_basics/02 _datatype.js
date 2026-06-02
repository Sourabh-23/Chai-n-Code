"use strict"; // modern JavaScript rules use karta hai; mistakes ko jaldi catch karta hai

// alert(3 + 3); // browser me chalega, Node.js me nahi; Node me alert defined nahi hota

console.log(3 + 3);        // output: 6, numbers add hote hain
console.log("Hello World"); // output: Hello World, string print hoti hai

let name = "John Doe";     // string datatype: text value
let age = 23;              // number datatype: integer/decimal dono number hi hote hain
let isLoggedIn = false;    // boolean datatype: true ya false

// Primitive datatypes:
// number    -> normal numeric values, safe range approx 2^53 tak
// bigint    -> bahut bade numbers ke liye
// string    -> text, " ", ' ', ya ` ` me likhte hain
// boolean   -> true / false
// null      -> intentionally empty value
// undefined -> value abhi assign nahi hui
// symbol    -> unique identifier banane ke liye

console.log("type of name =", typeof name);             // string
console.log("type of age =", typeof age);               // number
console.log("type of isLoggedIn =", typeof isLoggedIn); // boolean
console.log("type of null =", typeof null);             // object, ye JavaScript ka old bug hai
console.log("type of undefined =", typeof undefined);   // undefined

const id = Symbol("id");          // har Symbol unique hota hai
const anotherId = Symbol("id");   // same description hone ke baad bhi alag value hai

console.log(id === anotherId);    // false, kyunki dono symbols unique hain
