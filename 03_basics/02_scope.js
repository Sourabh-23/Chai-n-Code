// var c=1000;

let a =300;

if (true)
{
let a=10;
const b=20;
// var c=30;
//console.log("inner",a); //10   
}







//console.log(a);
//console.log(b); //error
//console.log(c); 



function one(){
    const username="bunty";
    function two(){
        const website="youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();















if (true)
{
    const username = "pailwan";
    if(username === "pailwan"){
        const website="youtube";
        console.log(username);
    }
    //console.log(website); 

}



// +++++++++++ interesting example ++++++++++++++++


console.log(addone(5)); //6
function addone(num)
    {
return num+1;
    }
    addone(5); //6

    const addtwo = function(num)
    {
        return num+2;
    }
    addtwo(5); //7

    //JS pehle poora code scan karta hai
//function ko upar le jaata hai (hoist)
//Isliye pehle call karo ya baad mein — koi fark nahi



// Function Expression ❌
// javascriptconsole.log(addtwo(5)); // ❌ Error! Cannot access before initialization

// const addtwo = function(num) {
//     return num + 2;
// }
// Kyun error aaya?

// const hoist nahi hoti
// Pehle define karo, tabhi call kar sakte ho