// https://javascript.info/array-methods

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

// filter() does not execute the function for array elements without values.

// filter() does not change the original array.

const numbers = [1, 2, 3, 4, 5];

const oddNumbers = numbers.filter((num) => num % 2 === 0);

console.log(oddNumbers); // [2, 4]

// The filter function took a function which will return true if a number is even.
// The filter() “filters” the input array based on whether the element is true or false.

// ------------------------------ //

const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

const isAllowed = ages.filter(checkAdult);

console.log(isAllowed); // [ 32, 33, 40 ]

// ------------------------------ //

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]

// ------------------------------ //

// 1.
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filtered); // [ 12, 130, 44 ]

// 2.
const filtered2 = [12, 5, 8, 130, 44].filter((value) => value >= 10);

console.log(filtered2); // [ 12, 130, 44 ]

// ------------------------------ //

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(
    (element) => element.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
console.log(filterItems(fruits, "z")); // []

// ------------------------------ //
