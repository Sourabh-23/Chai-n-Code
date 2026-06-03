// SCOPE PRACTICE
// Scope = variable kahan accessible hai aur kahan nahi.

const section = (title) => console.log(`\n--- ${title} ---`);

let a = 300; // global/file scope

if (true) {
    let a = 10;       // block scope: sirf is if block ke andar
    const b = 20;    // block scope
    // var c = 30;   // var avoid karo, block scope follow nahi karta

    section("1. Block scope");
    console.log("inner a =", a); // output: 10
    console.log("b =", b);       // output: 20
}

section("2. Outside block");
console.log("outer a =", a);     // output: 300
 // console.log(b);               // error: b block ke bahar accessible nahi
// console.log("c =", c);           // error: c block ke bahar accessible nahi












// nested function scope
// ek function ke andar dusra function, dono ke apne variables,
// parent function ke variables lekin child function parent ke variables access kar sakta hai.


// Q. nested and closure function kya hai? closure kaise banta hai? scope ke sath kya relation hai?'
// ans: nested function = ek function ke andar dusra function, 
// closure = jab inner function apne parent function ke variables ko access karta hai,
// nested scope = variable kahan accessible hai.

function one() {
    const username = "bunty";

    function two() {
        const website = "youtube";
        console.log("username from parent function =", username);
        console.log("website inside child function =", website);
    }

    // console.log(website);     // error: parent child ka variable access nahi kar sakta
    two();
}

section("3. Function scope");
one();






if (true) {
    const username = "pailwan";

    if (username === "pailwan") {
        const website = "youtube";

        section("4. Nested block scope");
        console.log("username from parent block =", username);
        console.log("website inside child block =", website);
    }

    // console.log(website);     // error: website child block ke bahar accessible nahi
}



















// HOISTING EXAMPLE

section("5. Function declaration hoisting");
console.log("addone(5) =", addone(5)); // output: 6

function addone(num) {
    return num + 1;
}


section("6. Function expression");

const addtwo = function (num) {
    return num + 2;
};

console.log("addtwo(5) =", addtwo(5)); // output: 7

// Function declaration: pehle call kar sakte ho.
// Function expression: pehle define karo, phir call karo.
// console.log(addtwo(5)); // agar definition se pehle likha to error aayega.
