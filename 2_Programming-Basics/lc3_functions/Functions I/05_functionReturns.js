// A return statement determines the value the function returns.
// A return keyword without an expression after it will cause the function to return undefined.
// Functions that don’t have a return statement at all return undefined.

// ---------##---------
// A function with an empty return or without it returns undefined. If a function does not return a value, it is the same as if it returns undefined.

// 1.

// ---------##---------

function doNothing() {}
console.log(doNothing() === undefined); // true

// 2.
// An empty return is also the same as return undefined:

// ---------##---------

function doNothing2() {
  return;
}
console.log(doNothing2() === undefined); //true
// 3.

// ---------##---------
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(result); // 3
// There may be many occurrences of return in a single function.

// It is possible to use return without a value. That causes the function to exit immediately.

// 4.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return "Access not allowed!";
  }
}
// checkAge(20);
// console.log(checkAge(15));

// ---------##---------
// 5.
function letDrive(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("You can drive!");
}
letDrive(0.1);
// ---------##---------
// 6.
const a = 10;

function printMessage2() {
  const b = a + 2;
  if (a === 10) {
    return 8;
  } else {
    return b;
  }
}

console.log(printMessage2());
// ---------##---------
// 6.

function userInfo(firstName, lastName, email, dateOfBirth) {
  let userObject = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    date_of_birth: dateOfBirth,
  };
  if (userObject.date_of_birth === undefined) {
    userObject.date_of_birth = "Date of birth not available";
  }
  return userObject;
}

console.log(userInfo("kebab", "babab", "email@email.com", 12));
// ---------##---------
// 7.

const myArr = [23, 42, 16, 32, 48, 87, 11, 92, 43, 56];

function extractNumbers() {
  let newArr = [];

  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] <= 50) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
}

console.log(extractNumbers());
