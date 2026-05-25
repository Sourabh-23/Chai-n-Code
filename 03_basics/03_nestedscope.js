function one() {
    
    const username = "Sourabh";
    function two() {
        const website = "youtube"; //// two() scope - sirf yahan accessible
        console.log(username); // ✅ Works - parent scope se accessible
    }   
    //console.log(website);  // ❌ Error - website yahan exist nahi karta
    two();
}
one();


// two() Child function → Parent ka variable access kar sakta hai ✅
// one() Parent function → Child ka variable access nahi kar sakta ❌

// Real life example:

// Baap (Parent) ke paas ghar hai 🏠
// Beta (Child) ghar use kar sakta hai ✅
// Baap beta ki pocket money nahi le sakta ❌

// Scope kya hota hai?
// Scope matlab — variable kahan accessible hai aur kahan nahi.

// 3 Types of Scope

// 1. Global Scope
// jsconst name = "Sourabh"; // Global — sab jagah accessible

// function one() {
//     console.log(name); // ✅ Works
// }

// function two() {
//     console.log(name); // ✅ Works
// }
// Global variable — kisi bhi function mein access ho sakta hai.

// 2. Function Scope
// jsfunction one() {
//     const username = "bunty"; // Sirf one() ke andar
// }

// console.log(username); // ❌ Error — bahar accessible nahi
// Function ke andar ka variable — sirf usi function mein accessible hota hai.

// 3. Block Scope
// jsif (true) {
//     let x = 10;     // ✅ let/const block scope
//     var y = 20;     // ⚠️ var block scope nahi maanta
// }

// console.log(x); // ❌ Error
// console.log(y); // ✅ Works — var ka yahi problem hai

// Lexical Scope — Main Concept
// Lexical matlab — jahan likha hai code, wahi decide hota hai scope.
// jsfunction one() {              // PARENT
//     const username = "bunty";
    
//     function two() {          // CHILD
//         const website = "youtube";
        
//         function three() {    // CHILD ka CHILD (grandchild)
//             const age = 25;
            
//             console.log(username); // ✅ Works - dada ka variable
//             console.log(website);  // ✅ Works - baap ka variable
//             console.log(age);      // ✅ Works - apna variable
//         }
        
//         console.log(username); // ✅ Works - parent ka variable
//         console.log(website);  // ✅ Works - apna variable
//         console.log(age);      // ❌ Error - child ka variable
//     }
    
//     console.log(username); // ✅ Works - apna variable
//     console.log(website);  // ❌ Error - child ka variable
//     console.log(age);      // ❌ Error - grandchild ka variable
// }

// Scope Chain
// Jab variable dhundta hai JavaScript — upar ki taraf jaata hai:
// three() → two() → one() → Global
// jsconst city = "Kolhapur"; // Global

// function one() {
//     const name = "Sourabh";
    
//     function two() {
//         const skill = "Node.js";
        
//         // JavaScript dhundhta hai:
//         // skill → two() mein mila ✅
//         // name → two() mein nahi → one() mein mila ✅  
//         // city → two() mein nahi → one() mein nahi → Global mein mila ✅
        
//         console.log(skill); // ✅
//         console.log(name);  // ✅
//         console.log(city);  // ✅
//     }
// }
// Upar jaata hai — neeche kabhi nahi.

// var vs let vs const — Scope Difference
// jsfunction test() {
//     if (true) {
//         var a = 10;   // Function scope
//         let b = 20;   // Block scope
//         const c = 30; // Block scope
//     }
    
//     console.log(a); // ✅ 10 — var function scope
//     console.log(b); // ❌ Error — let block scope
//     console.log(c); // ❌ Error — const block scope
// }


// Simple rule:

// var → Function scope — avoid karo
// let → Block scope — use karo
// const → Block scope — use karo


// Real Life Example
// js// School example
// function school() {                    // School
//     const principal = "Mr. Sharma";
    
//     function classroom() {             // Classroom
//         const teacher = "Mrs. Patil";
        
//         function student() {           // Student
//             const name = "Sourabh";
            
//             console.log(principal); // ✅ Principal sabko pata
//             console.log(teacher);   // ✅ Teacher classroom mein hai
//             console.log(name);      // ✅ Apna naam pata
//         }
        
//         console.log(principal); // ✅ Principal sabko pata
//         console.log(teacher);   // ✅ Apna teacher
//         console.log(name);      // ❌ Student ka naam teacher ko nahi pata
//     }
    
//     console.log(principal); // ✅ Apna naam
//     console.log(teacher);   // ❌ Classroom ki info principal ko nahi
//     console.log(name);      // ❌ Student ka naam principal ko nahi
// }

// Summary Table
// GlobalParent FunctionChild FunctionGlobal Variable✅✅✅Parent Variable❌✅✅Child Variable❌❌✅

// Yeh concept clear ho gaya? Aage Closures padhna — yeh isi pe based hai aur interview mein bahut puchha jaata hai! 🙂

if (true) {
    const username = "pailwan";

    if (username === "pailwan") {
        const website = "____youtube";
        console.log(username); // ✅ Works - parent scope se accessible
    }

   // console.log(website); // ❌ Error - website yahan exist nahi karta
}
//console.log(username); // ❌ Error - username yahan exist nahi karta


// ******** Interesting Example * ********


console.log(addone(5)); //6
function addone(num)
{
    return num + 1;
}
addone(5); 


addtwo(5);
const addtwo = function(num) // Function Expression
{
    return num + 2;
}
  //7





//   Pehle Samjho — 2 Tarike Hain Function Banane Ke

// Tarika 1 — Function Declaration
// jsfunction addone(num) {
//     return num + 1;
// }
// Tarika 2 — Function Expression
// jsconst addtwo = function(num) {
//     return num + 2;
// }

// Difference kya hai dono mein?
// Hoisting!
// Hoisting = JavaScript code run karne se pehle Function Declarations ko upar le jaata hai memory mein.

// Function Declaration — Hoist hoti hai ✅
// jsconsole.log(addone(5)); // ✅ 6 — pehle call kiya, baad mein define kiya
//                         // Phir bhi kaam karta hai!

// function addone(num) {
//     return num + 1;
// }
// Kyun kaam karta hai?
// JavaScript andar se yeh karta hai:
// js// JavaScript khud yeh karta hai pehle
// function addone(num) {  // Upar le aata hai
//     return num + 1;
// }

// console.log(addone(5)); // Tab yeh run hota hai

// Function Expression — Hoist NAHI hoti ❌
// jsaddtwo(5); // ❌ ERROR — pehle call kiya

// const addtwo = function(num) { // Baad mein define kiya
//     return num + 2;
// }
// Kyun error aata hai?
// const variable hoist hota hai but value nahi hoti us waqt:
// js// JavaScript andar se yeh karta hai
// const addtwo; // Upar aaya but value nahi hai — undefined

// addtwo(5); // ❌ Error — addtwo abhi undefined hai, function nahi

// const addtwo = function(num) { // Yahan jaake value milti hai
//     return num + 2;
// }

// Simple Rule Yaad Rakho
// Function Declaration  → Pehle bhi call kar sakte ho ✅
// Function Expression   → Pehle define karo, tab call karo ✅

// Sahi Code Kaise Likhein
// js// Function Declaration — kahi se bhi call karo
// console.log(addone(5)); // ✅ Works

// function addone(num) {
//     return num + 1;
// }

// // Function Expression — pehle define karo
// const addtwo = function(num) {
//     return num + 2;
// }

// console.log(addtwo(5)); // ✅ Works — baad mein call kiya

// Real Life Example
// Function Declaration = Doctor ka number pehle se phone book mein hai — kabhi bhi call karo ✅
// Function Expression = Pehle number save karo, tab call karo — bina save kiye call nahi hoga ❌

// Interview Mein Puchha Jaata Hai
// Q: Hoisting kya hai?
// A: JavaScript code run karne se pehle Function Declarations aur variable declarations ko memory mein upar le jaata hai. Function Declarations poori tarah hoist hoti hain — pehle call kar sakte hain. Function Expressions hoist nahi hoti — pehle define karna padta hai.


