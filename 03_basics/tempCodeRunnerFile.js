
// RETURN VALUE
// return ka matlab: function result wapas dega, jise variable me store kar sakte ho.
const section = (title) => console.log(`\n--- ${title} ---`);

function addTwoNumbers(num1, num2) {
    let result = num1 + num2; // pehle result variable me answer store kiya
    return result;            // answer function ke bahar bheja
}

function addTwoNumbers(num1, num2) {
    return num1 + num2; // short way: direct answer return kiya
}
const result = addTwoNumbers(3, 4); // returned value result me store hui
section("1. addTwoNumbers return value");
console.log("result =", result);    // output: 7


// USER LOGIN MESSAGE

function loginUserMessage(username) {       // username function ka input hai
    if (username === undefined) {           // agar koi argument pass nahi hua
        return "No username provided";      // yahan return ke baad function ruk jata hai
    }

    return `${username} has logged in`;     // template literal se dynamic message banta hai
}

section("2. loginUserMessage function");
console.log("without username =", loginUserMessage());        // output: No username provided
console.log("with username =", loginUserMessage("Sourabh"));  // output: Sourabh has logged in


// REST OPERATOR (...)
// Jab pata nahi kitne arguments aayenge, rest operator sabko array me pack karta hai.

function calculateCartPrice(...prices) { // ...prices all arguments ko array bana deta hai
    return prices;                       // array return hoga
}

section("3. calculateCartPrice rest operator");
console.log("cart prices =", calculateCartPrice(100, 200, 400)); // output: [100, 200, 400]
