// A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
// Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

const user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};

// The last property in the list may end with a comma. That is called a "TRAILING" or “HANGING” comma. Makes it easier to add/remove/move around properties,
// because all lines become alike.

// dot notation
user.isAdmin = true;
console.log(user);

// objects are mutable
delete user.age;
console.log(user);

// bracket notation
// For multiword properties, the dot access doesn’t work: user.likes birds = true

const user2 = {
  "first name": "John",
  age: 30,
  "likes birds": true,
};

const user3 = {};

//set
user3["likes birds"] = true;

console.log(user3);

//delete

delete user3["likes birds"];

console.log(user3);

// ----------------//---------------- //
// We can use square brackets in an object literal. That’s called COMPUTED PROPERTIES.
const fruit = "kiwi";

const fruitBucket = {
  [fruit]: 5,
};
console.log(fruitBucket);
// OR
// const fruits = "apple";

// const bag = {
//   [fruits + "Computers"]: 5,
//   3: "string", //don't
// };

// console.log(bag[fruits + "Computers"]);
// console.log(bag.appleComputers);
// console.log(bag);

// ---------##---------
// Reserved words are allowed as property names
//DONT DO THIS
const obj = {
  for: 1,
  const: 2,
  return: 3,
};
console.log(obj.for + obj.const + obj.return);
// ---------##---------
// Comparing Objects:

const personA = {
  name: {
    first_name: "Hosam",
    last_name: "Henjoyer",
  },
  age: 17,
  adress: {
    strNum: 8008,
    strName: "Abc",
    pinCode: 1337,
    country: "Madagascar",
  },
  companiesWorkedWith: {
    name: "dci",
    duration: "2years",
    year: 2023,
  },
};

console.log(personA.adress.country);
console.log(personA.companiesWorkedWith.year);

const personB = {
  name: {
    first_name: "Sponge",
    last_name: "Bob",
  },
  age: 17,
  adress: {
    strNum: 69, //nice
    strName: "Pineapple str.",
    pinCode: 42069, // very nice
    country: "Bikini Bottom",
  },
  companiesWorkedWith: {
    name: "Krusty Krab",
    duration: 20,
    year: 1970,
  },
};

// Find a function in lodash that will return true when comparing the two objects
console.log(personA === personB); // false

console.log(personA.age === personB.age); // true

// ---------##---------
// In real code we often use existing variables as values for property names.

// Property value shorthand
// properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
// Instead of name:name we can just write name, like this:

function createUser(name, age, isAdmin = false) {
  return {
    // property value shorthand
    name, // same as name: placeholder name
    age, // same as age: placeholder age
    isAdmin,
  };
}

const user4 = createUser("John", 30);
console.log(user4);
console.log(user4.age);

const user5 = createUser("Ketty", 66);
console.log(user5);
const user6 = createUser("Baba");
console.log(user6);

// ---------##---------
// Property existence test, “in” operator
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!
// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

const user7 = { name: "hojng", age: 30, noSuchProperty: "srabndm" };

console.log(user7.name === undefined);

// There’s also a special operator "in" for that.
// The syntax is:   "key" in object

console.log("age" in user7);
console.log("blabla" in user);

// ---------##---------

// Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

const personC = {
  name: {
    first_name: "Sponge",
    last_name: "Bob",
  },
  age: 17,
  address: {
    strNum: 69, //nice
    strName: "Pineapple str.",
    pinCode: 42069, // very nice
    country: "Bikini Bottom",
  },
  companiesWorkedWith: {
    name: "Krusty Krab",
    duration: 20,
    year: 1970,
  },
};

console.log("here", Object.keys(personC));
// accessing the keys of the nested object called address:
console.log(Object.keys(personC.companiesWorkedWith));

// ---------##---------
// Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values
console.log(Object.values(personC));
// accessing the values of the nested object called address:
console.log(Object.values(personC.address));
// ---------##---------
// Object.entries creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.

const fruits = ["apple", "orange", "pear"];
const entries = Object.entries(fruits);
console.log(entries);
// If you use Object.entries you might want to destructure the array into its key and property.
for (const [count, fruit] of entries) {
  console.log(`There are ${count} ${fruit}s`);
}
// Result
// There are 28 apples
// There are 17 oranges
// There are 54 pears
