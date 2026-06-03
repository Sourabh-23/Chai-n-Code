// FUNCTIONS IN JAVASCRIPT
// Function = reusable block of code. Ek baar banao, baar-baar call karo.

// Without function, same kaam repeat karna padta:
// console.log("h"); // one line printed
// console.log("e"); // one line printed
// console.log("l"); // one line printed
// console.log("l"); // one line printed
// console.log("o"); // one line printed

function printHello() { // function declaration: printHello naam ka function banaya
    console.log("h");  // ye line sirf tab chalegi jab function call hoga
    console.log("e");  // function ke andar ka code automatically nahi chalta
    console.log("l");
    console.log("l");
    console.log("o");
}

// printHello;  // sirf reference hai: function ko point karta hai, execute nahi karta
console.log("\n--- 1. printHello function ---"); // terminal me section name dikhane ke liye
printHello(); // call hai: () lagane se function execute hota hai


// PARAMETERS AND ARGUMENTS
// parameters = function banate waqt variables
// arguments = function call karte waqt actual values

function addTwoNumbersPrint(num1, num2) { // num1, num2 parameters hain
    console.log("answer =", num1 + num2); // sirf print karega, value return nahi karega
}

console.log("\n--- 2. addTwoNumbers: direct console.log inside function ---");
addTwoNumbersPrint(3, 4);    // 3 and 4 arguments hain, output: 7
addTwoNumbersPrint(10, null); // null number context me 0 ban jata hai, output: 10


// RETURN VALUE
// return ka matlab: function result wapas dega, jise variable me store kar sakte ho.
// Neeche wale dono functions same answer dete hain.
// Difference sirf style ka hai:
// 1. Long way: pehle variable me store karo, phir return karo.
// 2. Short way: direct calculation return karo.

function addTwoNumbersLongWay(num1, num2) {
    let result = num1 + num2; // pehle result variable me answer store kiya
    return result;            // answer function ke bahar bheja
    // console.log("This will never run"); // return ke baad code execute nahi hota
}

function addTwoNumbersReturn(num1, num2) {
    return num1 + num2; // short way: direct answer return kiya
}

const longWayResult = addTwoNumbersLongWay(3, 4); // long way function ka returned value
const shortWayResult = addTwoNumbersReturn(3, 4); // short way function ka returned value

console.log("\n--- 3A. addTwoNumbersLongWay: variable me store karke return ---");
console.log("longWayResult =", longWayResult); // output: 7

console.log("\n--- 3B. addTwoNumbersReturn: direct return ---");
console.log("shortWayResult =", shortWayResult); // output: 7


// USER LOGIN MESSAGE

function loginUserMessage(username) {       // username function ka input hai
    if (username === undefined) {           // agar koi argument pass nahi hua
        return "No username provided";      // yahan return ke baad function ruk jata hai
    }

    return `${username} has logged in`;     // template literal se dynamic message banta hai
}

console.log("\n--- 4. loginUserMessage function ---");
console.log("without username =", loginUserMessage());          // output: No username provided
console.log("with username =", loginUserMessage("Sourabh"));    // output: Sourabh has logged in


// REST OPERATOR (...)
// Jab pata nahi kitne arguments aayenge, rest operator sabko array me pack karta hai.

function calculateCartPrice(...prices) { // ...prices all arguments ko array bana deta hai
    return prices;                       // array return hoga
}

console.log("\n--- 5. calculateCartPrice with rest operator ---");
console.log("cart prices =", calculateCartPrice(100, 200, 400)); // output: [100, 200, 400]





function addthreeNumbers(num1, num2, num3) {
    return num1,num2,num3;
}
console.log("\n--- 6. addthreeNumbers function ---");
console.log(addthreeNumbers(1,2,3));



function loginpersonusername(username="anonymous") {
    if (username === undefined) {
        return "No username provided";
    }   
    return `${username} has logged in`;
}
console.log("\n--- 7. loginpersonusername function ---");
console.log(loginpersonusername());    

  //4.53.32 