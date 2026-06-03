


    const addTwo =(num1,num2) => {
        return num1 + num2;
    }
    console.log(addTwo(3,4));

    // implicit return in arrow function

    const addtewo2 = (num1,num2) => (num1 + num2);
    console.log(addtewo2(3,4));


    // object return in arrow function

    const addtwo3 = (num1,num2) => ({username: "Sourabh"});
    console.log(addtwo3(3,4));



    const myArray = [1, 2, 3, 4, 5];

    myArray.forEach(function(num) { 
        console.log(num * 2);
    });