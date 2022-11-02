//ForEach()

// forEach() method executes a provided function once for each array element.

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach((item, index, array) => {
  console.log("a[", index, "] =", item);
  sum += item;
});

console.log(sum);

const letters = ["a", "b", "c", "d", "e", "a", "e"];

let lett = "asdsadfa";
let splitted = lett.split("");

let letterCount = {};

letters.forEach((letter) => {
  if (letterCount[letter]) {
    letterCount[letter]++;
  } else {
    letterCount[letter] = 1;
  }
});

console.log(letterCount);

const products = [
  { name: "Rice", price: 5 },
  { name: "Tv", price: 500 },
  { name: "Chicken", price: 20 },
  { name: "Döner", price: 60 },
  { name: "Hosam", price: 2 },
];

let totalPrice = 0;
products.forEach((product) => {
  totalPrice += product.price;
});

console.log(totalPrice);
