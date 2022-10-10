// Function Robot gets us some Milk

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  let numberOfBottles = Math.floor(money / 1.5);
  console.log("buy", numberOfBottles, " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("gimmeMelk");
}

// getMilk(10);

function lifeInWeeks(age) {
  let yearsRemaining = 90 - age;
  let days = yearsRemaining * 365;
  let weeks = yearsRemaining * 52;
  let months = yearsRemaining * 12;
  console.log("You have", days, weeks, months, yearsRemaining, "left.");
}

// lifeInWeeks(28);

// We can pass arbitrary data to functions using parameters (also called function arguments) .
// Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.

// 1.
function square(number) {
  console.log(number * number);
}
square(5); // 25
square(50); // 2500
square(2); // 4
square(); // NaN
// ---------##---------
// 2.

function showMessage(name, message) {
  console.log(`${name}'s message: ${message}`);
}
showMessage("Anna", "Hello!");
// showMessage(Anna, Hello); Error
showMessage("Derya", "waddup");

// ---------##---------
// 3.

function concatStrings(string1, string2) {
  let output = `${string1} ${string2}`;
  console.log(output);
}

concatStrings("Hello");
concatStrings("Hello", "World");

// The default values of the parameters are undefined.

// ---------##---------
// 4.

// ---------##---------
// 5.

function userInfo(firstName, lastName, email, dateOfBirth) {
  const userObject = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    dob: dateOfBirth,
  };
  if (userObject.dateOfBirth === undefined) {
    userObject.dateOfBirth = "Date of birth not available";
  }
  console.log(userObject);
}

userInfo("John", "Doe", "John@ddd.com");

const sayHi = function () {
  console.log("Hello");
};

sayHi();
