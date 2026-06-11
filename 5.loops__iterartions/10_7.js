const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnums = mynums.map((num) => {
//     return num + 10;
// });


const newnums = mynums.map((num) => num + 10);


console.log(newnums);
// [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



// chaining of methods

const newnums = mynums
    .filter((num) => num > 5)
    .map((num) => num + 10).
    reduce((sum, num) => sum + num, 0);

console.log(newnums);