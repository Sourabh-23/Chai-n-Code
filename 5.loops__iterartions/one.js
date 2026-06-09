// for

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// 1 → 2 → 3 → 4 → 2 → 3 → 4 → 2 → 3 → 4 → 2 → 3 → 4 → 2 → 3 → 4 → 2 → 🛑

// 1 ek baar
// 2  3 → 4  repeat hota raha jab tak 2 false nahi hua

// 3 parts hote hain:
// 1. let i = 0      → starting value
// 2. i < 5          → condition (jab tak true, loop chalega)
// 3. i++            → har baar 1 badhao

// Output:
// 0
// 1
// 2
// 3
// 4


// 
// for (let index = 0; index < 5; index++) {
// const element = index;
// console.log(element);
///}


for (let i = 0; i < 10; i++) {
   if (i == 5) {
   //console.log("i is 5");
   }

    //console.log(i);
}


// /*
// //1 i=0
// for (let i = 0; /*2 i<=10?*/ i <= 10; /*6 i++*/ i++) 
// {
//     console.log(`outer loop i = ${i}`); //7 print i

//     //3 j=0
//     for (let j = 0; /*4 j<=10?*/ j <= 10; /*5 j++*/ j++) {
        
//         console.log(`inner loop j = ${j}`); //8 print j
//     }
// }
// */


// //1 i=0
// for (let i = 0; /*2 i<=10?*/ i <= 10; /*10 i++*/ i++) 
// {
//     console.log(`outer loop i = ${i}`); //11 print i

//     //3 j=0
//     for (let j = 0; /*4 j<=10?*/ j <= 10; /*8 j++*/ j++) {
        
//         console.log(`inner loop j = ${j}`); //5 print j

//         //6 k=0
//         for (let k = 0; /*7 k<=10?*/ k <= 10; /*9 k++*/ k++) {
            
//             console.log(`inner loop k = ${k}`); //6 print k
//         }
//     }
// }


// let array = [1,2,3,4,6,7,8,9,10];

// for (let i = 0; i < array.length; i++) {
//   if(array[i] !== i+1){
//     console.log("missing number is", i+1);
//     break;
//   }
// }   



// keyword
// break
// continue

// break    → loop poora band 🛑
// continue → sirf ye wala step skip, loop chalta raha ⏭️


for (let i = 0; i < 5; i++) {
    if (i == 2) {
        break;
    }
    console.log(i);
}