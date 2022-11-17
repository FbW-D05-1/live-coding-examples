const newObj = {
  hallo: "world",
  123: "4 5 6",
  myFunction: function () {
    console.log("hello world");
  },
};

console.log(newObj[123]);

// Callback von myFunction
newObj.myFunction();

const obj = {
  name: "Arii",
  age: 26,
  method: function () {
    console.log(`${obj.name} ${this.age}`);
  },
};
obj.method();

const marcelsGreeting = {
  name: "Marcel",

  sayHello: function () {
    console.log(`Hello ${marcelsGreeting.name}`);
  },
  sayGoodbay: function () {
    console.log(`bay ${marcelsGreeting.name}`);
  },
};

marcelsGreeting.sayHello();

const personOne = {
  name: "Etienne",
  yearOfBirth: 1995,
  /** calculates the persons age from their year*/
  age() {
    const today = new Date();
    const year = today.getFullYear();
    const age = year - this.yearOfBirth;
    return console.log(age);
  },
  af: function () {},
  ad: () => {},
};

personOne.age();

// create a person object
// give it a firstName, lastName and id
// create a method that returns persons first and last name
const person = {
  firstName: "Tom",
  lastName: "Smith",
  id: 29,
  zB() {
    return console.log(person.firstName, person.lastName);
  },
};

// create a user object
// give it a name and age
// create a method that returns users name

const user = {
  name: "Derya",
  age: 43,
  getName() {
    return console.log(user.name);
  },
};

// ---------##---------

// Other Methods we already used
// console.log;
// Math.max;
// String.prototype.toLowerCase;
// String.prototype.includes;
// Number.prototype.toFixed;
// Boolean.prototype.valueOf;
// Array.prototype.join;
// Object.prototype.hasOwnProperty;

// ---------##---------

// Object.keys()
// Object.values()
// Object.entries()
// Object.assign()
// Object.freeze()
// Object.seal()
// Object.getPrototypeOf()
// Object.create()
