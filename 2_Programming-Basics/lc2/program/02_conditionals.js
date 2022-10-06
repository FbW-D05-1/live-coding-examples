// Conditional Statements if-else

// Logical Thinking:
// //Sunny
// 1. if sunny dress in shorts and light top
// 2. if sunny wear a face cap or hat
// //Rainy
// 1. if rainy take along an umbrella
// 2. if rainy wear a raincoat
// 3. if rainy use a car where possible
// // Cloudy
// 1. if cloudy  dress in your finest as possible
// 2. if cloudy  wear any shoes of your choice
// // Snow
// 1. if snow wear a winter jacket or mantle
// 2. if snow wear a snow boot
// 3. if snow check the traffic before going out

let weather = "Sunny";

if (weather == "Sunny") {
  console.log("Bring your sunglasses");
}
if (weather == "Rainy") {
  console.log("Bring an Umbrella");
}
if (weather == "Snowy") {
  console.log("Bring a jacket");
}
// Sometimes, we need to perform different actions based on different conditions.
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

// 1.
// Input: 21 and 3.
// if 21 is divisible by 3 then print- Yes, 21 is a multiple of 3
// if 21 is not divisible by 3 then print- No, 21 is not a multiple of 3

if (21 % 3 === 0) {
  console.log("yes, 21 is a multiple of 3");
} else {
  console.log("no, 21 is a multiple of 3");
}

// ---------###--------
// 2.
// Input: varA and varB
// if varA is not equal to varB, print- Booleans are not equal to strings!
// else, print- Booleans are equal to strings!

// Booleans are not equal to strings!
let varA = false;
let varB = "false";

if (varA != varB) {
  console.log("Booleans are not equal to string");
} else {
  console.log("Booleans are equal to strings!");
}
// ---------###--------
// 3.
// We can also pass a pre-evaluated boolean value to if, like this:
let year = 2020;
let cond = year == 2015;

if (cond) {
  console.log(`it's ${year}`);
} else {
  console.log("you are not up to date");
}
// Input: year and cond
// If the condition is true, then print - Yes, it is 2020.
// else, print- You are not up to date.

// You are not up to date!

// ---------###--------
// 4.
// Sometimes, we need to assign a variable depending on a condition.

let accessAllowed;
let age = 18;

if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
console.log(accessAllowed);

// Input: age
// if age is grater than 18, then allow access (accessAllowed is true)
// else deny access (accessAllowed is false)

// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

// ---------###--------
// 5.

let time = 11;
let greeting;

if (time <= 10) {
  greeting = "Good Morning!";
} else {
  greeting = "Good Evning!";
}
console.log(greeting);

// ---------###--------
// 6.

// Input: company, language, statementTrue and statementFalse
// if the company is Netscape, print true statement
// else print false statement
let company = "Microsoft";
let language = "JavaScript";
let statementTrue = `${company} created ${language}`;
let statementFalse = `${company} did not create ${language}`;

if (company == "Netscape") {
  console.log(statementTrue);
} else {
  console.log(statementFalse);
}
// ---------###--------
// 7.

// Inputs:
// weather
// tan

// Possible Outputs:
// "Don't forget your sunglasses!"
// "Don't forget your sunblocker"
// "enjoy!"
// "Don't forget your umbrella!"

// if weather is sunny OR weather is snowy, print - "Don't forget your sunglasses!"
// if you don't want a tan, print "Don't forget your sunblocker", else print "enjoy!"
// else print "Don't forget your umbrella!"
let weathertwo = "sunny";

if (weathertwo === "sunny" || weathertwo === "snowy") {
  console.log("Don't forget your sunglasses!");

  let notToTan = true;
  if (notToTan === true) {
    console.log("don't forget your' sunblocker");
  } else {
    console.log("Enjoy");
  }
} else {
  console.log("Don't forget your umbrella!");
}
// ---------###-----------------###--------
// Several conditions: “else if”

// 1.
let time2 = 21;
let greeting2;

if (time2 < 10) {
  greeting2 = "Good Morning!";
} else if (time2 >= 10 && time2 < 20) {
  greeting2 = "G'day!";
} else {
  greeting2 = "Good evening!";
}
console.log(greeting2);

// Input:
// time2

// If time is less than 10, greeting is "Good morning!", print greeting.
// If time is grater than/equal to 10 AND less than 20, greeting is "Good day!", print greeting.
// Else greeting is "Good evening!", print greeting.

// ---------###--------
// 2.
let firstName = "John";
let agE = 13;

// Input: first name and age

// If age is less than 13, print ${firstname} is a kid.
// If age is grater than/equal to 13 AND less than 20, print ${firstname} is a teenager.
// If age is grater than/equal to 20 AND less than 30, print ${firstname} is a young man.
// Else print ${firstname} is a man.

if (agE < 13) {
  console.log(`${firstName} is a kid.`);
} else if (13 <= agE < 20) {
  console.log(`${firstName} is a teenager.`);
} else if (agE >= 20 && agE < 30) {
  console.log(`${firstName} issa young man`);
} else {
  console.log(`${firstName} issa man`);
}

// ---------###--------
// 3.

// Inputs:
// weather
// tan

// Possible Outputs:
// "Don't forget your sunglasses!"
// "Don't forget your sunblocker"
// "enjoy!"
// "Don't forget your umbrella!"

// if weather is sunny, print - "Don't forget your sunglasses!"
// if weather is sunny and you don't want a tan, print "Don't forget your sunblocker", else print "enjoy!"
// if weather is snowy, print - "Don't forget your coat!"
// else print "Don't forget your umbrella!"
