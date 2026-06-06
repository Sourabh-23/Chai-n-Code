let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 +num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


// Line 1   → let val1 = 10

// Line 2   → let val2 = 5

// Lines 3–6 → function addNum defined
//              (Sirf define hua, abhi run nahi hua)

// Line 7   → addNum(val1, val2) called
//              (val1=10, val2=5 pass hue as arguments)
//              ↓
//              Inside addNum(num1=10, num2=5)
//              total = 10 + 5 = 15  →  return 15
//              ↓
//              result1 = 15 ✓

// Line 8   → Same flow again — direct values this time
//              addNum(10, 2) → result2 = 12 ✓

/*

Phase 1 — Memory Creation (Hoisting)
JS pehle poora code scan karta hai aur variables/functions ko memory mein store karta hai — code run hone se pehle!
Global Execution Context - Memory Phase:
┌─────────────────────────────────────┐
│  val1    →  undefined               │
│  val2    →  undefined               │
│  addNum  →  function ka pura code   │  ← function poora store hota hai
│  result1 →  undefined               │
│  result2 →  undefined               │
└─────────────────────────────────────┘

Phase 2 — Code Execution (Line by line)
Ab actual values assign hoti hain:
Line 1: val1 = 10
┌─────────────────────────────────────┐
│  val1    →  10          ✓           │
│  val2    →  undefined               │
│  addNum  →  fn code                 │
│  result1 →  undefined               │
│  result2 →  undefined               │
└─────────────────────────────────────┘

Line 2: val2 = 5
┌─────────────────────────────────────┐
│  val1    →  10                      │
│  val2    →  5           ✓           │
└─────────────────────────────────────┘

Line 7: addNum(val1, val2) call hota hai
⬇ Naya Execution Context banta hai!

Function Call → New Execution Context
Jab addNum(val1, val2) call hota hai, JS ek bilkul naya execution context banata hai sirf is function ke liye:
┌─── Global EC ────────────────────────┐
│  val1    →  10                       │
│  val2    →  5                        │
│  result1 →  undefined (abhi)         │
│                                      │
│  ┌─── addNum EC (new!) ───────────┐  │
│  │  Memory Phase:                 │  │
│  │    num1  →  undefined          │  │
│  │    num2  →  undefined          │  │
│  │    total →  undefined          │  │
│  │                                │  │
│  │  Execution Phase:              │  │
│  │    num1  →  10  (val1 aaya)    │  │
│  │    num2  →  5   (val2 aaya)    │  │
│  │    total →  15                 │  │
│  │    return 15  ──────────────►  │  │
│  └────────────────────────────────┘  │
│                                      │
│  result1 →  15  ✓                   │
└──────────────────────────────────────┘
Function return karte hi addNum ka execution context destroy ho jaata hai!

Call Stack
JS ek Call Stack maintain karta hai — jaise ek stack of plates:
      addNum(val1,val2) call
            ↓
┌─────────────────────┐
│   addNum EC  (top)  │  ← abhi yahan hai JS
├─────────────────────┤
│   Global EC         │  ← hamesha bottom pe
└─────────────────────┘

      return hote hi:
┌─────────────────────┐
│   Global EC         │  ← wapas yahan
└─────────────────────┘

      addNum(10, 2) call:
┌─────────────────────┐
│   addNum EC  (top)  │  ← phir se naya EC
├─────────────────────┤
│   Global EC         │
└─────────────────────┘

Summary
Step             Kya hua
Memory Phaseval1, val2, result1, result2 → undefined; addNum → function codeLine 
1-2 → val1=10, val2=5 assign
7 → New EC bana, num1=10 num2=5, total=undefined, return, EC destroy
8 → New EC bana, num1=10 num2=2, total=undefined, return, EC destroy
Key takeaway: Har function call pe ek naya Execution Context banta hai aur kaam khatam hote hi woh stack se pop ho jaata hai! 🔥

*/



// Execution Context kya hota hai?
// Phase 1 - Memory:
// Phase 2 - Execution:
// Function call pe kya hota hai?

// 06:21:45  -  Control flow in javascript