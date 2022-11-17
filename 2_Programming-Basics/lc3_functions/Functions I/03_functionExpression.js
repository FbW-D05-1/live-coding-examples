// tl;dr Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

// There is another syntax for creating a function that is called a Function Expression.
// The function is created and assigned to the variable explicitly, like any other value. No matter how the function is defined, it’s just a value stored in the variable sayHi.
// In JavaScript, a function is a value, so we can deal with it as a value.

// Function Expressions have a semicolon ; at the end, but Function Declaration does not.
// A Function Expression is used inside the statement: let sayHi = ...;, as a value. It’s not a code block.
// The semicolon ; is recommended at the end of statements, no matter what is the value.
// So the semicolons are not related to the Function Expressions in any way, they just terminate the statements.

// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.

// 1.
const sayHi = function () {
  console.log("Hello");
};

// ---------##---------
// 2.

function sayHi2() {
  console.log("Hello");
}

const func = sayHi2;

sayHi();

// Please note again: there are no parentheses after sayHi.
// If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.

// The function can be called as both sayHi() and func().

// ---------##---------
// 3.

const square = function (number) {
  return number * number;
};
const x = square(4);
console.log(x);

// ---------##---------
// 4.
const age = 20;

const welcome =
  age < 18
    ? function () {
        console.log("Hello!");
      }
    : function () {
        console.log("Greetings");
      };

welcome();

// ---------##---------
// 5.

const fizzBuzz = function (myNum) {
  if (myNum % 3 == 0 && myNum % 5 == 0) {
    console.log("FizzBuzz");
  } else if (myNum % 3 == 0) {
    console.log("Fizz");
  } else if (myNum % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("Not divisable", myNum);
  }
};

fizzBuzz(4);

// ---------##---------

// Function Declaration vs Function Expression

// Function Expression
// A Function Expression is created when the execution reaches it and is usable from then on.
// Once the execution flow passes to the right side of the assignment let sum = function… , the function is created and can be used (assigned, called, etc. ) from now on.
// Function Expressions are created when the execution reaches them.

// Function Declaration
// A Function Declaration is usable in the whole script/code block.
// When JavaScript prepares to run the script or a code block, it first looks for Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
// After all of the Function Declarations are processed, the execution goes on.
// A function declared as a Function Declaration can be called earlier than it is defined.
// When a Function Declaration is made within a code block, it is visible everywhere inside that block. But not outside of it.

// When should you choose Function Declaration versus Function Expression?
// First consider Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.
// Function Declarations are more “eye-catching”.
