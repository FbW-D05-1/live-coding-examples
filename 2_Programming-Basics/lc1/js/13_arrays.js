// ARRAYS
// Arrays are ordered collection, where we have a 1st, a 2nd, a 3rd element and so on.
// They are comma separated values.
// They are mutable.

// Declaration:
// There are two syntaxes for creating an empty array:

const arr = new Array();
console.log(arr);
const arr2 = [];

let fruits = [];
let random = "sdsad";
console.log(typeof fruits);
console.log(Array.isArray(fruits));

fruits = ["Apple", "Orange", "Banana", "Melon", "Lemon"];

const ayo = ["🥵", "😂", "🧑‍🦼", "\u{1F984}"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

//-----------------####----------------

// We can replace an element:

console.log(fruits[0]);

fruits[0] = "Cherry";

// console.log(fruits);

// …Or add a new one to the array:
fruits = "Grapes";
console.log(fruits);

// deleting values
// Since arrays are objects the elements are stored as values and indexes are keys.
// delete obj.key removes a value by the key.

//-----------------####----------------

// mix of values
const mixtureOfData = [
  "Apple",
  { name: "John" },
  true,
  69,
  function () {
    console.log("hello");
  },
];
console.log(mixtureOfData);

console.log(mixtureOfData[1].name);

// get the object at index 1 and then show its name

// get the function at index 3 and run it

//-----------------####----------------####------------------
// Array Methods
// methods that add and remove items from the beginning or the end: push(), pop(), shift(), unshift().
console.log("====================================================");
const fruits2 = ["Apple", "Orange", "Banana", "Melon", "Lemon"];
console.log(fruits2);
// pop() and push() work with the end of the array.
// pop(): extracts the last element of an array and returns it.
fruits2.pop();
console.log(fruits2);

// ------##------
// push(): append the element to the end of the array.
fruits2.push("Grapes");
// fruits2.push("Grapes", "Eti");
console.log(fruits2);

// ------------##----------------
// shift(): extracts the first element of the array and returns it.
const shiftedItem = fruits2.shift();
console.log("Array after shift(): ", fruits2);

console.log("Shifted Item: ", shiftedItem);
// console.log(typeof shiftedItem);

console.log("====================================================");
// ------##------
// unshift(): add element to the beginning of the array.

fruits2.unshift("Lemon", "Mango");

console.log(fruits2);

// A QUEUE is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// Arrays support both operations.
// In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

// ------##------

// There’s another use case for arrays – the data structure named STACK.

// It supports two operations:
// push adds an element to the end.
// pop takes an element from the end.
// So new elements are added or taken always from the “end”.

// ------------##----------------
// Since arrays are objects the elements are stored as values and indexes are keys.
// delete obj.key removes a value by the key.
console.log("====================================================");
// splice()
const greeting = ["Have", "a", "nice", "day!"];

greeting.splice(0, 1);
console.log("HAVE HAS BEEN REMOVED", greeting);

greeting.splice(0, 2);
console.log("here", greeting);

console.log("====================================================");

const greeting2 = ["Have", "a", "nice", "day!"];

// remove first 3 elements and replace them with another.
const removedElements = greeting2.splice(0, 3, "It's", "a", "beautiful");
console.log(greeting2);

// splice returns the array of removed elements:
console.log(removedElements);

// Now we can use push() to add items to array removedElements.
removedElements.push("evening!");
console.log("Pushed into my new Array", removedElements);

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
console.log("====================================================");
const statement1 = ["We", "are", "learning", "the", "language", "JavaScript"];

statement1.splice(4, 0, "programing");
console.log(statement1);

// In array methods negative indexes are allowed.
// They specify the position from the end of the array

const numbersArr = [1, 2, 5];
// from index -1 (one step from the end) delete 0 elements,then insert 3 and 4
numbersArr.splice(-1, 0, 3, 4);
console.log(numbersArr);
// ------------##----------------

// slice()
console.log("====================================================");
const numbersArr2 = [0, 1, 2, 3, 4, 5, 6];
const slicedElements = numbersArr2.slice(0, 3);
console.log("sliced elements", numbersArr2);
console.log(slicedElements);

// ------------##----------------
// concat()
// concat() creates a new array that includes values from other arrays and additional items.
// It accepts any number of arguments – either arrays or values.
console.log("====================================================");
const numbersArr3 = [1, 2];
const concatNumbers = numbersArr3.concat([3, 4]);
console.log(concatNumbers);
// numbersArr3.push([3, 4, 5, [6, 7]], [4, 6]);
console.log(numbersArr3);

let concat2Arrays = numbersArr3.concat([3, 4], [5, 6]);
console.log(concat2Arrays);

const concatStringToArrays = numbersArr3.concat([3, 4], "Hello", "hola");
console.log(concatStringToArrays);
// arrays are mutable

const testArray1 = ["hello"];
const testArray2 = ["world"];

// ------------##----------------
// reverse()
// The method reverse reverses the order of elements in arr.
console.log("====================================================");
const aNewArray = [1, 2, 3, 4, 5];
aNewArray.reverse();
console.log(aNewArray);

// indexOf()
const anotherArray = ["hello", "world", 2, 5];
console.log(anotherArray.indexOf("hello"));

// includes()
console.log(anotherArray.includes("hello")); //true

// // join turns an array into a string
const newVariable = anotherArray.join("-");
console.log(newVariable);
console.log(typeof newVariable);

// let converToNum = Number(newVariable);
// console.log(converToNum);
// console.log(typeof converToNum);

console.log("====================================================");
// ---------###--------
// sort()
const newNumArray2 = [2, 1, 4, 5, 15, 100, 11, 216, 360, 69];
newNumArray2.sort();

console.log(newNumArray2);

const sortingFruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Abc",
  "Bababooey",
];
let sortedFruits = sortingFruits.sort();
console.log(sortedFruits);

const newArray3 = [1, 2, 15, -436243, "string", "abc"];
newArray3.sort();
console.log(newArray3);

// ----------------####----------------

// toString()

const studs = ["Ali", "Lina", "Klaus", "Melon", "Hosam"];
console.log(studs);
console.log(Array.isArray(studs));

const arrayToStrings = studs.toString();
console.log(arrayToStrings);
console.log(Array.isArray(arrayToStrings));
console.log(typeof arrayToStrings);

console.log(studs[3]); // Melon
console.log(arrayToStrings[0]); //,
