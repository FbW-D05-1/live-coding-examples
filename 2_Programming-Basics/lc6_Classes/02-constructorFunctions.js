//GOD WHY??????????
// Constructor vs Object Literal

// An object literal is typically used to create a single object whereas a constructor is useful for creating multiple objects:

// //Object literal
// let user = {
//     name: 'Bob'
// }

// //Constructor
// function User() {
//     this.name = 'Bob';
// }

// var user1 = new User();
// var user2 = new User();

// Each object created using a constructor is unique. Properties can be added or removed from an object without affecting another one created using the same constructor. However, if an object is built using an object literal, any changes made to the variable that is assigned the object value will change the original object.

// The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.
// That can be done using constructor functions and the "new" operator.

// Constructor functions technically are regular functions. There are two conventions though:
// 1. They are named with capital letter first.
// 2. They should be executed only with "new" operator.

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

const user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false

// -------##-------

// When a function is executed with new, it does the following steps:
// 1. A new empty object is created and assigned to this.
// 2. The function body executes. Usually it modifies this, adds new properties to it.
// 3. The value of this is returned.

// In other words, new User(...) does something like:
function User2(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// So let user = new User("Jack") gives the same result as:

// let user = {
//     name: "Jack",
//     isAdmin: false
// };

// Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.

// That’s the main purpose of constructors – to implement reusable object creation code.

// Let’s note once again – technically, any function can be used as a constructor. That is: any function can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.

// -------##-------
// Return from constructors

// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:
// 1. If return is called with an object, then the object is returned instead of this.
// 2. If return is called with a primitive, it’s ignored.

// In other words, return with an object returns that object, in all other cases this is returned.

// For instance, here return overrides this by returning an object:

function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- returns this object
}

console.log(new BigUser().name); // Godzilla, got that object

// And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):
function SmallUser() {
  this.name = "John";

  return; // <-- returns this
}

console.log(new SmallUser().name); // John

// -------##-------
// Methods in constructor

// Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

// Of course, we can add to this not only properties, but methods as well.

// For instance, new User(name) below creates an object with the given name and the method sayHi:

function User3(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}

const johnna = new User3("Johnna");

johnna.sayHi(); // My name is: Johnna

/*
  johnna = {
     name: "johnna",
     sayHi: function() { ... }
  }
  */

// -------##-------

function Vehicle(type, speed) {
  this.type = type;
  this.speed = speed;
  this.move = function () {
    console.log(`I am a ${this.type} and I am moving at ${this.speed}.`);
  };

  this.stop = function () {
    console.log(`I am a ${this.type} and I have stopped moving.`);
  };

  console.log(`A new ${type} is created.`);
}

console.log(Vehicle); // [Function: Vehicle]

Vehicle.viper = function () {
  console.log(`vipre is running!`);
};

const car = new Vehicle("car", 80); // A new car is created.
console.log(car); // Vehicle { type: 'car', speed: 80, move: [Function] }
car.move(); // I am a car and I am moving at 80.
// because of the new operator 'this' binds to the newly created instance of Vehicle, that is car.

const bus = new Vehicle("bus", 100); // A new bus is created.
console.log(bus); // Vehicle { type: 'bus', speed: 100, move: [Function] }
bus.move(); // I am a bus and I am moving at 100.

const truck = new Vehicle("truck", 200); // TA new truck is created.
console.log(truck); // Vehicle { type: 'truck', speed: 200, move: [Function] }
truck.move(); // I am a truck and I am moving at 200.

car.stop(); // I am a car and I have stopped moving.
