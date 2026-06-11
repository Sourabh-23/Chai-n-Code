// const coding = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// const values =coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )
// console.log(values);



// Code 1 — Kaam karta hai ✅
// javascriptconst newnums = mynums.filter((num) => num > 4)

// Arrow ke baad directly expression hai
// Implicit return — automatically true/false return hota hai
// Result: [5, 6, 7, 8, 9, 10]


// Code 2 — Kaam nahi karta ❌
// javascriptconst newnums = mynums.filter((num) => {
//     num > 5  // ← return keyword nahi hai!
// })

// Curly braces {} use kiya toh explicit return likhna padta hai
// return nahi likha → undefined return hota hai
// undefined = falsy → sab filter out ho jaata hai
// Result: [] — empty array!


// Fix:
// javascriptconst newnums = mynums.filter((num) => {
//     return num > 5  // ← return add karo
// })

// Rule yaad rakho:
// SyntaxReturn=> expressionAutomatic (implicit)=> { }Manual return likhna padega

// const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num)=>num >4)
//console.log(newnums);
    


// const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num)=>num >4)
// console.log(newnums);
    



// const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num)=>{
//     return num>5
// })
// console.log(newnums);




const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums =[]

mynums.forEach((num) =>
{
    if(num>5)
    {
        newnums.push(num)
    }
})
console.log(newnums);




const books = [
    { title: 'Book 1', genre: 'Fiction', publish: 1992 },
    { title: 'Book 2', genre: 'Non-Fiction', publish: 2002 },
    { title: 'Book 3', genre: 'Fiction', publish: 2010 },
    { title: 'Book 4', genre: 'Non-Fiction', publish: 2018 },
    { title: 'Book 5', genre: 'Fiction', publish: 2015 },

  ];
  
  let newbooks = books.filter((book) => book.genre === 'Fiction');
  
  
   newbooks = books.filter((book)=>
  
  {
      return book.publish >= 2010 && book.genre === 'Fiction'
  }
)

  console.log(newbooks);