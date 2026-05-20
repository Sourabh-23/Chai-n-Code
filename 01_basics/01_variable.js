const accountId = 12345;
//rules for constant variable
//1. Must be assigned
//2. Cannot be re-declared
//3. Cannot be re-assigned

let accountEmail = "Gd7s2@example.com";
//rules for let variable
//1. Must be assigned
//2. Cannot be re-declared
//3. Can be re-assigned

var accountPassword = "mySuperSecretPassword";
//rules for var variable
//1. Must be assigned
//2. Can be re-declared
//3. Can be re-assigned
//not to used coz of issue in block scope and functional scope




accountCity = "New York";

let accountstate;

//accountId =2; //not allowed
accountEmail = "B6m0X@example.com";
accountPassword = "anotherSecretPassword";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table({accountId, accountEmail, accountPassword, accountCity,accountstate}); 