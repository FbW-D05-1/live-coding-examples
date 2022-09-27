//String
const myString = "It is a beautiful day!";

console.log(myString);
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);

//length
//dot notation
console.log(myString.length);
console.log(myString.toUpperCase());

//Numbers
// 1. Integer
// 2. Float
// 3. + Infinity
// 4. - Infinity
// 5. NaN = Not a Number

const myNum = 50; // int = integer
console.log(myNum);
const numTwo = 2.2252222523151222222222233333331213; // float
console.log(numTwo);
console.log(myNum * Infinity); //Infinity
console.log(myNum / Infinity); // 0

// Booleans

const boolOne = true; // true boolean
const boolTwo = false; // false boolean

let x, y, z, random, bababooey;

console.log(boolOne);
console.log(Boolean(boolTwo));
console.log(Boolean(myNum));
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean(bababooey));
console.log(Boolean(false));
console.log(Boolean("false"));

console.log(Boolean(NaN));
console.log(Boolean(null));

// Undefined values

let profilePic;
console.log(profilePic);

// Null: nothing, empty, unkown value, empty object
const age = null;
const emptyString = null;
console.log(age);
console.log(emptyString);

// typeof operator
console.log(typeof boolOne); //boolean
console.log(typeof true); //boolean
console.log(typeof "true"); //string
console.log(typeof "1"); //string
console.log(typeof 1); //number
console.log(typeof undefined); //undefined
console.log(typeof profilePic); //undefined

//big Int

console.log(typeof 1n);
