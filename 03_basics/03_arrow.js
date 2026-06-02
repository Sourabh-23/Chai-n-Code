// OBJECT — Sourabh ki info
const sourabh = {
    naam: "Sourabh",
    city: "Kolhapur",
    skill: "Node.js",

    // METHOD 1 — object ke andar
    introduce: function() {
        console.log("Main " + this.naam + " hoon");
        console.log(this.city + " se hoon");
    },

    // METHOD 2 — object ke andar
    showSkill: function() {
        console.log("Meri skill: " + this.skill);
    }
}

// FUNCTION — object ke bahar, akela
function greetEveryone() {
    console.log("Sabko Hello!");
}

// ======= Call karo =======
sourabh.introduce();
// Output: Main Sourabh hoon
// Output: Kolhapur se hoon

sourabh.showSkill();
// Output: Meri skill: Node.js

greetEveryone();
// Output: Sabko Hello!

sourabh.naam = "Sourabh howale";
sourabh.introduce();


console.log(this); // global object (window in browser, global in Node.js)


// now we weill see arrow function in next file, but just to give you a hint, arrow functions do not have their own 'this' context. They inherit 'this' from the surrounding code. So if we use an arrow function inside an object method, 'this' will refer to the global object instead of the object itself.

const person = {
    name: "Sourabh",
    city: "Kolhapur",
    skill: "Node.js",

    // METHOD 1 — object ke andar
    introduce: function() {
        console.log("Main " + this.name + " hoon");
        console.log(this.city + " se hoon");
    },    
}

person.introduce();



// function chai() {
//     let username = "Sourabh";
//     console.log("Hello " + this.username); // Output: Hello undefined
// }    

// chai();


// fun declaration using arrow function
const chai = function()  {
    let username = "Sourabh";
    console.log("Hello " + this.username); // Output: Hello undefined
}
chai();


const chaiArrow = () => {
    let username = "Sourabh";
    console.log("Hello chaiArrow " + this); // Output: Hello undefined
}
chaiArrow();



// pure arrow function discussion

const pureArrow = (num1, num2) => {
return num1 + num2;
}
console.log(pureArrow(5, 10)); // Output: 15


// implicit return in arrow function
const implicitReturn = (num1, num2) => num1 + num2;
console.log(implicitReturn(5, 10)); // Output: 15



// single line arrow function
const singleLineArrow = (num1, num2) => num1 + num2;
console.log(singleLineArrow(5, 10)); // Output: 15


// reurn object in arrow function
const returnObject = () => ({ name: "Sourabh", city: "Kolhapur" });
console.log(returnObject()); // Output: { name: 'Sourabh', city: 'Kolhapur' }


const myarrow =[2,6,9,7]

myarrow.forEach(element => {
    console.log(element);
});




