 let score ="33";
//let score = "33abc";
//let score =true;
//let score = null;
//let score = undefined;
//let score = Symbol("33");

//let score = "33abc";




console.log("score =",typeof score);

let valueInNumber = Number(score);

console.log("valueInNumber =",typeof valueInNumber);

console.log("valueInNumber =",valueInNumber);


let booleanScore = Boolean(score);

console.log("booleanScore =",typeof booleanScore);

let isloggedIn = "sourabh";
let booleanIsloggedIn = Boolean(isloggedIn);
console.log("booleanIsloggedIn =",booleanIsloggedIn);

let emptyString = "";
let booleanEmptyString = Boolean(emptyString);
console.log("booleanEmptyString =",booleanEmptyString);


//   ******** operations  ********

let value =3;
let negValue = -value;
console.log("negValue =",negValue);




let str1 = "hello";
let str2 = "world";
console.log(str1 + str2); //helloworld
console.log(str1 + " " + str2); //hello world   

console.log(2+2); //4
console.log("2"+"2"); //22
console.log("2"*"2"); //4
console.log("2"*2); //4
console.log("2"-2); //0
console.log("2"+2); //22
console.log(2+"2"); //22
console.log("1"+2+"2"); //122
console.log(1+2+"2"); //32
console.log(1+"2"+2); //122

console.log( (3 + 4) *5 % 3); //0

console.log( (3 + 4) * (5 % 3)); //15
//in above example 5%3 will be evaluated first
//  then 3+4 and then multiplication will be done.

console.log(+true); //1
console.log(true+false); //true
console.log(+false); //0
console.log(+""); //0
console.log(+"sourabh"); //NaN
console.log(+null); //0
console.log(+undefined); //NaN

// not stadard way of doing conversion but it works
let num1, num2, num3;
num1 = num2 = num3 = 5+5; //10
console.log("num1 =",num1);
console.log("num2 =",num2);
console.log("num3 =",num3);


// pre and post increment
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

let gameCounter1 = 100;
gameCounter1--;
console.log(gameCounter1);
--gameCounter1;
console.log(gameCounter1);



// comparison operators
console.log(3>2); //true
console.log(3<2); //false
console.log(3>=2); //true
console.log(3<=2); //false
console.log(3==2); //false
console.log(3!=2); //true
console.log(3=="3"); //true
console.log(3==="3"); //false
console.log(0==false); //true
console.log(0===false); //false
console.log(1==true); //true
console.log(1===true); //false  
console.log(1=="1"); //true
console.log(1==="1"); //false


console.log("2" > 2); //false

console.log("01" > 2); //false
console.log("01" > 1); //false
console.log("01" > 0); //true
console.log("1" > 0); //true
console.log("2" > 1); //true


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

console.log(2 == 2); //true
console.log(2 == "2"); //true
console.log(2 === "2"); //false

