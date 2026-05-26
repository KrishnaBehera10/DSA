// accept three numbers and find the largest of them

// {let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let num3 = Number(prompt("Enter the third number:"));

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }

// if (num3 > largest) {
//   largest = num3;
// }

// console.log("The largest number is:", largest);}

// Q accept three numbers and find the smallest of them
// {
//   let num1 = Number(prompt("Enter the first number:"));
//   let num2 = Number(prompt("Enter the second number:"));
//   let num3 = Number(prompt("Enter the third number:"));

//   let smallest = num1;

//   if (num2 < smallest) {
//     smallest = num2;
//   }
//   if (num3 < smallest) {
//     smallest = num3;
//   }
//   console.log("The smallest number is:", smallest);
// }

// Q --------------->> accept a year and check if it is a leap year or not

// method-1

// const year = Number(prompt("Enter year"));

// let isLeap = false;

// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) isLeap = true;
//     else isLeap = false;
//   } else {
//     isLeap = true;
//   }
// } else isLeap = false;

// console.log(isLeap ? "Leap year" : "Not a leap year");

// method-2

// if (year % 4 === 0 && year % 100 !== 0) {
//   isLeap = true;
// } else if (year % 400 === 0) {
//   isLeap = true;
// } else isLeap = false;

// console.log(isLeap ? "Leap year" : "Not a leap year");

//Q ------------>> shop discount

// let amount = Number(prompt("Enter amount"));

// method-1

// if (amount > 1 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log(amount - (5 * amount) / 100);
// } else if (amount > 7000 && amount <= 9000) {
//   console.log(amount - (10 * amount) / 100);
// } else if (amount > 9000) {
//   console.log(amount - (20 * amount) / 100);
// } else {
//   console.log("invalid input");
// }

//method-2

// let discount = 0;
// if (amount > 1 && amount <= 5000) discount = 0;
// else if (amount > 5000 && amount <= 7000) discount = 5;
// else if (amount > 7000 && amount <= 9000) discount = 10;
// else if (amount > 9000) discount = 20;
// else console.log("invalid input");

// console.log(amount - (discount * amount) / 100);

// Q -------------->> bijli bill

let unit = Number(prompt("Enter unit"));

let amount = 0;

// if (unit > 0 && unit <= 100) {
//   amount = unit * 4.2;
// } else if (unit > 100 && unit <= 200) {
//   amount = 100 * 4.2 + (unit - 100) * 6;
// } else if (unit > 200 && unit <= 400) {
//   amount = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
// } else if (unit > 400) {
//   amount = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
// }

// console.log(amount);

// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }

// if (unit >= 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }

// if (unit >= 100 && unit <= 200) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }

// console.log(amount + unit * 4.2);

// LOOP

let money = 2253;

if (money >= 500) {
  console.log(`500 note ${Math.floor(money / 500)}`);
  money = money % 500;
}
if (money >= 200) {
  console.log(`200 note ${Math.floor(money / 200)}`);
  money = money % 200;
}
if (money >= 100) {
  console.log(`100 note ${Math.floor(money / 100)}`);
  money = money % 100;
}
if (money >= 50) {
  console.log(`50 note ${Math.floor(money / 50)}`);
  money = money % 50;
}
if (money >= 20) {
  console.log(`20 note ${Math.floor(money / 20)}`);
  money = money % 20;
}
if (money >= 10) {
  console.log(`10 note ${Math.floor(money / 10)}`);
  money = money % 10;
}
if (money >= 5) {
  console.log(`5 note ${Math.floor(money / 5)}`);
  money = money % 5;
}
if (money >= 2) {
  console.log(`2 note ${Math.floor(money / 2)}`);
  money = money % 2;
}
if (money >= 1) {
  console.log(`1 note ${Math.floor(money / 1)}`);
  money = money % 1;
}
