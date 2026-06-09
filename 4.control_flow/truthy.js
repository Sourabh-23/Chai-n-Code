/*


// const userEmail = "sourabhh@gmail.com";
const userEmail = "false";

// if(userEmail) {
//     console.log("Got user email");
// }   else {
//     console.log("No email found");
// }

/*

flashy values
false, 0, -0, bigint, "", null, undefined, NaN


truthy values
true, {}, [], 1, -1, "0", "false", new Date(), etc


*/
/*

if (userEmail.length > 0) {
    console.log("Got user email");
} else {
    console.log("No email found");
}

const emptyobject = {};

if (emptyobject) {  
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}



*/


// nullish coalescing operator
// const userEmail = null;

// const email = userEmail ?? "email not found";
// console.log(email);

// let val1;

// val1=5??10

// console.log(val1);

// what is the  use of nullish coalescing operator
// it is used to provide a default value when 
// the left-hand side operand is null or undefined.

let val1;
// val1 = null ?? 10;
//val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20; // Output: 10
console.log(val1); // Output: 0


// diff btween ternary operator and nullish coalescing operator
// ternary operator
const userEmail = 0;
const email = userEmail ? userEmail : "email not found";
console.log(email); // Output: "email not found"

// nullish coalescing operator
const email2 = userEmail ?? "email not found";
console.log(email2); // Output: "email not found"

// Fark ek table mein:
// Value        | Ternary ?:       | Nullish ??
// -------------|------------------|------------------
// null         | default dega     | default dega
// undefined    | default dega     | default dega
// 0            | default dega ❌  | 0 rakhega ✅
// ""           | default dega ❌  | "" rakhega ✅
// false        | default dega ❌  | false rakhega ✅