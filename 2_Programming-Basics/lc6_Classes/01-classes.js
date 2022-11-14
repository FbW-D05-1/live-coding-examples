// the concept of class was introduced in ECMA2015.
// Internally a class is a wrapper over prototype based inheritance(methods and properties).

// constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.
// class is a syntactical sugar over prototype based object oriented programming.
// It also gives you a better encapsulation of data and methods in the same code block since all the data and methods are defined in the same code block.

// class syntax is more comparable to similar features available in Java and C++

// The basic syntax is:

// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
// }

// Then use new MyClass() to create a new object with all the listed methods.

// The constructor() method is called automatically by new, so we can initialize the object there.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  superWelcome() {
    console.log("Welcome", this.name);
    console.log(`You're ${this.age} years old`);
  }
}

class Student extends Person {
  constructor(name, age, grading) {
    super(name, age);
    this.grading = grading;
  }
  welcome() {
    // console.log("Welcome", this.name);
    // console.log(`You're ${this.age} years old`);
    super.superWelcome();
    console.log("Your grading is", this.grading);
  }
}

class Teacher extends Person {
  constructor(name, age, classSize) {
    super(name, age);
    this.classSize = classSize;
  }
  welcome = () => {
    // console.log("Hey", this.name);
    // console.log(`du bist ${this.age}, was scheiße alt is`);
    super.superWelcome();
    console.log("deine klasse hasst dich", this.classSize);
  };
}

let ari = new Teacher("Ari", 69, 42);
ari.welcome();

let hosam = new Student("Hosam", 13, 6);
console.log(hosam);
hosam.welcome();

// let Sidar = new Person("Sidar", 20);

// Sidar.welcome();

class User {
  constructor(name) {
    this.name = name;
  }

  isThisYou() {
    console.log(`This is you ${this.name}. giggidy`);
    console.log(typeof constructor); // function aswell
  }
}
let quagmire = new User("Quagmire");
quagmire.isThisYou();

// When new User("Quagmire") is called:
// 1. A new object is created.
// 2. The constructor runs with the given argument and assigns this.name to it.
// Then we can call object methods, such as user.sayHi().

// -------##-------

// What class User {...} construct really does is:
// 1. Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// 2. Stores class methods, such as isThisYou, in User.prototype.

// After new User object is created, when we call its method, it’s taken from the prototype. So the object has access to class methods.

// In JavaScript, a class is a kind of function.
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.isThisYou); // [Function: isThisYou]

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'isThisYou' ]

// -------##-------

// Class Expression

// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.
// Similar to Named Function Expressions, class expressions may have a name.

// If a class expression has a name, it’s visible inside the class only:

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
const User3 = class MyClass {
  sayHi() {
    console.log(MyClass); // MyClass name is visible only inside the class
  }
};

new User3().sayHi(); // [Function: MyClass] // works, shows MyClass definition

// console.log(MyClass);     // error, MyClass name isn't visible outside of the class

// We can even make classes dynamically “on-demand”, like this:
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// Create a new class
const User4 = makeClass("Hello");

new User4().sayHi(); // Hello

// -------##-------
// console.clear();
console.log("==================================");
// Ein Objekt kann sich auf verschiedene Weise unterscheiden, und jede realisierte Variante dieses Objekts ist eine Instanz.
// Das Erstellen einer realisierten Instanz wird als Instanziierung bezeichnet. In der Informatik kann eine Instanz die Form eines Dokumenttyps oder eines Elements annehmen.

class Vehicle {
  constructor(type, speed) {
    this.type = type;
    this.speed = speed;
  }
  superMove() {
    console.log(this.type, this.speed, "moved");
  }
  stop() {
    console.log(this.type, this.speed, "stop");
  }
  // static: when I want to call directly on the vehicle class.
  // Static wird benutzt, wenn die Methode oder Struktur ohne dazugehoeriges Objekt aufgerufen werden kann
  static info() {
    return console.log("Vehicle is a base vehicle class");
  }
  // A static function is not callable from any compilation unit other than the one it is in.
  // Remove the static keyword, and the function will be callable from any compilation unit, so your program will link.
}

const rustyCar = new Vehicle("Dacia", 5);

rustyCar.superMove();
rustyCar.stop();
// rustyCar.info(); // Pseudo class-scoped. Nur innerhalb der Klasse "sichtbar". Siehe obere Kommentare zu "static".
Vehicle.info();

console.log("==================================");

class Car extends Vehicle {
  constructor(type, speed) {
    super(type, speed);
    this.nitro = false;
  }
  emergencyBoost() {
    this.nitro = true;
    console.log(this.type, this.speed, this.nitro);
    super.superMove();
  }
}

const BMW = new Car("E45", 100);

BMW.emergencyBoost();

class Random {
  constructor(name) {
    this.name = name;
  }
  hi() {
    console.log(this.name);
  }
}

const test = new Random();
const test2 = new Random();

console.log(test === test2);
