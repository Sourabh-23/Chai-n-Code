//immediately-invoked-function(IIFE) - 
// a function that runs as soon as it is defined

function chai()
{
    console.log("I am a cup of tea");
}
chai(); // I am a cup of tea

(function chai2()
{
    console.log("I am a cup of coffee");
})(); // I am a cup of tea
// The function is defined and immediately invoked, without the need to call it separately.
// IIFE is often used to create a new scope and avoid polluting the global namespace.


// IIFE with arrow function
(() => {
    console.log("I am an arrow function IIFE");
})(); // I am an arrow function IIFE


//2 IIFF 
(function() {
    let count = 0;
    console.log("Count is: " + count);
    count++;
    console.log("Count is: " + count);
})();
// Count is: 0
// Count is: 1