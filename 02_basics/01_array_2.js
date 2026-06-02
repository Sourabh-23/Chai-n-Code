const myheroes = ["Spiderman", "Ironman", "Thor", "Hulk"];
const section = (title) => console.log(`\n--- ${title} ---`);

const myarr2 = new Array(1,4,5);
section("1. Array created with new Array");
console.log("myarr2[0] =", myarr2[0]);

// array methods
// push, pop, shift, unshift, splice, slice, indexOf, includes, forEach, map, filter, reduce

myarr2.push(6); // adds 6 to the end of the array
section("2. push");
console.log("after push =", myarr2); // [1, 4, 5, 6]

myarr2.unshift(66); // adds 66 to the beginning of the array
section("3. unshift");
console.log("after unshift =", myarr2); // [66, 1,  4, 5, 6]

myarr2.pop(); // removes the last element of the array
section("4. pop");
console.log("after pop =", myarr2); // [66, 1, 4, 5]

myarr2.shift(); // removes the first element of the array    
section("5. shift");
console.log("after shift =", myarr2); // [1, 4, 5]

section("6. indexOf and includes");
console.log("indexOf Thor =", myheroes.indexOf("Thor")); // 2
console.log("includes Hulk =", myheroes.includes("Hulk")); // true


//array.splice(index, deleteCount, item)
let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2); // index 1 se 2 elements hatao

section("7. splice removes from original array");
console.log("arr after splice =", arr); // [10, 40, 50]
//                      ↑
//                  20, 30 hat gaye

myarr2.splice(1, 1); // removes 1 element at index 1
console.log("myarr2 after splice =", myarr2); // [1, 5]

// array.slice(start, end)
//           ↑      ↑
//         kahan   kahan
//         se      tak (end include nahi hoga)

let sliceArr = [10, 20, 30, 40, 50];

let result = sliceArr.slice(1, 3); // index 1 se 3 tak (3 exclude)

section("8. slice returns copy and keeps original safe");
console.log("slice result =", result); // [20, 30]
console.log("sliceArr original =", sliceArr);    // [10, 20, 30, 40, 50]


// 🔪 splice = surgery karta hai (original cut karta hai)
// 🍰 slice = cake ka piece nikalta hai (original wahi rehta hai)
