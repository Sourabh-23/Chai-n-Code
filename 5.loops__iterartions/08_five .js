const coding = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

coding.forEach( function (name) {
    console.log(name);
} )

console.log("===========");

coding.forEach( (name) => {
    console.log(name);
} )


console.log("===========");

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);


console.log("===========");

coding.forEach( (item, index, array) => {
    console.log(item, index, array);
} )

console.log("===========");

const mycoding = [
    { name: "HTML", level: "1" },
    { name: "CSS", level: "2" },
    { name: "JS", level: "3" },
    { name: "React", level: "4" },
    { name: "Redux", level: "5" },
    { name: "Node", level: "6" },
    { name: "Express", level: "7" },
    { name: "MongoDB", level: "8" },
]
mycoding.forEach( (item ) => {
    console.log( item.name, item.level);  
} ) 