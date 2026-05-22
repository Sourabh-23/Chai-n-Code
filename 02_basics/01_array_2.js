const myheroes = ["Spiderman", "Ironman", "Thor", "Hulk"];

const myarr2 = new Array(1,4,5);
console.log(myarr2[0]);

// array methods
// push, pop, shift, unshift, splice, slice, indexOf, includes, forEach, map, filter, reduce

myarr2.push(6); // adds 6 to the end of the array
console.log(myarr2); // [1, 4, 5, 6]

myarr2.unshift(66); // adds 66 to the beginning of the array
console.log(myarr2); // [66, 1,  4, 5, 6]

myarr2.pop(); // removes the last element of the array
console.log(myarr2); // [66, 1, 4, 5]

myarr2.shift(); // removes the first element of the array    
console.log(myarr2); // [1, 4, 5]

console.log(myheroes.indexOf("Thor")); // 2
console.log(myheroes.includes("Hulk")); // true


//array.splice(index, deleteCount, item)
let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2); // index 1 se 2 elements hatao

console.log(arr); // [10, 40, 50]
//                      ↑
//                  20, 30 hat gaye

myarr2.splice(1, 1); // removes 1 element at index 1
console.log(myarr2); // [1, 4, 5]

array.slice(start, end)
//           ↑      ↑
//         kahan   kahan
//         se      tak (end include nahi hoga)

let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1, 3); // index 1 se 3 tak (3 exclude)

console.log(result); // [20, 30]
console.log(arr);    // [10, 20, 30, 40, 50] ← original safe! ✅


// 🔪 splice = surgery karta hai (original cut karta hai)
// 🍰 slice = cake ka piece nikalta hai (original wahi rehta hai)