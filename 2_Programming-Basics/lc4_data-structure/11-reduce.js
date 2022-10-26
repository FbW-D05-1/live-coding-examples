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
