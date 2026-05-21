const username = "Sourabh";
const projectCount = 50;

// Template literal
console.log(`My name is ${username.toUpperCase()} and I have ${projectCount} github repos`);

// String object
const techStack = new String("Node Express");
console.log(techStack);
console.log(techStack.length);
console.log(techStack[0]);
console.log(techStack.toUpperCase());
console.log(techStack.__proto__);

// undefined check
console.log(username.projectCount);

// charAt and indexOf
console.log(techStack.charAt(2));
console.log(techStack.indexOf('E'));

// replace
const game = "Call of Duty";
//const updatedGame = game.replace("Duty", "Warzone");
//const updatedGame = game.replaceAll("Duty", "Warzone");
const updatedGame = game.replace(/Duty/g, "Warzone");


console.log(updatedGame.split(' '));