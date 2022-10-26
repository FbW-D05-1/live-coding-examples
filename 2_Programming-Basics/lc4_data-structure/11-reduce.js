// https://javascript.info/array-methods

// The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

// When we need to iterate over an array – we can use forEach, for or for..of.

// When we need to iterate and return the data for each element – we can use map.

// The methods 'arr.reduce' and 'arr.reduceRight' are used to calculate a single value based on the array.

// The syntax is:

// const value = arr.reduce(function(previousValue, item, index, array) {
//   // ...
// }, initial);

// Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.

const numbers = [1, 2, 3, 4];

const sumReducer = (acc, cur) => acc + cur;
const sum = numbers.reduce(sumReducer, 5);
console.log(sum);

const rightWay = numbers.reduce((acc, cur) => acc + cur, 5);
console.log(rightWay);

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((sum, current) => sum + current, 10);
console.log(result);

const findArr = [20, 10, 50, 100, 20, 3];

let findBigBoy = findArr.reduce((acc, cur) => (acc > cur ? acc : cur));
let findBigWithMax = findArr.reduce((acc, cur) => Math.max(acc, cur));
console.log(findBigBoy);

// const findMax = (acc, cur) => {
//   if (cur > acc) {
//     acc = cur;
//   }
//   return acc;
// };

const products = [
  { name: "Rice", price: 5 },
  { name: "Tv", price: 500 },
  { name: "Chicken", price: 20 },
  { name: "Döner", price: 60 },
  { name: "Hosam", price: 2 },
];

const reducedPrice = products.reduce((total, product) => {
  console.log(`Total: ${total}`);
  console.log(`productPrice: ${product.price}`);
  return total + product.price;
}, 0);

console.log(reducedPrice);

const people = [
  { name: "Micha", age: 35 },
  { name: "Ali", age: 26 },
  { name: "Hosam", age: 52 },
  { name: "Sidar", age: 52 },
  { name: "Ari", age: 26 },
  { name: "Arasdi" },
];

const groupedByAge = people.reduce((groupedPeople, person) => {
  const age = person.age;
  //groupedPeople.person.age
  if (groupedPeople[age] == null) groupedPeople[age] = [];

  groupedPeople[age].push(person);
  return groupedPeople;
}, {});

console.log(groupedByAge);

const input = [1, -4, 12, 0, -3, 29, -150];

input.filter((num) => num > 0).reduce((acc, cur) => acc + cur, 0);

const resul1t = input
  .filter(function (num) {
    return num > 0;
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

console.log(resul1t);
