// let n = Number(prompt("Enter a number: "));

// if (isNaN(n)) {
//   console.log("Please enter a valid number.");
// } else {
//   for (let i = 1; i <= n; i++) {
//     console.log("Hello World");
//   }
// }

// Q.------------->> print natural numbers from 1 to n

// let n = Number(prompt("Enter a number: "));

// if (isNaN(n)) {
//   console.log("Please enter a valid number.");
// } else {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }

//Q. take a number as input and print the multiplication table of that number

// let n = Number(prompt("Enter a number: "));

// if (isNaN(n)) {
//   console.log("Please enter a valid number.");
// } else {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
//   }
// }

// Q. sum up to n terms

// let n = Number(prompt("Enter a number: "));

// if (isNaN(n)) {
//   console.log("Please enter a valid number.");
// } else {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i; // sum = sum + i
//   }
//   console.log(`The sum of first ${n} natural numbers is: ${sum}`);
// }

// Q. factorial of a number

// let n = Number(prompt("Enter a number: "));

// if (isNaN(n) || n < 0) {
//   console.log("Please enter a valid non-negative number.");
// } else {
//   let factorial = 1;
//   for (let i = 1; i <= n; i++) {
//     factorial *= i; // factorial = factorial * i
//   }
//   console.log(`The factorial of ${n} is: ${factorial}`);
// }

// Q. print the sum of all even & odd numbers in range of 1 to n

// let n = Number(prompt("Enter a number: "));

// if (isNaN(n) || n < 1) {
//   console.log("Please enter a valid positive number.");
// } else {
//   let evenSum = 0;
//   let oddSum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       evenSum += i; // evenSum = evenSum + i
//     } else {
//       oddSum += i; // oddSum = oddSum + i
//     }
//   }
//   console.log(`The sum of even numbers from 1 to ${n} is: ${evenSum}`);
//   console.log(`The sum of odd numbers from 1 to ${n} is: ${oddSum}`);
// }

// Q. print all the factors of a number

// method-1

// let n = Number(prompt("Enter a number: "));

// if (isNaN(n) || n < 1) {
//   console.log("Please enter a valid positive number.");
// } else {
//   console.log(`The factors of ${n} are:`);
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       console.log(i);
//     }
//   }
// }

// method-2 (optimized)

// if (isNaN(n) || n < 1) {
//   console.log("Please enter a valid positive number.");
// } else {
//   console.log(`The factors of ${n} are:`);
//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i === 0) {
//       console.log(i);
//     }
//   }
//   console.log(n); // n is also a factor of itself
// }

// Q. check if a number is prime or not

// method-1

let n = Number(prompt("Enter a number: "));

// let isPrime = true;

// if (isNaN(n) || n < 2) {
//   console.log("Please enter a valid number greater than or equal to 2.");
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log(`${n} is a prime number.`);
// } else {
//   console.log(`${n} is not a prime number.`);
// }

// method - 2(optimized);

// let isPrime = true;

// if (isNaN(n) || n < 2) {
//   console.log("Please enter a valid number greater than or equal to 2.");
// } else {
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log(`${n} is a prime number.`);
// } else {
//   console.log(`${n} is not a prime number.`);
// }

// method-3 (most optimized)

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

const primeCheck = isPrime(n);

if (primeCheck) console.log(`${n} is a prime number.`);
else console.log(`${n} is not a prime number.`);
