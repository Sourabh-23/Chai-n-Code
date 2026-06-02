const section = (title) => console.log(`\n--- ${title} ---`);

let score ="33";
//let score = "33abc";
//let score =true;
//let score = null;
//let score = undefined;
//let score = Symbol("33");

//let score = "33abc";




section("1. Number conversion");
console.log("score type before conversion =", typeof score);

let valueInNumber = Number(score);

console.log("valueInNumber type after conversion =", typeof valueInNumber);

console.log("valueInNumber =",valueInNumber);


let booleanScore = Boolean(score);

section("2. Boolean conversion");
console.log("booleanScore type =",typeof booleanScore);

let isloggedIn = "sourabh";
let booleanIsloggedIn = Boolean(isloggedIn);
console.log("booleanIsloggedIn =",booleanIsloggedIn);

let emptyString = "";
let booleanEmptyString = Boolean(emptyString);
console.log("booleanEmptyString =",booleanEmptyString);


//   ******** operations  ********

let value =3;
let negValue = -value;
section("3. Negative value");
console.log("negValue =",negValue);




let str1 = "hello";
let str2 = "world";
section("4. String operations");
console.log("str1 + str2 =", str1 + str2); //helloworld
console.log("str1 + ' ' + str2 =", str1 + " " + str2); //hello world   

section("5. Number and string operations");
console.log("2 + 2 =", 2+2); //4
console.log("'2' + '2' =", "2"+"2"); //22
console.log("'2' * '2' =", "2"*"2"); //4
console.log("'2' * 2 =", "2"*2); //4
console.log("'2' - 2 =", "2"-2); //0
console.log("'2' + 2 =", "2"+2); //22
console.log("2 + '2' =", 2+"2"); //22
console.log("'1' + 2 + '2' =", "1"+2+"2"); //122
console.log("1 + 2 + '2' =", 1+2+"2"); //32
console.log("1 + '2' + 2 =", 1+"2"+2); //122

console.log("(3 + 4) * 5 % 3 =", (3 + 4) *5 % 3); //0

console.log("(3 + 4) * (5 % 3) =", (3 + 4) * (5 % 3)); //15
//in above example 5%3 will be evaluated first
//  then 3+4 and then multiplication will be done.

console.log("+true =", +true); //1
console.log("true + false =", true+false); //1
console.log("+false =", +false); //0
console.log("empty string converted with + =", +""); //0
console.log("+'sourabh' =", +"sourabh"); //NaN
console.log("+null =", +null); //0
console.log("+undefined =", +undefined); //NaN

// not stadard way of doing conversion but it works
let num1, num2, num3;
num1 = num2 = num3 = 5+5; //10
section("6. Multiple assignment");
console.log("num1 =",num1);
console.log("num2 =",num2);
console.log("num3 =",num3);


// pre and post increment
let gameCounter = 100;
gameCounter++;
section("7. Increment and decrement");
console.log("gameCounter after post increment =", gameCounter);
++gameCounter;
console.log("gameCounter after pre increment =", gameCounter);

let gameCounter1 = 100;
gameCounter1--;
console.log("gameCounter1 after post decrement =", gameCounter1);
--gameCounter1;
console.log("gameCounter1 after pre decrement =", gameCounter1);



// comparison operators
section("8. Comparison operators");
console.log("3 > 2 =", 3>2); //true
console.log("3 < 2 =", 3<2); //false
console.log("3 >= 2 =", 3>=2); //true
console.log("3 <= 2 =", 3<=2); //false
console.log("3 == 2 =", 3==2); //false
console.log("3 != 2 =", 3!=2); //true
console.log("3 == '3' =", 3=="3"); //true
console.log("3 === '3' =", 3==="3"); //false
console.log("0 == false =", 0==false); //true
console.log("0 === false =", 0===false); //false
console.log("1 == true =", 1==true); //true
console.log("1 === true =", 1===true); //false  
console.log("1 == '1' =", 1=="1"); //true
console.log("1 === '1' =", 1==="1"); //false

section("9. String comparison with numbers");
console.log("'2' > 2 =", "2" > 2); //false

console.log("'01' > 2 =", "01" > 2); //false
console.log("'01' > 1 =", "01" > 1); //false
console.log("'01' > 0 =", "01" > 0); //true
console.log("'1' > 0 =", "1" > 0); //true
console.log("'2' > 1 =", "2" > 1); //true

section("10. Null and undefined comparison");
console.log("null > 0 =", null > 0); //false
console.log("null == 0 =", null == 0); //false
console.log("null >= 0 =", null >= 0); //true
console.log("undefined == 0 =", undefined == 0); //false
console.log("undefined > 0 =", undefined > 0); //false
console.log("undefined < 0 =", undefined < 0); //false
section("11. Equality vs strict equality");
console.log("2 == 2 =", 2 == 2); //true
console.log("2 == '2' =", 2 == "2"); //true
console.log("2 === '2' =", 2 === "2"); //false

