// OBJECT — Sourabh ki info
const section = (title) => console.log(`\n--- ${title} ---`);

const sourabh = {
    naam: "Sourabh",
    city: "Kolhapur",
    skill: "Node.js",

    // METHOD 1 — object ke andar
    introduce: function() {
        console.log("intro name =", "Main " + this.naam + " hoon");
        console.log("intro city =", this.city + " se hoon");
    },

    // METHOD 2 — object ke andar
    showSkill: function() {
        console.log("skill =", "Meri skill: " + this.skill);
    }
}

// FUNCTION — object ke bahar, akela
function greetEveryone() {
    console.log("greeting =", "Sabko Hello!");
}

// ======= Call karo =======
section("1. Normal object method using this");
sourabh.introduce();
// Output: Main Sourabh hoon
// Output: Kolhapur se hoon

section("2. Another object method");
sourabh.showSkill();
// Output: Meri skill: Node.js

section("3. Normal function outside object");
greetEveryone();
// Output: Sabko Hello!

sourabh.naam = "Sourabh howale";
section("4. Object property updated");
sourabh.introduce();


section("5. this outside object");
console.log("this outside object =", this); // global object (window in browser, global in Node.js)


// now we weill see arrow function in next file, but just to give you a hint, arrow functions do not have their own 'this' context. They inherit 'this' from the surrounding code. So if we use an arrow function inside an object method, 'this' will refer to the global object instead of the object itself.

const person = {
    name: "Sourabh",
    city: "Kolhapur",
    skill: "Node.js",

    // METHOD 1 — object ke andar
    introduce: function() {
        console.log("person intro name =", "Main " + this.name + " hoon");
        console.log("person intro city =", this.city + " se hoon");
    },    
}

section("6. Another normal object method");
person.introduce();



// function chai() {
//     let username = "Sourabh";
//     console.log("Hello " + this.username); // Output: Hello undefined
// }    

// chai();


// fun declaration using arrow function
const chai = function()  {
    let username = "Sourabh";
    console.log("normal function this.username =", "Hello " + this.username); // Output: Hello undefined
}
section("7. this inside normal function");
chai();


const chaiArrow = () => {
    let username = "Sourabh";
    console.log("arrow function this =", "Hello chaiArrow " + this); // Output: Hello undefined
}
section("8. this inside arrow function");
chaiArrow();



// pure arrow function discussion

const pureArrow = (num1, num2) => {
return num1 + num2;
}
section("9. Pure arrow function");
console.log("pureArrow(5, 10) =", pureArrow(5, 10)); // Output: 15


// implicit return in arrow function
const implicitReturn = (num1, num2) => num1 + num2;
section("10. Implicit return");
console.log("implicitReturn(5, 10) =", implicitReturn(5, 10)); // Output: 15



// single line arrow function
const singleLineArrow = (num1, num2) => num1 + num2;
section("11. Single line arrow");
console.log("singleLineArrow(5, 10) =", singleLineArrow(5, 10)); // Output: 15


// reurn object in arrow function
const returnObject = () => ({ name: "Sourabh", city: "Kolhapur" });
section("12. Return object from arrow");
console.log("returnObject() =", returnObject()); // Output: { name: 'Sourabh', city: 'Kolhapur' }


const myarrow =[2,6,9,7]

section("13. forEach with arrow function");
myarrow.forEach(element => {
    console.log("element =", element);
});




