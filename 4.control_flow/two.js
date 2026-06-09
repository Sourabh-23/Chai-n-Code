// nesting

const balance =10;

if(balance > 500)
{
    console.log("You have a good balance"); 

}
else if(balance > 200)
{
    console.log("You have a medium balance");
}
else
{
    console.log("You have a low balance");
}


const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedinfromemail = false;


if (userloggedIn && debitCard || 
    loggedInFromGoogle || loggedinfromemail || 
    loggedInFromGoogle)
{
    console.log("Allow user to buy course");
}
else
{
    console.log("You are not logged in");
}