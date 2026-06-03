// ============================================================
//   JavaScript — Arrow Functions
//   Base se detail tak — examples ke saath
// ============================================================

const section = (title) => console.log(`\n--- ${title} ---`);


// ─────────────────────────────────────────────────────────────
// 1. NORMAL FUNCTION — Purana tarika
// ─────────────────────────────────────────────────────────────

section("1. Normal Function");

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5


// ─────────────────────────────────────────────────────────────
// 2. ARROW FUNCTION — Naya tarika
// ─────────────────────────────────────────────────────────────

section("2. Arrow Function");

const addd = (a, b) => {
    return a + b;
};
console.log(addd(2, 3)); // 5

// Bas function keyword hata diya, aur => laga diya — yahi arrow function hai.


// ─────────────────────────────────────────────────────────────
// 3. SHORTHAND — Aur bhi chota likh sakte ho
// ─────────────────────────────────────────────────────────────

section("3. Shorthand Forms");

// Agar sirf ek line return hai — curly braces aur return bhi hata sakte ho
const add2 = (a, b) => a + b;
console.log(add2(3, 4)); // 7

// Agar sirf ek parameter hai — parentheses bhi hata sakte ho
const double = n => n * 2;
console.log(double(5)); // 10

// Agar koi parameter nahi — empty parentheses zaroori
const greet = () => console.log("Hello Sourabh");
greet(); // Hello Sourabh


// ─────────────────────────────────────────────────────────────
// 4. NORMAL vs ARROW — Side by Side (same kaam, alag style)
// ─────────────────────────────────────────────────────────────

section("4. Normal vs Arrow — square function");

// Normal
function squareNormal(n) {
    return n * n;
}

// Arrow — full form
const squareFull = (n) => {
    return n * n;
};

// Arrow — short form
const squareShort = n => n * n;

// Teeno same kaam karte hain
console.log(squareNormal(4)); // 16
console.log(squareFull(4));   // 16
console.log(squareShort(4));  // 16


// ─────────────────────────────────────────────────────────────
// 5. SABSE BADA FARK — `this` keyword
// ─────────────────────────────────────────────────────────────

section("5. this — Normal Function");

// Normal function — apna khud ka this hota hai
const user = {
    name: "Sourabh",
    greet: function () {
        console.log(this.name); // "Sourabh" ✅
    }
};
user.greet();

section("5. this — Arrow Function");

// Arrow function — apna this nahi hota, parent ka this leta hai
const user2 = {
    name: "Sourabh",
    greet: () => {
        console.log(this.name); // undefined ❌
    }
};
user2.greet();


// ─────────────────────────────────────────────────────────────
// 6. this KA REAL USE CASE — setTimeout
// ─────────────────────────────────────────────────────────────

section("6. setTimeout — Normal Function (bug)");

// ❌ Normal function — this lost ho jaata hai
function TimerBad() {
    this.seconds = 0;

    setInterval(function () {
        this.seconds++;             // this yahan window/undefined hai
        console.log(this.seconds); // NaN — bug!
    }, 1000);
}
// new TimerBad(); // uncomment karke dekho

section("6. setTimeout — Arrow Function (fix)");

// ✅ Arrow function — parent ka this pakad leta hai
function TimerGood() {
    this.seconds = 0;

    setInterval(() => {
        this.seconds++;             // this yahan TimerGood hai ✅
        console.log(this.seconds); // 1, 2, 3...
    }, 1000);
}
// new TimerGood(); // uncomment karke dekho


// ─────────────────────────────────────────────────────────────
// 7. ARRAY METHODS MEIN — Arrow ka best use
// ─────────────────────────────────────────────────────────────

section("7. Array Methods");

const nums = [1, 2, 3, 4, 5];

const doubled  = nums.map(n => n * 2);
const evens    = nums.filter(n => n % 2 === 0);
const total    = nums.reduce((sum, n) => sum + n, 0);

console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(evens);    // [2, 4]
console.log(total);    // 15


// ─────────────────────────────────────────────────────────────
// 8. KAB ARROW, KAB NORMAL — Rule of thumb
// ─────────────────────────────────────────────────────────────

section("8. Kab kya use karein");

// ✅ Arrow — callbacks, array methods, short one-liner functions
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// ✅ Normal — object methods (jahan this chahiye)
const obj = {
    name: "Sourabh",
    greet: function () {
        console.log(this.name); // "Sourabh" ✅ — this kaam karega
    }
};
obj.greet();


// ─────────────────────────────────────────────────────────────
// 9. SUMMARY TABLE
// ─────────────────────────────────────────────────────────────

// | Feature              | Normal Function      | Arrow Function       |
// |----------------------|----------------------|----------------------|
// | Syntax               | function fn() {}     | const fn = () => {}  |
// | this                 | Apna khud ka         | Parent se leta hai   |
// | arguments object     | ✅ Available         | ❌ Nahi hota         |
// | Constructor (new)    | ✅ Use kar sakte     | ❌ Nahi kar sakte    |
// | Short syntax         | ❌                   | ✅                   |
// | Object method        | ✅ Best choice       | ❌ Avoid             |
// | Callback/Array method| Works but verbose    | ✅ Best choice       |


// ─────────────────────────────────────────────────────────────
// 10. EK LINE MEIN YAAD RAKH
// ─────────────────────────────────────────────────────────────

// Arrow function = normal function ka short form
// — but apna `this` nahi hota, parent ka this use karta hai.