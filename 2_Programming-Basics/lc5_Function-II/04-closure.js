// https://javascript.info/closure

// ---------------------------------- //
const makeAdder = (x) => {
  const add = (y) => y + x;
  return add;
};
console.log(makeAdder(2)(2));

const plusOne = makeAdder(1);
const plusTen = makeAdder(10);

plusOne(3); // 4 <-- 1 + 3
// console.log(plusOne(3));
plusOne(41); // 42 <-- 1 + 41

plusTen(13); // 23 <-- 10 + 13

// ---------------------------------- //

const init = () => {
  let name = "john";
  const displayName = () => {
    console.log(name);
  };
  displayName(); //callback of nested function.
};

init(); //doesn't require closure ()() when callbacked.
// ---------------------------------- //

// const makeAdder2 = (x) => {
//     const add2 = (y) => y + x;
//     add2()
//   };

// ---------------------------------- //

const makeTitle = (x) => {
  const title = (y) => `${x} ${y}`;
  return title;
};

const mrTitle = makeTitle("Mr.");
const msTitle = makeTitle("Ms.");
const mxTitle = makeTitle("Mx.");
console.log(mrTitle("Frank"));
console.log(msTitle("Uschi"));
console.log(mxTitle("Hosam"));

const sir = makeTitle("Sir")("Michael");

// -------------Callback--------------------- //

const myName = (name, age) => {
  //   const age = makeAdder(100)(100);
  return `${name} is ${age} years old`;
};
// console.log(myName(makeTitle("Sir")("Michael")));

// console.log(myName(mrTitle("Biden")));

console.log(myName(makeTitle("Sir")("Biden"), makeAdder(100)(50))); //much wow

// https://jsfiddle.net/vnkuZ/7726/?utm_source=website&utm_medium=embed&utm_campaign=vnkuZ

// const name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

function makeWorker() {
  const name = "Pete";

  return function () {
    console.log(name);
  };
}

const name = "John";

// create a function
const work = makeWorker();

// call it
work();

// --------------------------- //

// Lexical Environment

// In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the LEXICAL ENVIRONMENT.

// a “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.

// To summarize:
// A variable is a property of a special internal object, associated with the currently executing block/function/script.
// Working with variables is actually working with the properties of that object.

// --------------------------- //
// Function Declaration

// Unlike let variables, they are fully initialized not when the execution reaches them, but earlier, when a Lexical Environment is created.

// when a function runs, a new function Lexical Environment is created automatically.
// That Lexical Environment is used to store local variables and parameters of the call.

// When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.
