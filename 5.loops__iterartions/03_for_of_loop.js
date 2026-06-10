// for loop          ████████████████████  90% — daily use, arrays, objects sab mein
// while loop        ████████████░░░░░░░░  60% — condition based kaam
// for...of loop     █████████████████░░░  80% — arrays ke liye best
// for...in loop     ████████████░░░░░░░░  60% — objects ke liye
// forEach loop      █████████████████░░░  80% — array methods mein common
// do while loop     ████░░░░░░░░░░░░░░░░  20% — rarely use hota hai
// map/filter/reduce ████████████████████  95% — interviews mein must!

let arr = ["flash", "batman", "superman"];

// for loop — purana tarika
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for...of — naya tarika
for (let hero of arr) {
    console.log(hero);
}

// Output dono ka same:
// flash
// batman
// superman


// const array = [1, 2, 4, 5];

// for (const [index, element] of array.entries()) {
//     if (element !== index + 1 ) {  // yahan kya aayega?
//         console.log("missing:", index + 1 );
//         break;
//     }
// }


const array = [1, 2, 4, 5]; 

for(const num of array) {
    console.log(num);
}


// const greetings = "hello world";
// for(const letter of greetings) {
//     console.log(letter);
// }





