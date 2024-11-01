// ====================Question1: Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the numb
// let number = prompt("Enter a positive integer:");
// number = parseFloat(number);
// let result = document.createElement("div");
// result.innerHTML = `
//   <p>Number: ${number}</p>
//   <p>Rounded Value: ${Math.round(number)}</p>
//   <p>Floor Value: ${Math.floor(number)}</p>
//   <p>Ceil Value: ${Math.ceil(number)}</p>
// `;
// document.body.appendChild(result);

// ====================Question2: Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
// let number = prompt("Enter a positive integer:");
// number = parseFloat(number);
// let result = document.createElement("div");
// result.innerHTML = `
//   <p>Number: ${number}</p>
//   <p>Rounded Value: ${Math.round(number)}</p>
//   <p>Floor Value: ${Math.floor(number)}</p>
//   <p>Ceil Value: ${Math.ceil(number)}</p>
// `;
// document.body.appendChild(result);

// ====================Question3: Write a program that displays the absolute value of a number. 
// let number = prompt("Enter a number:");
// number = parseFloat(number);
// let absValue = Math.abs(number);
// let result = document.createElement("div");
// result.innerHTML = `<p>The absolute value of ${number} is ${absValue}</p>`;
// document.body.appendChild(result);

// ====================Question4: Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
// let diceValue = Math.floor(Math.random() * 6) + 1;
// let result = document.createElement("div");
// result.innerHTML = `<p>Random dice value: ${diceValue}</p>`;
// document.body.appendChild(result);

// ====================Question5: Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
// let coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
// let result = document.createElement("div");
// result.innerHTML = `<p>Random coin value: ${coinValue}</p>`;
// document.body.appendChild(result);

// ====================Question6: Write a program that shows a random number between 1 and 100 in your browser
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let result = document.createElement("div");
// result.innerHTML = `<p>Random Number (1 to 100): ${randomNumber}</p>`;
// document.body.appendChild(result);

// ====================Question7:  Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 
// let userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// let weight = parseFloat(userInput);
// let result = document.createElement("div");
// result.innerHTML = `<p>Your weight is: ${weight} kg</p>`;
// document.body.appendChild(result);

// ====================Question8:  Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userInput = prompt("Guess the secret number (between 1 and 10):");
// let userNumber = parseInt(userInput);
// let result = document.createElement("div");
// if (userNumber === secretNumber) {
//     result.innerHTML = `<p>Congratulations! You guessed the secret number: ${secretNumber}!</p>`;
// } else {
//     result.innerHTML = `<p>Sorry, the secret number was: ${secretNumber}. Better luck next time!</p>`;
// }
// document.body.appendChild(result);