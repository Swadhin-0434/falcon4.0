// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTime());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getSeconds());
// console.log(myDate.getUTCDate());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.setMonth());




// todo? Print your birthday in the console using the Date object.

let My_Birthday = new Date("2003-01-26");

let yr = My_Birthday.getFullYear();
let month = My_Birthday.getMonth() + 1;
let date = My_Birthday.getDate();

console.log("The date of my birth is ", yr, month, date);


// todo? Print the current time in the console using the Date object.

let current_time = new Date();
let hr = current_time.getHours();
let min = current_time.getMinutes();
let sec = current_time.getSeconds();

console.log("The current time is ",hr,":", min,":",sec);

// todo? Print your current age in the console using the Date object.

let toDay = new Date();
let M_B = new Date("2003-01-26");

let TODAY = toDay.getFullYear();
let mb = M_B.getFullYear();
 console.log("My current age is ",TODAY - mb);

 