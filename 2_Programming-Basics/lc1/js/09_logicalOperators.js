//LOGICAL OPERATORS
// && - and
// || - or
// ! - not

const firstVar = 10;
const secondVar = 20;

console.log(firstVar < secondVar && firstVar == secondVar);
console.log(firstVar < secondVar || firstVar == secondVar);

console.log(firstVar < secondVar); // true
console.log(!(firstVar < secondVar)); //false
console.log(!(firstVar > secondVar)); //true

const thridVar = 20;

console.log(
  (firstVar > secondVar && firstVar == secondVar) || secondVar === thridVar
); // true
