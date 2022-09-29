// STRING METHODS
// All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

// LENGTH
const myText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const findLength = myText.length;
// console.log(findLength); //26

// ---------###--------

// POSITION
const myString = "Please locate where 'locate' occurs";
const findPosition = myString.indexOf("locate");
// console.log(findPosition); // 7

const findLastPosition = myString.lastIndexOf("locate");
// console.log(findLastPosition); // 21
// Both indexOf() and lastIndexOf() return -1 if the text is not found
const findMissingElement = myString.indexOf("sun");
// console.log(findMissingElement); //-1
// Both methods accept a second parameter as the starting position for the search
const findPoisitionStartingPoint = myString.indexOf("locate", 15);
// console.log(findPoisitionStartingPoint);
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
// it searches backwords(from the end to the beginning)
const findLastPoisitionStartingPoint = myString.lastIndexOf("locate", 5);
// console.log(findLastPoisitionStartingPoint);

const myString2 = "widget with id";
const findPosition2 = myString2.indexOf("id");

const lastIndexPos = myString2.lastIndexOf("id");

// --------###--------
// INCLUDES

const ifSubstringIncluded = myString2.includes("id");
// console.log(ifSubstringIncluded);

// --------###--------
// EXTRACTING STRING PARTS

// slice()
// It takes 2 parameters: the start position and the end position(end is not included)
const fruits = "Apple, Banana, Kiwi";

const slicedBanana = fruits.slice(7, 13);
// console.log(slicedBanana);
// If you omit the second parameter, the method will slice out the rest of the string.
const sliceWith1Param = fruits.slice(7);
console.log(sliceWith1Param);
// If a parameter is negative, the position is counted from the end of the string.
const negativeSlice = fruits.slice(-13, -7);
console.log(negativeSlice);
// counting from the end
const negativeEnd = fruits.slice(-7);
console.log(negativeEnd);

// ---------####----------
// substring
// substring(){formerly substr()} is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
const substrString = "Apple, Pineapple, Kiwi";
const getSubstring = substrString.substring(5, 9);
console.log(getSubstring);
// If you omit the second parameter, substr() will slice out the rest of the string.
const getSubStr1Param = substrString.substring(7);
console.log(getSubStr1Param);
// If the first parameter is negative, the position counts from the end of the string.
const getNegativeSubStr = substrString.substring(-7);
console.log(getNegativeSubStr);
// -----------####-----------####-----------
// REPLACING THE STRING CONTENT
// replace()
// The replace() method replaces a specified value with another value in a string
const stringToReplace = "It's a lovely lovely outside!";
// console.log(stringToReplace.replace("lovely", "cold"));
// The replace() method does not change the string it is called on. It returns a new string.

// By default, the replace() method replaces only the first match
// By default, the replace() method is case sensitive. Writing LOVELY (with upper-case) will not work.

// To replace case insensitive, use a regular expression with an /i flag (insensitive)
// console.log(stringToReplace.replace(/LOVELY/i, "cold"));

// -----------####-----------####-----------
// CONVERTING TO UPPER CASE & LOWER CASE

// to upper case
const text1 = "Hello World";
const text2 = text1.toUpperCase();
console.log(text2);
// to lower case
const text3 = "HELLO WORLD";
const text4 = text3.toLowerCase();
// const text4 = text3.toLocaleLowerCase();
console.log(text4);
// capitalise only the first letter
const planet = "earth";
const planetCapitalised = planet.charAt(0).toUpperCase() + planet.slice(1);
console.log("First word uppercase", planetCapitalised);
// -----------####-----------####-----------
// trim()
// The trim() method removes whitespace from both sides of a string
const stringToTrim = "    Hello Class FBW32!    ";

const trimmedString = stringToTrim.trim();
console.log("Trimmed String", trimmedString);
// -----------####-----------####-----------
// EXTRACTING STRING CHARACTERS
// charAt()
// The charAt() method returns the character at a specified index (position) in a string
const charAtString = "Hello World";
const extractedChar = charAtString.charAt(6);
console.log("Extracted", extractedChar);
// charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
const charCodeAtString = "Hello World";
const getCharCode = charCodeAtString.charCodeAt(0);
console.log("Char Unicode", getCharCode);
// -----------####-----------####-----------
// CONVERT A STRING TO AN ARRAY
// split()
// A string can be converted to an array with the split() method.
// Arrays are comma separated values. Arrays are mutable.
// This is an array: [1, 2, 3, "abcd", true, null, undefined]
const txt1 = "It is a beautiful day today!";
console.log(txt1.split("t"));

const txt2 = "1a1b1c1d1e1f";
console.log(txt2.split("1"));

const txt4 = "abc-def-ghi";

const txt5 = "a b c d e";

console.log(txt5.split(" "));

const txt6 = "Hello Class 'FBW05'";
console.log(txt6.split(""));
console.log(txt6.split(","));
