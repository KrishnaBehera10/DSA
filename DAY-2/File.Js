//------------------->>  Math function
// console.log(Math.ceil(10.2)); // aways round up
// console.log(Math.floor(10.6)); // aways round down
// console.log(Math.round(10.4)); // round to nearest integer
// console.log(Math.abs(-10)); // absolute value (negative to positive)
// console.log(Math.trunc(10.9)); // remove decimal part (round towards zero)

// console.log(Math.pow(2, 3)); // 2 raised to the power of 3 (2 * 2 * 2 = 8)
// console.log(Math.sqrt(16)); // square root of 16 (4)
// nsole.log(Math.cbrt(27)); // cube root of 27 (3)
// console.log(Math.max(10, 20, 5)); // maximum value (20)
// console.log(Math.min(10, 20, 5)); // minimum value (5)
// console.log(Math.random() * 100+100); // random number between 0 (inclusive) and 1 (exclusive)
// let a = 2345.09454;
// console.log(a.toFixed(2)); // round to 2 decimal places (2345.09)

//------------------->>  String function
// let str = "Hello, World!";
// console.log(str.length); // length of the string (13)
// console.log(str.toUpperCase()); // convert to uppercase (HELLO, WORLD!)
// console.log(str.toLowerCase()); // convert to lowercase (hello, world!)
// console.log(str.includes("World")); // check if string contains "World" (true)
// console.log(str.indexOf("o")); // index of first occurrence of "o" (4)
// console.log(str.lastIndexOf("o")); // index of last occurrence of "o" (8)
// console.log(str.slice(0, 5)); // extract substring from index 0 to 5 (Hello)
// console.log(str.replace("World", "JavaScript")); // replace "World" with "JavaScript" (Hello, JavaScript!)
// console.log(str.split(", ")); // split string into array by ", " (["Hello", "World!"])
// console.log(str.trim()); // remove whitespace from both ends of the string (Hello, World!)

// Math problem

// ------------------>>> compounding interset

// let p = Number(prompt("Enter the principal amount:"));
// let r = Number(prompt("Enter the rate of interest:"));
// let t = Number(prompt("Enter the time in years:"));

// const A = p * Math.pow(1 + r / 100, t);
// const CI = Math.floor(A - p);
// console.log(CI);

// Q----------------->>> generate opt

// console.log(Math.floor(Math.random() * 9000 + 1000));

//Q ---------------------------->>> area of triangle by heros formula

// s = a + b + c / 2;
// Area=s(s−a)(s−b)(s−c)

// const a = Number(prompt("Enter the length of side a:"));
// const b = Number(prompt("Enter the length of side b:"));
// const c = Number(prompt("Enter the length of side c:"));

// if (a + b <= c || a + c <= b || b + c <= a) {
//   console.log("not possible");
// } else {
//   const s = (a + b + c) / 2;

//   const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   console.log(area);
// }

// Q circumference of circle
const r = Number(prompt("Enter the radius of the circle:"));
const circumference = 2 * Math.PI * r;
console.log(circumference);
