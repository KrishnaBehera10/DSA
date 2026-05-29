// for (let i = 1; i <= 5; i++) {
//   process.stdout.write("* ");
// }

// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write("* ");
// }

// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write("* ");
// }

// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write("* ");
// }

// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write("* ");
// }

// console.log();

//---------------------->>>  2nd

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Q1. Write a program to print the following pattern:

// const prompt = require("prompt-sync")();

// const userprompt = prompt("Enter the number of rows: ");

// for (let i = 1; i <= userprompt; i++) {
//   for (let j = 1; j <= userprompt; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Q35.-------------------->>  right angle triangle

// const prompt = require("prompt-sync")();
// const userprompt = prompt("Enter the number of rows: ");

// for (let i = 1; i <= userprompt; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Q35. -------------------->>>> right angle triangle

// let prompt = require("prompt-sync")();
// let userprompt = prompt("Enter the number of rows: ");

// for (let i = 1; i <= userprompt; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

// Q36. --------------->>
// A
// A B
// A B C

// let prompt = require("prompt-sync")();
// let userprompt = prompt("Enter number of rows: ");

// for (let i = 1; i <= userprompt; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }

//   console.log();
// }

// Q38. ---------------->> inverted right angle triangle

let prompt = require("prompt-sync")();
let userprompt = prompt("Enter number of rows: ");

// method 1

// for (let i = 1; i <= userprompt; i++) {
//   for (let j = userprompt; j >= i; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// method 2

for (let i = 1; i <= userprompt; i++) {
  for (let j = 1; j <= userprompt - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
