// Q do-while

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// Q2. repeat a message until user enters a name

// let usrname;

// do {
//   console.log("namaste duniya");
//   usrname = prompt("Enter your name:");
// } while (!usrname);

// console.log("Hello, " + usrname + "!");

// Q3.-------------->>  guess the number

// let secretNumber = Math.floor(Math.random() * 100) + 1;

// let guess;

// do {
//   guess = Number(prompt("Guess the number between 1 and 100:"));
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("Please enter a valid number between 1 and 100.");
//   }

//   if (guess < secretNumber) {
//     console.log("Too low! Try again.");
//   } else if (guess > secretNumber) {
//     console.log("Too high! Try again.");
//   } else {
//     console.log("Congratulations! You guessed the number!", secretNumber);
//   }
// } while (guess !== secretNumber);

// Q4.--------------->>  sasta calculator

// let userinput;

// do {
//   let num1 = Number(prompt("Enter the first number:"));
//   let num2 = Number(prompt("Enter the second number:"));
//   let operator = prompt("Enter the operator (+, -, *, /):");

//   switch (operator) {
//     case "+":
//       console.log("Result: " + (num1 + num2));
//       break;
//     case "-":
//       console.log("Result: " + (num1 - num2));
//       break;
//     case "*":
//       console.log("Result: " + num1 * num2);
//       break;
//     case "/":
//       if (num2 !== 0) {
//         console.log("Result: " + num1 / num2);
//       } else {
//         console.log("Error: Division by zero is not allowed.");
//       }
//       break;
//     default:
//       console.log("Invalid operator. Please use +, -, *, or /.");
//   }

//   userinput = prompt(
//     "Do you want to perform another calculation? (yes/no):",
//   ).toLowerCase();
// } while (userinput === "yes");
