let mydate = new Date();

console.log(mydate.toString());//Fri May 22 2026 11:24:19 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());//Fri May 22 2026
console.log(mydate.toTimeString());//11:24:19 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleDateString());//5/22/2026
console.log(mydate.toLocaleTimeString());//11:24:19 AM
console.log(mydate.getFullYear());//2026
console.log(mydate.getMonth() + 1);//5
console.log(mydate.getDate());//22
console.log(mydate.getDay()); //5 (Friday)
console.log(mydate.getHours()); //11
console.log(mydate.getMinutes()); //24
console.log(mydate.getSeconds()); //19

console.log(typeof mydate); //object



let mycreatedDate = new Date(2026, 2, 1); 
// January 1, 2026
console.log(mycreatedDate.toDateString());
 //Wed Jan 01 2026 00:00:00 GMT+0530 
 // (India Standard Time)
 console.log(mycreatedDate.toLocaleString());
 //5/1/2026, 12:00:00 AM

 let mytimeStamp = Date.now();
console.log(mytimeStamp); 
//1648444800000 (milliseconds since Unix epoch)
console.log(mycreatedDate.getTime());



let newdate = new Date();
console.log(newdate.toString());
console.log(newdate.getTime());
console.log(newdate.getFullYear());
console.log(newdate.getMonth());
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getHours());
console.log(newdate.getMinutes());
console.log(newdate.getSeconds());
console.log(newdate.getMilliseconds());
console.log(newdate.getTimezoneOffset());

