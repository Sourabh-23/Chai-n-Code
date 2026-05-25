
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