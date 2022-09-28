console.log("1" > 2);

//to string

const myNum = 20;
const coersedNum = String(myNum);
console.log(myNum);
console.log(coersedNum);
console.log(coersedNum === myNum);

// to Number
// const myString = +"20";
const myString = "20";
console.log(typeof myString);
const coersedString = Number(myString);
console.log(typeof coersedString);

// const myString = +"sadd";
// console.log("NAN her", myString);
// console.log(typeof myString);
// const coersedString = Number(myString);
// console.log("HERE", typeof coersedString);
// console.log(coersedString);

// to Boolean
const myNum2 = 0;
const coersedNum2 = Boolean(myNum2);
console.log(typeof coersedNum2);
console.log(coersedNum2);
