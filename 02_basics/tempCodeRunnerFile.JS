const section = (title) => console.log(`\n--- ${title} ---`);

const anotherarr = [1, 2, 3, 4, 5, [6, 7, 8, 9, [10, 11, 12]]];
const realanotherarr = anotherarr.flat(Infinity);

section("1. Temp runner flat array practice");
console.log("realanotherarr =", realanotherarr);
