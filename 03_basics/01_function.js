// console.log("h");
// console.log("e");
// console.log("l");
// console.log("l");
// console.log("o");

function printHello() {
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
// printHello //references the function, printHello() calls the function
//printHello(); // executes the function


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2); // num1 + num2;
// }
// addTwoNumbers(3, 4); // 7
// addTwoNumbers(10, null);



// 1st way

// function addTwoNumbers(num1, num2) {

//         // let result = num1 + num2; 1st way
//         // return result;

//         return num1 + num2;

// }
// const result = addTwoNumbers(3, 4);
// console.log(result); // 7


// 2nd way

function logiUserMessage(username) {
    if(username === undefined) {
        return "No username provided";
    }
    return `${username} has logged in`;
}
console.log(logiUserMessage()); // "john_doe has logged in"



function calculatecartprice(...num1) {
    return num1
}
console.log(calculatecartprice(100,200,400)); // [100, 200, 400]



