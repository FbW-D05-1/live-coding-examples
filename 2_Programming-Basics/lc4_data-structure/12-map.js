// ------------------------------------------- //
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// The arr.map method is one of the most useful and often used.
// It calls the function for each element of the array and returns the array of results.

// The syntax is:

// const result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// })

// When we need to iterate over an array – we can use forEach, for or for..of.
// When we need to iterate and return the data for each element – we can use map.

const arr = [1, 2, 3, 4, 5];

const squareArr = arr.map((num) => num ** 2);
console.log(squareArr);
// We wrote a function that returns the square of a number and passed that function as an argument to our map()

// ------------------------------ //

const numbers = [4, 9, 16, 25];

function mapMethod(arr) {
  return arr.map(Math.sqrt);
}
console.log(numbers);
console.log(mapMethod(numbers));

const numArr2 = [1, 4, 9];

const doubles = numArr2.map((num) => num * 2);

console.log(doubles); // [2, 8, 18]

const doubles2 = doubles.map((num) => num * 2);

console.log(doubles2);
console.log(doubles);

const lengths = ["Hosam", "Enjoy", "Banana"].map((string) => string.length);

console.log(lengths);
// ------------------------------ //

// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

// !!!map() does not execute the function for array elements without values.

// !!!map() does not change the original array.

// ------------------------------ //

// Using map to reformat objectParamects in an array

const newArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformatted = newArray.map((objParam) => {
  const newObj = {};
  newObj[objParam.key] = objParam.value;
  console.log("newObj", objParam.key);
  console.log("value", objParam.value);
  console.log(newObj);
  return newObj;
});

console.log(reformatted); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]

console.log(newArray);
// [ { key: 1, value: 10 },
// { key: 2, value: 20 },
// { key: 3, value: 30 } ]

const strToArr = "L 2 S 6 L 3 S 4".split(" ");
console.log(strToArr); // [ 'L', '2', 'S', '6', 'L', '3', 'S', '4' ]

const newArr2 = strToArr
  .map((item) => {
    if (item === "L" || item === "S") {
      return item;
    } else {
      return item * 2;
    }
  })
  .join(" ");

console.log(newArr2); // L 4 S 12 L 6 S 8

const str = ["1", "2", "3", "4"];

const converted = str.map(Number); // will look like str.map(string => Number(string))

console.log(converted);

const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "Pc",
    price: 3000,
    count: 2,
  },
  {
    name: "phone",
    price: 700,
    count: 19,
  },
];

const totalProductsValue = products.map((product) => ({
  name: product.name,
  totalValue: product.price * product.count,
}));

console.log(totalProductsValue);

const studs = [
  {
    name: "Klaus Stender",
    age: 61,
  },
  {
    name: "Tom Torben",
    age: 50,
  },
  {
    name: "Ali Baba",
    age: 12,
  },
  {
    name: "Hosam Enjoyer",
    age: 30,
  },

  {
    name: "Lea Prem",
    age: "dead inside",
  },
];

function readyToPutInTheDOM(arr) {
  arr = arr.map((str) => `\n<h1>${str.name}</h1>\n<h2>${str.age}</h2>\n`);

  return arr.join("");
}

console.log(readyToPutInTheDOM(studs));
