const myobj = {
    js: "javascript",
    python: "python",
    cpp: "c++"
};

for (const key in myobj) {
    console.log(`${key} belongs to ${myobj[key]}`);
}


const programming = ["js", "python", "c++"];
for (const key in programming) {
    console.log(`${key} ========= ${programming[key]}`);
}