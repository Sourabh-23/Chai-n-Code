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

 //printHello;  // sirf reference hai: function ko point karta hai, execute nahi karta
printHello(); // call hai: () lagane se function execute hota hai


// PARAMETERS AND ARGUMENTS
// parameters = function banate waqt variables
// arguments = function call karte waqt actual values

function addTwoNumbers(num1, num2) { // num1, num2 parameters hain
    console.log("===================================>",num1 + num2);        // sirf print karega, value return nahi karega
}
addTwoNumbers(3, 4);    // 3 and 4 arguments hain, output: 7
addTwoNumbers(10, null); // null number context me 0 ban jata hai, output: 10


// RETURN VALUE
// return ka matlab: function result wapas dega, jise variable me store kar sakte ho.

function addTwoNumbers(num1, num2) {
    let result = num1 + num2; // pehle result variable me answer store kiya
    return result;            // answer function ke bahar bheja
}

function addTwoNumbers(num1, num2) {
    return num1 + num2; // short way: direct answer return kiya
}
const result = addTwoNumbers(3, 4); // returned value result me store hui
console.log(result);                // output: 7


// USER LOGIN MESSAGE

function loginUserMessage(username) {       // username function ka input hai
    if (username === undefined) {           // agar koi argument pass nahi hua
        return "No username provided";      // yahan return ke baad function ruk jata hai
    }

    return `${username} has logged in`;     // template literal se dynamic message banta hai
}

console.log(loginUserMessage());            // output: No username provided
console.log(loginUserMessage("Sourabh"));   // output: Sourabh has logged in


// REST OPERATOR (...)
// Jab pata nahi kitne arguments aayenge, rest operator sabko array me pack karta hai.

function calculateCartPrice(...prices) { // ...prices all arguments ko array bana deta hai
    return prices;                       // array return hoga
}

console.log(calculateCartPrice(100, 200, 400)); // output: [100, 200, 400]
