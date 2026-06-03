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





  function calculateCartPrice(num1){
return num1;
  }
  console.log("\n--- 8. calculateCartPrice function ---");console.log(calculateCartPrice(100, 200, 400));

  // problem in above function is that it will only return the first argument and ignore the rest. 
  // To fix this, we can use the rest operator to capture all arguments as an array.



function calculateCartPrice2(...num1) 
    {
        return num1;

    }
    console.log("\n--- 9. calculateCartPrice2 function with rest operator ---");    
    console.log(calculateCartPrice2(100, 200, 400)); // output: [100, 200, 400]

// In the above code, the calculateCartPrice2 function uses the rest operator (...num1)
//  to capture all arguments passed to the function as an array. This allows us to return
//  all the prices as an array instead of just the first one.

function calculateCartPrice3(val1, val2,...num1  ) {
    return num1;
}
console.log("\n--- 10. calculateCartPrice3 function with rest operator ---");    
console.log(calculateCartPrice3(100, 200, 400)); // output: [100, 200, 400]

// In the above code, the calculateCartPrice3 function takes two regular parameters (val1 and val2)
//  followed by the rest operator (...num1). This means that the first two arguments will be assigned to val1 and val2, 
// while any additional arguments will be captured in the num1 array. When we call calculateCartPrice3(100, 200, 400), 
// val1 will be 100, val2 will be 200, and num1 will be [400]. The function then returns the num1 array, which contains the remaining prices.


const user = {
    username: "Sourabh",
    price: 999,
};
console.log("\n--- 11. user object ---");
console.log(user);

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and prices is ${anyobject.price}`);
}
console.log("\n--- 12. handleobject function ---");
handleobject(user);

// In the above code, we have an object called user with properties username and price. 
// The handleobject function takes an object as a parameter and uses template literals to access the properties of the object and print a message to the console. 
// When we call handleobject(user), it will output: "username is Sourabh and price is 999". }



const mynewarray = [1, 2, 3, 4, 5];
console.log("\n--- 13. mynewarray ---");
console.log(mynewarray);

function handlearray(getarray) {    
    return getarray[0]; // returns the first element of the array
}
console.log("\n--- 14. handlearray function ---");
console.log(handlearray(mynewarray));
// In the above code, we have an array called mynewarray with elements 1, 2, 3, 4, and 5.
// The handlearray function takes an array as a parameter and returns the first element of the array using getarray[0].
// When we call handlearray(mynewarray), it will output: 1, which is the first element of the array.
// getarray = template literals , template literals se dynamic message banta hai




// Q.1 how may type of function are there in javascript?
// There are several types of functions in JavaScript, including:
// 1. Function Declarations: These are defined using the function keyword and can be called before they are defined due to hoisting.
// 2. Function Expressions: These are defined as part of an expression and can be anonymous or named. They are not hoisted.
// 3. Arrow Functions: Introduced in ES6, these provide a shorter syntax for writing functions and do not have their own this context.
// 4. Anonymous Functions: These are functions without a name, often used as arguments to other functions or assigned to variables.
// 5. IIFE (Immediately Invoked Function Expressions): These are functions that are executed immediately after they are defined.
// 6. Generator Functions: These functions can pause execution and resume later, allowing for asynchronous programming patterns.
// 7. Async Functions: These functions return a Promise and allow for asynchronous code using the async/await syntax.

// q2 syntax of each type of function?
// 1. Function Declaration:
// function functionName(parameters) {
//     // function body
// }

// 2. Function Expression:
// const functionName = function(parameters) {
//     // function body
// };

// 3. Arrow Function:
// const functionName = (parameters) => {
//     // function body
// };

// 4. Anonymous Function:
// (function(parameters) {
//     // function body
// })();

// 5. IIFE (Immediately Invoked Function Expression):
// (function() {
//     // function body
// })();

// 6. Generator Function:
// function* generatorFunction() {
//     // generator body
// }

// 7. Async Function:
// async function asyncFunction() {
//     // async function body
// }    

//Q.3 What is the difference between function declaration and function expression?
// The main differences between function declarations and function expressions are:
// 1. Hoisting: Function declarations are hoisted to the top of their scope, meaning they can
//  be called before they are defined in the code. Function expressions, on the other hand, 
// are not hoisted and cannot be called before they are defined.

// 2. Syntax: Function declarations use the function keyword followed by the function name, 
// while function expressions can be anonymous (without a name) or named and are assigned to a variable.

// 3. Usage: Function declarations are typically used for defining functions that will be reused throughout the code, 
// while function expressions are often used for creating functions on the fly or as arguments to other functions.
