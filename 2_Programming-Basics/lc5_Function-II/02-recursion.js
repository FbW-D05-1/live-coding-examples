// 1. repetitive
// 2. it takes a modified copy of the original Data
// 3. it has an exit or termination condition

// analogy:
// 1. google recursion
// 2. sope + rinsing
// 3. organization chart + christmas gifts

// https://www.javascripttutorial.net/javascript-recursive-function/

// A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.

// countdown

// let counter = 10;

// while (counter > 0) {
//   console.log(counter--);
// }

//wolololololo
//Wer das liest ist schlau :*
//Ich habe eine Schlange im Stiefel

// recursive countdown function
const countdown = (value) => {
  if (value > 0) {
    console.log(value);
    return countdown(value - 1);
  } else {
    return value;
  }
};

countdown(1);

// ----------------------------------------------------
// n mathematics, the factorial of a non-negative integer n n, denoted by n ! n!,
// is the product of all positive integers less than or equal to n n. The factorial
// of n n also equals the product of n n with the next smaller factorial:
// factorial

const factor = (number) => {
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
};
console.log(factor(6));

// recursive factorial function
const factor1 = (number) => {
  if (number <= 0) {
    // terminal case
    return 1;
  } else {
    // block to execute
    return number * factor1(number - 1);
  }
};
// ternary/short form:
// factorial = (x) => (x ? x * factorial(x - 1) : 1);
console.log(factor1(6));

// https://www.sitepoint.com/recursion-functional-javascript/
