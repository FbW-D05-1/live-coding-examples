// NUMBERS
// More ways to write a number:
// In JavaScript, we shorten a number by appending the letter "e" to the number and specifying the zeroes count:
// In other words, "e" multiplies the number by 1 with the given zeroes count.

const billion = 1e9;

console.log(1.23e6);

// Now const’s write something very small. Say, 1 microsecond (one millionth of a second): 0.000001

const microSecond = 1e-6;
console.log(microSecond);
// If we count the zeroes in 0.000001, there are 6 of them. So naturally it’s 1e-6.

//----------------####---------------
// toFixed()
const sum = 0.1 + 0.2;
console.log(sum);

const fixSum = sum.toFixed(4);
console.log(fixSum);

// toFixed always returns a string
console.log(typeof fixSum);

//----------------####---------------
// Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// NaN represents an error.
// They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:
// 1. isNaN(value) converts its argument to a number and then tests it for being NaN:
console.log(isNaN(NaN));
console.log(isNaN("str"));
console.log("String nr", isNaN("15"));
// The value NaN is unique in that it does not equal anything, including itself:
console.log(NaN === NaN);
// but...

console.log(typeof NaN);

// 2. isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:
console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, cause of special value: NaN
console.log(isFinite(Infinity)); //false
//----------------####---------------
// parseInt and parseFloat

console.log(typeof "100px");

// But in real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.
// parseInt() and parseFloat() “read” a number from a string until they can’t.
// The function parseInt returns an integer, whilst parseFloat will return a floating-point number:
console.log(parseInt("100px"));
console.log(parseFloat("12.5em"));
// There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:
console.log(parseInt("$123"));
