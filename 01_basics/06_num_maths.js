const score=400;
// console.log(score);

const balance = new Number(100.254);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(5));    

const hundrededs = 100000000000000;
//console.log(hundrededs.toExponential(2));

const hundrededs1 = 1000000;
//console.log(hundrededs1.toLocaleString('en-IN'));

Number.MAX_VALUE; // The largest positive representable number
Number.MIN_VALUE; // The smallest positive representable number
Number.POSITIVE_INFINITY; // Represents positive infinity
Number.NEGATIVE_INFINITY; // Represents negative infinity
Number.NaN; // Represents Not-a-Number

// ===== maths

console.log("first===",Math.PI);
// use of math.PI => 1.


console.log("second===", Math.E);
// Use: gives Euler’s number ≈ 2.718
// Used in exponential growth, finance calculations

console.log("square root of 16===:", Math.sqrt(16));
// Use: finds square root of a number
// Example: √16 = 4

console.log("absolute value of -4===:", Math.abs(-4));
// Use: converts negative to positive
// Example: |-4| = 4

console.log("round of 4.6===:", Math.round(4.6));
// Use: rounds to nearest whole number
// Example: 4.6 → 5

console.log("ceil of 4.2===:", Math.ceil(4.2));
// Use: always rounds UP
// Example: 4.2 → 5

console.log("floor of 4.9===:", Math.floor(4.9));
// Use: always rounds DOWN
// Example: 4.9 → 4

console.log("minimum of 3,4,5,6,7===:", Math.min(3,4,5,6,7));
// Use: finds smallest number
// Output: 3

console.log("maximum of 3,4,5,6,7===:", Math.max(3,4,5,6,7));
// Use: finds largest number
// Output: 7

console.log("random number===:", Math.floor(Math.random()*10)+1);
// Use: generates random number between 1 to 10
// Commonly used in OTP, dice, games
const min=10;
const max=20;

const randno = Math.floor(Math.random()*(max-min+1))+min;
console.log(randno);