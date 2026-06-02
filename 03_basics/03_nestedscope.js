// NESTED SCOPE AND HOISTING
// Scope = variable kahan accessible hai aur kahan nahi.
const section = (title) => console.log(`\n--- ${title} ---`);

function one() {                       // parent function scope start
    const username = "Sourabh";        // one() ke andar bana variable

    function two() {                   // child function scope start
        const website = "youtube";     // two() ke andar bana variable
        console.log("username =", username); // works: child parent ka variable access kar sakta hai
        console.log("website =", website);   // works: apna variable access kar sakta hai
    }

    // console.log(website);           // error: parent child ka variable access nahi kar sakta
    two();                             // child function ko parent ke andar call kiya
}

section("1. Child function can access parent variable");
one();                                 // output: Sourabh, youtube

// Simple rule:
// Child function parent ke variables use kar sakta hai.
// Parent function child ke variables use nahi kar sakta.


// GLOBAL SCOPE

const city = "Kolhapur";               // global variable: file me almost sab jagah accessible

function showCity() {
    console.log("city =", city);       // works: function global variable use kar sakta hai
}

section("2. Global scope");
showCity();                            // output: Kolhapur


// FUNCTION SCOPE

function showName() {
    const name = "Bunty";              // function scope: sirf showName ke andar accessible
    console.log("name =", name);       // output: Bunty
}

section("3. Function scope");
showName();
// console.log(name);                  // error: name function ke bahar exist nahi karta


// BLOCK SCOPE

if (true) {                            // block scope start
    let x = 10;                        // let block scoped hota hai
    const y = 20;                      // const bhi block scoped hota hai
    var z = 30;                        // var block scoped nahi hota, function/global scoped hota hai

    section("4. Block scope inside if");
    console.log("x =", x);             // output: 10
    console.log("y =", y);             // output: 20
}

// console.log(x);                     // error: x block ke bahar accessible nahi
// console.log(y);                     // error: y block ke bahar accessible nahi
console.log("z =", z);                 // output: 30, isi wajah se var avoid karte hain


// LEXICAL SCOPE
// Lexical scope ka matlab: code jahan likha hai, wahi decide karta hai variable lookup.

function parent() {
    const parentValue = "parent value"; // parent scope variable

    function child() {
        const childValue = "child value"; // child scope variable

        function grandChild() {
            const grandChildValue = "grand child value"; // apna variable

            console.log("parentValue =", parentValue);         // works: grandchild parent se upar search karta hai
            console.log("childValue =", childValue);           // works: grandchild direct parent me search karta hai
            console.log("grandChildValue =", grandChildValue); // works: apna variable
        }

        grandChild();                     // grandChild yahin accessible hai
        // console.log(grandChildValue);  // error: child grandchild ka variable nahi dekh sakta
    }

    child();                              // child yahin accessible hai
    // console.log(childValue);           // error: parent child ka variable nahi dekh sakta
}

section("5. Lexical scope and scope chain");
parent();

// Scope chain:
// JavaScript variable ko pehle current scope me dhundhta hai.
// Nahi mila to parent scope me jata hai.
// Phir uske parent me jata hai.
// Neeche child scope me kabhi search nahi karta.


// HOISTING - FUNCTION DECLARATION

section("6. Function declaration hoisting");
console.log("addOne(5) =", addOne(5));  // output: 6, kyunki function declaration hoist hoti hai

function addOne(num) {                  // function declaration
    return num + 1;                     // num me 1 add karke answer return
}


// HOISTING - FUNCTION EXPRESSION

// addTwo(5);                           // error: Cannot access 'addTwo' before initialization

const addTwo = function (num) {         // function expression: function ko variable me store kiya
    return num + 2;                     // num me 2 add karke answer return
};

section("7. Function expression");
console.log("addTwo(5) =", addTwo(5));  // output: 7, pehle define kiya phir call kiya

// Simple rule:
// Function declaration ko define hone se pehle bhi call kar sakte ho.
// Function expression ko pehle variable me assign karo, phir call karo.
