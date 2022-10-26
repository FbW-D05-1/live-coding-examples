const numbers = [4, 9, 2, 1, 5];

function isEven(num) {
  return num % 2 === 0;
}

const filteredNums = numbers.filter(isEven);

console.log(filteredNums);

const shortFilter = numbers.filter((number) => number % 2 === 0);

const oddFilter = numbers.filter((number) => number % 2);

console.log(oddFilter);

//finding undefined
console.log("===================");
const numbers1 = [4, 9, 2, undefined, 1, 5, "a"];

console.log(numbers1);

const undefinedFilter = numbers1.filter((num) => num !== undefined);
const shortUndefinedFilter = numbers1.filter((num) => num);
// const shortUndefinedFilter = numbers1.filter((num) => typeof num == "string");

console.log(undefinedFilter);
console.log(shortUndefinedFilter);

// filtering strings
console.log("===================");

let string = "baba    booey    asuh  a             yayeet";

//regexp
let wordsRegex = string.split(/\W+/).join(" ");
console.log(wordsRegex);

//same with filter
let words = string
  .split(" ")
  .filter((word) => word.length)
  .join(" ");
console.log(words);

const ages = [32, 33, 16, 17, 50];

function checkAdult(age) {
  return age >= 18;
}

const isNotAllowed = ages.filter((age) => !(age >= 18));
const isAllowed = ages.filter(checkAdult);

console.log(isAllowed);
console.log(isNotAllowed);

const words1 = ["spray", "hallo", "Welt", "Giotto", "HelpMePLease"];

// function checkLength(word) {
//   return word.length > 6;
// }

const longer = words1.filter((word) => word.length > 5);
console.log(longer);

const numbers2 = [12, 5, 8, 130, 44];

const filtered = numbers2.filter((n) => {
  return n >= 10;
});

console.log(filtered);

const fruits = ["apple", "orange", "Banana", "mango", "kiwi"];

function filterFruits(arr, query) {
  return arr.filter(
    (element) => element.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
}
console.log(filterFruits(fruits, "an"));
console.log(filterFruits(fruits, "banana"));
console.log(filterFruits(fruits, "na"));
console.log(filterFruits(fruits, "z"));

const obj = {
  name: "Finn da hooman",
  title: "adventurer",
  price: 12,
};

const objArr = Object.entries(obj);
console.log(objArr);

const filteredObj = objArr.filter(([, value]) => typeof value === "string");
console.log(filteredObj);

const justStrings = Object.fromEntries(filteredObj);

console.log(justStrings);

const randomarr2 = [
  ["1", "x"],
  ["2", "y"],
  ["3", "z"],
];

const convertedrandomarr2 = Object.fromEntries(randomarr2);
console.log(convertedrandomarr2);
