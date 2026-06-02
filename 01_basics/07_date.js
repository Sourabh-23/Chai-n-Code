let mydate = new Date();
const section = (title) => console.log(`\n--- ${title} ---`);

section("1. Current date formats");
console.log("toString =", mydate.toString());//Fri May 22 2026 11:24:19 GMT+0530 (India Standard Time)
console.log("toDateString =", mydate.toDateString());//Fri May 22 2026
console.log("toTimeString =", mydate.toTimeString());//11:24:19 GMT+0530 (India Standard Time)
console.log("toLocaleDateString =", mydate.toLocaleDateString());//5/22/2026
console.log("toLocaleTimeString =", mydate.toLocaleTimeString());//11:24:19 AM

section("2. Current date parts");
console.log("year =", mydate.getFullYear());//2026
console.log("month =", mydate.getMonth() + 1);//5
console.log("date =", mydate.getDate());//22
console.log("day =", mydate.getDay()); //5 (Friday)
console.log("hours =", mydate.getHours()); //11
console.log("minutes =", mydate.getMinutes()); //24
console.log("seconds =", mydate.getSeconds()); //19

console.log("typeof mydate =", typeof mydate); //object



let mycreatedDate = new Date(2026, 2, 1); 
// January 1, 2026
section("3. Created date");
console.log("created date string =", mycreatedDate.toDateString());
 //Wed Jan 01 2026 00:00:00 GMT+0530 
 // (India Standard Time)
console.log("created locale string =", mycreatedDate.toLocaleString());
 //5/1/2026, 12:00:00 AM

let mytimeStamp = Date.now();
section("4. Timestamp");
console.log("Date.now() =", mytimeStamp); 
//1648444800000 (milliseconds since Unix epoch)
console.log("mycreatedDate.getTime() =", mycreatedDate.getTime());



let newdate = new Date();
section("5. New date parts");
console.log("newdate.toString() =", newdate.toString());
console.log("newdate.getTime() =", newdate.getTime());
console.log("newdate.getFullYear() =", newdate.getFullYear());
console.log("newdate.getMonth() =", newdate.getMonth());
console.log("newdate.getDate() =", newdate.getDate());
console.log("newdate.getDay() =", newdate.getDay());
console.log("newdate.getHours() =", newdate.getHours());
console.log("newdate.getMinutes() =", newdate.getMinutes());
console.log("newdate.getSeconds() =", newdate.getSeconds());
console.log("newdate.getMilliseconds() =", newdate.getMilliseconds());
console.log("newdate.getTimezoneOffset() =", newdate.getTimezoneOffset());

