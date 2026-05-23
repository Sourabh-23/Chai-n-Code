// singleton object

// objects are created and used only once in the program
// it is often used to store configuration settings or to group related data together   

const tinderUser =  new Object(); // creating an empty object using the Object constructor

console.log(tinderUser); // {} empty object

tinderUser.id= "1234567890"; // adding properties to the object
tinderUser.name= "Sourabh";
tinderUser.isLoggedIn= false;

//console.log(tinderUser);

const regularUser = {
email: "surAa@example.com",
fullName:{
userFullName: "Sourabh Howale",
firstName: "Sourabh",
lastName: "Howale",
}

}
//console.log(regularUser.fullName.firstName);

// cobine two objects using spread operator

const obj1= {
key1: "value1",
key2: "value2",
}

const obj2= {
key3: "value3",
key4: "value4",
}                                                   

const obj3 ={obj1, obj2}; // this will create a new object with obj1 and obj2 as properties
console.log(obj3); // {obj1: {key1: "value1", key2: "value2"},
// 

const obj4 = Object.assign({}, obj1, obj2); // this will create a new object with the properties of obj1 and obj2
console.log(obj4); // {key1: "value1", key2: "value2", key3: "value3", key4: "value4"}

const users = [
    {
        id: 1,
        name: "Sourabh",
        email: "sourabh@example.com",
        fullName: {
            userFullName: "Sourabh Howale",
            firstName: "Sourabh",
            lastName: "Howale",
        },
        isLoggedIn: false,
        lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
        lastLoginTimes: [12, 11, 10],
    },
    {
        id: 2,
        name: "Rahul",
        email: "rahul@example.com",
        fullName: {
            userFullName: "Rahul Sharma",
            firstName: "Rahul",
            lastName: "Sharma",
        },
        isLoggedIn: true,
        lastLoginDays: ["Monday", "Friday"],
        lastLoginTimes: [9, 8],
    },
    {
        id: 3,
        name: "Priya",
        email: "priya@example.com",
        fullName: {
            userFullName: "Priya Patil",
            firstName: "Priya",
            lastName: "Patil",
        },
        isLoggedIn: false,
        lastLoginDays: ["Tuesday", "Thursday"],
        lastLoginTimes: [11, 5],
    },
    {
        id: 4,
        name: "Amit",
        email: "amit@example.com",
        fullName: {
            userFullName: "Amit Desai",
            firstName: "Amit",
            lastName: "Desai",
        },
        isLoggedIn: true,
        lastLoginDays: ["Wednesday", "Sunday"],
        lastLoginTimes: [7, 3],
    },
];``

console.log(users); 

console.log(users[0].fullName.firstName);
console.log(users[0].fullName.lastName);
console.log(users[2].fullName.userFullName);


// destructuring objects

const course = {
courseName: "JavaScript",
courseDuration: "3 months",
courseLevel: "Beginner",
};  

const {courseName, courseDuration, courseLevel} = course; // destructuring the course object
console.log(courseName); // JavaScript
console.log(courseDuration); // 3 months
console.log(courseLevel); // Beginner


const navbar = {
brand: "My Website",
links: ["Home", "About", "Contact"],
logo: "logo.png",
};

const {brand, links, logo} = navbar; // destructuring the navbar object
console.log(brand); // My Website
console.log(links); // ["Home", "About", "Contact"]
console.log(logo); // logo.png

// json objects
// json stands for JavaScript Object Notation
// json is a lightweight data interchange format
// json is a text format that is completely language independent
// json is used to store and exchange data between a server and a client
// json is used to serialize and deserialize data


