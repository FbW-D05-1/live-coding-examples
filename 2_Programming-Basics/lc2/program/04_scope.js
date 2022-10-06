"use strict";
// SCOPE ?
// Place where our variables "live", where we can access it, are available
// BLOCK SCOPE = in between {} we have a new blockscope for our defined vars inside!
// we inherit always all surroundings!
// prefer if possible

// GLOBAL SCOPE = will ALWAYS be available everywhere
// so try to avoid it, but if you need it, use it!
const globalScope = "Hello global scope";
// What is that again?

// here is the global scope

if (true) {
  const blockScopeTrue = "hello block scope true";
  console.log(blockScopeTrue);
}

// A word on indentation and readability
// my advice => keep it 4 spaces indetated always => 1 TAB
// helps with debugging and so on...

// Difference between var and const
// The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
{
  var hello = "world";

  var hello = "bla";
}
console.log(hello);

{
  const hello2 = "world";
}

// function test() {
//   let time = new Date();
// }
// function test2() {
//   test();
// }
// console.log(time);

// console.log(hello2);

// function random() {
//   if (true) {
//     let waddup = "sss";
//   }
//   console.log(waddup);
// }
// random();
// Math problems
const number = 42;
// is it possible to divide by 2?
// => then please divide by 2, divide by 2 again, post both on the console.

// 42 % 2 === 0 ? console.log(42/2); console.log(42/2/2); : not possible to turn into a ternary
// if we have more than one statement
// count the semicolons
// in any of the true or false cases!
