// objects

// objects are collections of key-value pairs
// they are also called "dictionaries" or "hash maps" in other languages
// they are also called "associative arrays" in other languages 
// objects are created using curly braces {}
// keys are strings, values can be any type 

// singleton object ==> an object that is created and used only once in the program
// it is often used to store configuration settings or to group related data together

// object Litrals
// objects are created using object literals
// object literals are created using curly braces {}
// object literals are created using key-value pairs
// example of an object literal

let symbol = "z4asfbiwhufbwjb6o";
const section = (title) => console.log(`\n--- ${title} ---`);

const person = {
name: "John",
"full name": "z4asfbiwhufbwjb6o", // keys can have spaces if they are enclosed in quotes
age: 30,
location: "New York",
email: "z4F6o@example.com",
isloggedIn: true,
lastlogindays: ["Monday", "Tuesday", "Wednesday"],
};

section("1. Object and property access");
console.log("person =", person);
console.log("person.name =", person.name); // accessing a property using dot notation
console.log("person['age'] =", person["age"]); // accessing a property using bracket notation
//console.log(person.full name); // this will cause an error because the key has a space in it
console.log("person['full name'] =", person["full name"]); // this is the correct way to access a property with a space in the key
console.log("typeof person['full name'] =", typeof person["full name"]); // string

person.email="sourabhhowale@gmailcom"; // updating a property
section("2. Updated property");
console.log("person.email =", person.email); // accessing the updated property

// in depth understanding of objects
// objects are reference types
// when we assign an object to a variable, we are assigning a reference to the object in memory
// when we copy an object, we are copying the reference, not the actual object
// this means that if we change the copied object, we are also changing the original object
let person2 = person; // copying the reference to the person object
person2.name = "Jane"; // changing the name property of person2
section("3. Reference copy changes original");
console.log("person.name after person2 change =", person.name); // this will also change the name property of person because person2 is a reference to the same object in memory

// to fix this, we need to create a new object
let person3 = {...person}; // copying the object using spread operator
person3.name = "John"; // changing the name property of person3
section("4. Spread copy keeps original safe");
console.log("person.name after person3 change =", person.name); // this will not change the name property of person because person3 is a new object

// to fix this, we need to create a new object
let person4 = Object.assign({}, person); // copying the object using Object.assign()
person4.name = "John"; // changing the name property of person4
section("5. Object.assign copy keeps original safe");
console.log("person.name after person4 change =", person.name); // this will not change the name property of person because person4 is a new object

