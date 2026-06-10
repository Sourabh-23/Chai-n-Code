// map

const map = new Map();

map.set("name", "Sourabh");
map.set("age", 23);
map.set("gender", "male");
map.set("name", "Sourab");

console.log(map);

for (const [key, value] of map) {
    console.log(key);
}


const myobj =
{
    game1: "Cricket",
    game2: "Football",
    game3: "Hockey"
}
for (const  [ key, value] of myobj) {
    console.log(key);
}


// for...in                    for...of
// ─────────────────────────   ─────────────────────────
// Objects ke liye             Arrays, Strings, Maps ke liye
// Key milti hai               Value milti hai
// index/key → string hota hai seedha value milti hai


// Example:                    Example:
// const obj = {               const arr = [10, 20, 30];
//   a: 1,                     
//   b: 2                      for (const val of arr) {
// }                               console.log(val);
//                             }
// for (const key in obj) {    // 10
//     console.log(key);       // 20
// }                           // 30
// // "a"
// // "b"