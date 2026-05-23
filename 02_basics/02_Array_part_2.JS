    // const arr = [1, 2, 3, 4, 5];

// shallow copy
// const shallowCopy = [...arr];   // spread operator se shallow copy banta hai
// shallowCopy.push(6);           // shallow copy me 6 add karo
// console.log(arr);

const marvelHeroes = ["Spiderman", "Ironman", "Thor", "Hulk"];

const dcHeroes = ["Batman", "Superman", "Wonderwoman", "Flash"];

//marvelHeroes.push(dcHeroes); // Marvel heroes me Black Panther add karo

const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes); // Marvel aur DC ke sare heroes ek saath

const anotherarr = [1, 2, 3, 4, 5,[6,7,8,9,[10,11,12]]];

const realanotherarr =anotherarr.flat(Infinity); // array ko flat karo (sab nested arrays ko ek level pe le aao)
console.log(realanotherarr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(Array.isArray(realanotherarr)); 
console.log(Array.isArray(anotherarr)); // check karo ki realanotherarr array hai ya 



console.log(Array.from("realanotherarr")); 