// Loops are used to repeat our actions.

// In computer sicience, a loop is a sequence of instructions that is continually repeated until a certain condition is met.

// ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"]

//  for loop

//  syntax: for(begin; condition; step) { ....render the image.... }

// begin(i = 0) : Executes once upon entering the loop.

// condition(i <= 3): Checked before every loop iteration. If false, the loop stops.

// body({console.log(i)}): Runs again and again while the condition is truthy.

// step(i++): Executes after the body on each iteration.

// 1.
// Start a loop to print numbers starting from 0 and end at 3.
for (let i = 0; i <= 3; i++) {
  console.log("first one", i);
}

// loop 1:
// i = 0
// check condition
// execute body: console.log(0);
// i = 0 + 1
// i = 1

// loop 2:
// i = 1;
// check condition
// execute body: console.log(1);
// i = 1 + 1
// i = 2

// loop 3:
// i = 2
// check condition
// execute body: console.log(2);
// i = 2 + 1
// i = 3

// loop 4:
// i = 3
// check condition
// execute body: console.log(3);
// i = 3 + 1
// i = 4

// loop 5:
// i = 4
// check condition: false
// loop stops/ break

// OUTPUT:
// 0 - loop1
// 1 - loop2
// 2 - loop3
// 3 - loop4

// -----------##-----------
// Tasks:
// 1. Print the value of i if i starts from 0 and i is less than 3.
for (let i = 0; i < 3; i++) {
  console.log("2nd", i);
}

// --------##--------

// 2. Print the value of i if i starts from 1 and i is less than/equal to 3.
for (let i = 1; i <= 3; i++) {
  console.log("marcel: ", i);
}

// Output:
// 1
// 2
// 3

// -----------##-----------
// 2.
let anything;

for (anything = 0; anything <= 10; anything += 5) {
  console.log("Ed:", anything);
}

// --------##--------
// 3.

// for (anything = 5; anything <= 11; anything + 3) {
//   console.log("Klaus:", anything);
// }

// --------##--------
// 4.
let sum1 = "Hello";

for (let i = 3; i <= 5; i++) {
  sum1 = sum1 + 2;
  console.log(`Sum = ${sum1}`);
  console.log(`i = ${i}`);
}
// console.log(`Final sum = ${sum1}`); // Hello222

// Sum = Hello2
// i = 3
// Sum = Hello22
// i = 4
// Sum = Hello222
// i = 5

// ---------##---------
// 5.
let myVar = "Hello";
for (let i = 5; i <= 10; i++) {
  myVar = myVar + i;
  console.log(`myVar = ${myVar}`);
}

// myVar = Hello5
// myVar = Hello56
// myVar = Hello567
// myVar = Hello5678
// myVar = Hello56789
// myVar = Hello5678910

// ---------##---------
// 6.

// --------##--------
// 7.

// ---------##---------
// 8.

let counter = 11;
let finalNumb = 0;
for (let i = 0; i <= counter; i++) {
  finalNumb = finalNumb + i;
  console.log(finalNumb, i);
}

// ---------##---------
// for loop on string

// 1.
const myString = "Etienne Silue";

console.log(myString.length);
console.log(myString[2]);

for (let i = -2; i < myString.length; i++) {
  console.log(`The index of ${myString[i]} is ${i}`);
}

// The index of undefined is -2
// The index of undefined is -1
// The index of E is 0
// The index of t is 1
// The index of i is 2
// The index of e is 3
// The index of n is 4
// The index of n is 5
// The index of e is 6
// The index of   is 7
// The index of S is 8
// The index of i is 9
// The index of l is 10
// The index of u is 11
// The index of e is 12

// ---------##---------
// 2.

const myString2 = "Heute ist Gut";
let newStr = "";
for (let index = 0; index < myString2.length; index++) {
  let S = myString2[index];
  newStr = newStr + S;
  console.log(newStr);
}

// H
// He
// Heu
// Heut
// Heute
// Heute
// Heute i
// Heute is
// Heute ist
// Heute ist
// Heute ist G
// Heute ist Gu
// Heute ist Gut

let worD = "hello";

for (let i = worD.length; i >= 0; i--) {
  console.log(worD[i]);
}

// for (let i = worD.length - 1; i >= 0; i--) {
//     console.log(worD[i]);
//   }

// undefined
// o
// l
// l
// e
// h

// ---------##---------
// for loop on array

const fruits = ["Apple", "Orange", "Banana", "Melon", "Lemon"];

// 1.
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  console.log(`${fruit}`);
}

// Apple
// Orange
// Banana
// Melon
// Lemon

// ---------##---------
// 2.
const fruits2 = ["Apple", "Orange", "Banana"];
const newArr = [];

for (let i = fruits2.length - 1; i >= 0; i--) {
  //   newArr[i] = fruits2[i];
  newArr.push(fruits2[i]);
}
console.log(newArr);
// ---------##---------
// 3.

const fruits3 = ["Apple", "Orange", "Banana"];

for (let i = 0; i < fruits3.length; i++) {
  const fruit = fruits3[i];
  console.log(fruit);
}

// ---------##---------
