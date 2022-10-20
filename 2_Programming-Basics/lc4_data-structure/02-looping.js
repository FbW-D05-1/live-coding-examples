// The for/in statement loops through the properties of an object.
// The block of code inside the loop will be executed once for each property.

// Do not use the for/in statement to loop through arrays where index order is important.
// Use for…in to iterate over the properties of an object

const oldCar = {
  make: "Toyota",
  model: "Supra",
  year: 2021,
};

for (const i in oldCar) {
  console.log(`${i} ---> ${oldCar[i]}`);
}
// --------------------------------------------------------- //

const person = {
  fname: "Hosam",
  lname: "doe",
  age: 25,
};

let text = "";

let text1 = "";
//keys
for (const key in person) {
  text1 += [key];
  //   console.log(key);
}
console.log(text1);
//values
for (const value in person) {
  text += person[value];
  //   console.log(person[value]);
}

console.log(text);

// ----------##----------

// You can also use for…in to iterate over the index values of an iterable like an string/array/object:
const str = "Turn the page";

for (const index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1

const fruits = {
  apple: 28,
  orange: 15,
  pear: 5,
};

const entries = Object.entries(fruits);
console.log(entries);
// [ [ 'apple', 28 ], [ 'orange', 17 ], [ 'pear', 54 ] ]

const keys = Object.keys(fruits);
let text3 = "";
for (const key of keys) {
  text3 += key;
  console.log(key);
}
// apple
// orange
// pear

for (const [fruit, count] of entries) {
  console.log(`There are ${count} ${fruit}s`);
}

// There are 28 apples
// There are 17 oranges
// There are 54 pears

for (const i of entries) {
  console.log(i);
}
// --------------------------------------------------------- //

// Use for…of to iterate over the values in an iterable
const animals = ["🐔", "🐷", "🐑", "🐇"];
const names = ["Gertrude", "Henry", "Melvin", "Billy Bob"];

for (const animal of animals) {
  const randoName = Math.floor(Math.random() * names.length);
  // randoName is the random index of the names array
  console.log(`${names[randoName]} the ${animal}`);
}

// in
for (const animal in animals) {
  const randoName = Math.floor(Math.random() * names.length);
  // randoName is the random index of the names array
  console.log(`${names[randoName]} the ${animals[animal]}`);
}
