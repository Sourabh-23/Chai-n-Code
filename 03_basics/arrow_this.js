
const user =
{
    name: "Sourabh",
    city: "Delhi",


    welcommessage: function() {
    console.log(`${this.name} aapka swagat hai ${this.city} me`); // Output: Sourabh aapka swagat hai Delhi me
    console.log(this);
}
}
// user.welcommessage();
// user.name="Hello";
// user.welcommessage();

console.log(this);




function chai()
{
    let username = "Sourabh";
    console.log(this.username);
}
chai();

// this function ka nahi, call karne wale ka hota hai.
// Koi object call kare → woh object. Koi nahi → global.


console.log("==========>>   ");

const tea = function(){
    let username = "Sourabh";
    console.log("normal function this.username =", "Hello " + this.username); // Output: Hello undefined
}
tea();

console.log("==========>>   ");

const tea2 = () => {
    let username = "Sourabh";
    console.log( this); 
} 
tea2();