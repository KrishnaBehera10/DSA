// let n = 10;

// for (let i = 1; i <= n; i++) {
//   if (i == 5) continue; // skip the rest of the loop when i is 5
//   console.log(i);
// }

//-------->> while loop

// let n = 10;
// let i = 1;

// while (i <= n) {
//   console.log("hello world");
//   i++;
// }

// Q.----------->>  sum of digits of a number

// let n = 1234;
// let sum = 0;

// while (n > 0) {
//   let digit = n % 10; // get the last digit
//   sum += digit; // add the digit to the sum
//   n = Math.floor(n / 10); // remove the last digit
// }

// console.log(sum); // output: 10

// Q. ---------------------->> reverse a number

// let n = 1234;
// let reversed = 0;

// while (n > 0) {
//   let rem = n % 10; // get the last digit
//   reversed = reversed * 10 + rem;
//   n = Math.floor(n / 10); // remove the last digit
// }
// console.log(reversed); // output: 4321

// Q. automorphic number

// let n = 6;
// let copy = n;
// let square = n * n;

// let count = 0;

// while (n > 0) {
//   n = Math.floor(n / 10);
//   count++;
// }

// if (square % Math.pow(10, count) === copy) console.log("Automorphic number");
// else console.log("Not an automorphic number");

// Q.swich case

// let day = 7;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }
