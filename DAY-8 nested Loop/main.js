// A
// A B
// A B C
// A B C D
// A B C D E

// let prompt = require("prompt-sync")();
// let userinput = Number(prompt("Enter the number of rows: "));

// for (let i = 1; i <= userinput; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }
//   console.log();
// }

// Q39. -------------------->>   mirror right angle triangle

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// let prompt = require("prompt-sync")();
// let userinput = Number(prompt("Enter the number of rows: "));

// for (let i = 1; i <= userinput; i++) {
//   for (let j = 1; j <= userinput - i; j++) {
//     process.stdout.write("  ");
//   }

//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Q40. -------------------->>  triangle of pattern

//     *
//    ***
//   *****
//  *******
// *********

// let prompt = require("prompt-sync")();
// let userinput = Number(prompt("Enter the number of rows: "));

// for (let i = 1; i <= userinput; i++) {
//   for (let j = 1; j <= userinput - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Q41. ---------------------->> X pattern

// *       *
//  *     *
//   *   *
//    * *
//     *
//    * *
//   *   *
//  *     *
// *       *

// let prompt = require("prompt-sync")();
// let userinput = Number(prompt("Enter the number of rows: "));

// for (let i = 1; i <= userinput; i++) {
//   for (let j = 1; j <= userinput; j++) {
//     if (i === j || i + j === userinput + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// Q42. --------------------> v pattern

// *       *
//  *     *
//   *   *
//    * *
//     *

// let prompt = require("prompt-sync")();
// let userinput = Number(prompt("Enter the number of rows: "));

// for (let i = 1; i <= userinput; i++) {
//   for (let j = 1; j <= userinput * 2 - 1; j++) {
//     if (i === j || i + j === userinput * 2) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// -------------------------------->> session8,9 (Arrays)
