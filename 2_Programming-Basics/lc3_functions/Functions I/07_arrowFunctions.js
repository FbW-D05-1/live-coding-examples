// Arrow Functions are very convenient for simple one-line actions, when we’re just too lazy to write many words.

// The examples below take arguments from the left of => and evaluated the right-side expression with them.

/*
Arrow functions are handy for one-liners. They come in two flavors:
Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
*/

// 1.

/* The arrow function is a shorter form of:
const sum = function(a, b) {
  return a + b;
};
*/

const sum = (a, b) => a + b;

console.log(sum(1, 2));
// ----------##---------
// 2.

// arrow function with { body } without a return statement

const sum2 = (a, b) => {
  a + b;
};
console.log(sum2(2, 5)); // undefined

// ----------##---------
// 3.

// arrow function with { body } and an explicit return statement

const sum3 = (a, b) => {
  let z = a + b;
  let x = z + 5;
  //   let myObj = {}

  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];

  //   }
  // if(a > b){

  // }

  return x;
};
console.log(sum3(2, 5));

// ---------##---------
// If we have only one argument, then parentheses can be omitted
// 4.

const double = (number) => number * 2;

console.log(double(3));

// ---------##---------
// 5.

const sayHi = () => console.log("Hello");

sayHi();

// If there are no arguments, parentheses should be empty (but they should be present):

// ---------##---------
// 6.

const age = 19;

const welcome =
  age < 18
    ? (firstName, lastName = "Doe") =>
        console.log(`Hello! ${firstName + lastName}`)
    : (firstName, lastName = "Doe") =>
        console.log(`Welcome! ${firstName + lastName}`);

welcome("Franz");

// Arrow functions can be used in the same way as Function Expressions.

// ---------##---------
// Multi-line Arrow Functions
// 7.

const newSum = (a, b) => {
  let result = a + b;
  return result;
};

console.log(newSum(1, 2));

// ---------##---------
// 8.

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 4));

function validate(email) {
  let atSymPos;
  let atSymCounter = 0;
  let dotPos;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atSymCounter++;
      atSymPos = i;
      if (atSymPos === dotPos + 1) {
        return `${email} is invalid: "." found directly before "@"`; //checks if "." is directly before "@"
      }
      // inspect code at work: console.log(`@ located at ${atSymPos}`);
    }
    if (email[i] === ".") {
      dotPos = i; // NB: if there are multiple dots, Pos will indicate last dot placement
      // inspect code at work: console.log(`. located at ${dotPos}`);
      if (dotPos === atSymPos + 1) {
        // checks if "." is directly after "@"
        return `${email} is invalid: "." found directly after "@"`;
      }
      if (email[dotPos + 1] === ".") {
        // checks if there are consecutive "."
        return `${email} is invalid: consecutive "." found`;
      }
    }
  }

  if (atSymCounter !== 1 || atSymPos === 0 || atSymPos === email.length - 1) {
    //checks if we have exactly 1 "@" character AND that the "@" is NOT first or last character
    return `${email} is invalid: "@" syntax error`;
  } else if (
    email[0] === "." ||
    dotPos < atSymPos ||
    dotPos === email.length - 1
  ) {
    // checks if "." is first character, AND if there is no "." after "@", AND "." is NOT last character
    return `${email} is invalid: "." syntax error`;
  } else {
    return `${email} is valid`;
  }
}

const isValidateEmail = (str) => {
  return Boolean(
    str
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

console.log(validate("j@example.com"));
console.log(validate("@example.com)"));
console.log(validate("john.smith@com"));
console.log(validate("john.smith@email.com"));
console.log(validate("personal.@fran.borg"));
console.log(validate("jennaIsAwesome@..mail.com"));
console.log(validate("hereComes...jenna@mail.com"));
console.log(validate("lastOne@orIsIt.com."));
