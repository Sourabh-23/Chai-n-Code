const username = "Sourabh";
const projectCount = 50;
const section = (title) => console.log(`\n--- ${title} ---`);

// Template literal
section("1. Template literal");
console.log("intro =", `My name is ${username.toUpperCase()} and I have ${projectCount} github repos`);

// String object
const techStack = new String("Node Express");
section("2. String object basics");
console.log("techStack =", techStack);
console.log("length =", techStack.length);
console.log("first character =", techStack[0]);
console.log("uppercase =", techStack.toUpperCase());
console.log("prototype =", techStack.__proto__);

// undefined check
section("3. Property that does not exist");
console.log("username.projectCount =", username.projectCount);

// charAt and indexOf
section("4. charAt and indexOf");
console.log("charAt(2) =", techStack.charAt(2));
console.log("indexOf('E') =", techStack.indexOf('E'));

// replace
const game = "Call of Duty";
//const updatedGame = game.replace("Duty", "Warzone");
//const updatedGame = game.replaceAll("Duty", "Warzone");
const updatedGame = game.replace(/Duty/g, "Warzone");


section("5. replace and split");
console.log("updatedGame words =", updatedGame.split(' '));
