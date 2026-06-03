// ============================================================
//   JavaScript — Hoisting
//   Base se detail tak — examples ke saath
// ============================================================


// ─────────────────────────────────────────────────────────────
// 1. SHOCKING EXAMPLE — Pehle Dekho
// ─────────────────────────────────────────────────────────────

// Tu sochega — pehli line pe error aayega. Actually kya hoga?

console.log(myName);   // ?
var myName = "Sourabh";
console.log(myName);   // ?

// Output:
//   undefined
//   Sourabh
//
// Koi error nahi aaya — kyun? Yahi hoisting hai.


// ─────────────────────────────────────────────────────────────
// 2. HOISTING KYA HAI — 1 LINE MEIN
// ─────────────────────────────────────────────────────────────

// JS code run karne se pehle, saare declarations ko utha ke
// upar le jaata hai — yahi hoisting hai.


// ─────────────────────────────────────────────────────────────
// 3. JS 2 PHASES MEIN KAAM KARTA HAI
// ─────────────────────────────────────────────────────────────

// Phase 1 — Memory Creation  (Hoisting yahan hoti hai)
//     JS poora code scan karta hai
//     Saare var / function declarations memory mein store hoti hain
//
// Phase 2 — Execution
//     Line by line code run hota hai


// ─────────────────────────────────────────────────────────────
// 4. VAR HOISTING
// ─────────────────────────────────────────────────────────────

// Tu jo likhta hai:
console.log(myAge);       // ?
var myAge = 25;

// JS jo actually karta hai (mentally):
//
//   var myAge;            <- declaration upar aa gayi — undefined se initialize
//   console.log(myAge);  <- undefined
//   myAge = 25;          <- assignment yahan hi rehta hai
//
// RULE: Declaration upar jaati hai — value nahi.


// ─────────────────────────────────────────────────────────────
// 5. LET aur CONST — TEMPORAL DEAD ZONE (TDZ)
// ─────────────────────────────────────────────────────────────

// console.log(myCity);   // ❌ ReferenceError
// let myCity = "Pune";

// Error: Cannot access 'myCity' before initialization
//
// Kyun?
//   let aur const bhi hoist hote hain — but TDZ mein rehte hain.
//   Matlab memory mein hain, lekin touch nahi kar sakte
//   jab tak declaration line execute na ho.
//
// Visual:
//   |-------- TDZ --------|---- accessible ----|
//                         let myCity = "Pune";
//                              ^
//                              yahan se accessible hai


// ─────────────────────────────────────────────────────────────
// 6. FUNCTION DECLARATION HOISTING — SABSE POWERFUL
// ─────────────────────────────────────────────────────────────

// Function call PEHLE
greet();                   // "Hello Sourabh" ✅ — koi error nahi

// Declaration BAAD mein
function greet() {
    console.log("Hello Sourabh");
}

// JS jo karta hai:
//   Poori function upar aa jaati hai — naam bhi, body bhi.
//
// RULE: Function declarations poori tarah hoist hoti hain.
//       Call pehle kar sakte ho, koi dikkat nahi.


// ─────────────────────────────────────────────────────────────
// 7. FUNCTION EXPRESSION — TRAP HAI YAHAN
// ─────────────────────────────────────────────────────────────

// bye();   // ❌ TypeError: bye is not a function

var bye = function () {
    console.log("Bye!");
};

bye();   // ✅ ab chalega — declaration ke baad

// JS jo karta hai:
//   var bye;        <- sirf var hoist hua — undefined
//   bye();          <- undefined() — TypeError! 💥
//   bye = function() { ... };
//
// Same problem arrow functions ke saath:
//   var add = () => {}   ->   TypeError before declaration


// ─────────────────────────────────────────────────────────────
// 8. SAARE CASES EK SAATH
// ─────────────────────────────────────────────────────────────

// --- var ---
console.log(a);   // undefined — hoist hua, value nahi
var a = 10;
console.log(a);   // 10

// --- let ---
// console.log(b);   // ❌ ReferenceError — TDZ mein hai
let b = 20;
console.log(b);   // 20

// --- const ---
// console.log(c);   // ❌ ReferenceError — TDZ mein hai
const c = 30;
console.log(c);   // 30

// --- function declaration ---
hello();          // "Hi!" ✅ — poori tarah hoist
function hello() { console.log("Hi!"); }

// --- function expression (var) ---
// bye2();          // ❌ TypeError — var hoist hua, function nahi
var bye2 = function () { console.log("Bye2!"); };

// --- arrow function (var) ---
// add();           // ❌ TypeError — same issue
var add = () => console.log("add");


// ─────────────────────────────────────────────────────────────
// 9. MEMORY MEIN KYA HOTA HAI — VISUAL
// ─────────────────────────────────────────────────────────────

// === Phase 1: Memory Creation ===
//
//   a        →  undefined
//   b        →  [TDZ — touch mat karo]
//   c        →  [TDZ — touch mat karo]
//   hello    →  function hello() { console.log("Hi!") }
//   bye2     →  undefined
//   add      →  undefined
//
// === Phase 2: Execution ===
//
//   console.log(a)  → undefined
//   a = 10
//   console.log(b)  → ReferenceError 💥  (agar pehle access karo)
//   ...


// ─────────────────────────────────────────────────────────────
// 10. REAL WORLD — KAB MATTER KARTA HAI
// ─────────────────────────────────────────────────────────────

// ❌ Bad Practice — var pe depend karna
function processUserBad() {
    console.log(userName);   // undefined — bug!

    if (true) {
        var userName = "Sourabh";
    }
}
processUserBad();

// ✅ Good Practice — pehle declare karo
function processUserGood() {
    let userName = "Sourabh";   // pehle declare karo
    console.log(userName);      // "Sourabh" ✅
}
processUserGood();


// ─────────────────────────────────────────────────────────────
// 11. SUMMARY TABLE
// ─────────────────────────────────────────────────────────────

// | Keyword               | Hoist hota hai? | Initial Value   | Before declaration  |
// |-----------------------|-----------------|-----------------|---------------------|
// | var                   | ✅ Haan         | undefined       | undefined milta hai |
// | let                   | ✅ Haan         | TDZ (locked)    | ❌ ReferenceError   |
// | const                 | ✅ Haan         | TDZ (locked)    | ❌ ReferenceError   |
// | function declaration  | ✅ Haan         | Poori function  | ✅ Call kar sakte   |
// | function expression   | Sirf var        | undefined       | ❌ TypeError        |
// | arrow function        | Sirf var        | undefined       | ❌ TypeError        |


// ─────────────────────────────────────────────────────────────
// 12. EK LINE MEIN YAAD RAKH
// ─────────────────────────────────────────────────────────────

// var          →  hoist hoke undefined banta hai.
//                 Access karo toh undefined milega, error nahi.

// let / const  →  hoist hote hain but TDZ mein lock rehte hain.
//                 Pehle access karo toh ReferenceError.

// function     →  poori tarah hoist hoti hai.
// declaration     Call pehle kar sakte ho, koi error nahi.