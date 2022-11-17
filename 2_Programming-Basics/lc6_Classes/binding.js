// Function binding

// Problem: When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".

// ---------##---------
// Code executed by setTimeout is run in a separate execution context to the function from which it was called. This is problematic when the context of the this keyword is important:

const dog = {
  sound: "woof",
  bark() {
    console.log(`Rover says ${this.sound}!`);
  },
};

// The reason for this output is that, in the first function call, this points to the dog object:
dog.bark(); // Rover says woof!

// whilst in the second example this points to the global window object (which doesn’t have a sound property).
setTimeout(dog.bark, 50); // Rover says undefined!

// measure to correct this problem:

// You can do this using bind, a method which creates a new function that, when called, has its this keyword set to the provided value (in our case, the dog object). This would give us:

setTimeout(dog.bark.bind(dog), 50); // Rover says woof!

// ---------##---------
// arrow functions and lexical scope:

// You can, of course, use arrow function with setTimeout, but there’s one gotcha to be aware of — namely, that arrow functions don’t have their own 'this' value. Instead, they use the 'this' value of the enclosing lexical context.

// 1.
const dog2 = {
  sound: "woof",
  bark() {
    console.log(`Rover-2 says ${this.sound}!`);
  },
};

dog2.bark(); // Rover says woof!

// 2.
const dog3 = {
  sound: "woof",
  bark: () => {
    console.log(`Rover-3 says ${this.sound}!`);
  },
};

dog3.bark(); // Rover-3 says undefined!

// In the second example, this points to the global window object (which again, doesn’t have a sound property).

setTimeout(dog3.bark.bind(dog3), 5000); // Rover-3 says undefined!

// Here bind() also won’t work when using an arrow function in the introduce method, as the arrow function doesn’t have its own this value. The method will still log undefined.

// ---------##---------

// However, because arrow functions don’t have their own this value, it can also work to our advantage.

// 1.
const dog4 = {
  sound: "woof",
  delayedBark() {
    setTimeout(
      function () {
        console.log(`Rover4 says ${this.sound}!`);
      }.bind(this),
      1000
    );
  },
};

dog4.delayedBark(); // Rover4 says woof!

// It can be rewritten more concisely with an arrow function:

// 2.
const dog5 = {
  sound: "woof",
  delayedBark() {
    setTimeout(() => {
      console.log(`Rover5 says ${this.sound}!`);
    }, 1000);
  },
};

dog5.delayedBark();

// read more about arrow functions here:
// https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

// ---------##---------

// Once a method is passed somewhere separately from the object – 'this' is lost:

const user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

setTimeout(user.sayHi, 1000); // Hello, undefined!

// That’s because setTimeout got the function user.sayHi, separately from the object. The last line can be rewritten as:

const f = user.sayHi;
setTimeout(f, 1000); // lost user context  // Hello, undefined!

// solutions:
// 1.
setTimeout(function () {
  user.sayHi(); // Hello, John!
}, 1000);

// Now it works, because it receives user from the outer lexical environment, and then calls the method normally.

// 2.
const sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// In the line (*) we take the method user.sayHi and bind it to user. The sayHi is a “bound” function, that can be called alone or passed to setTimeout – doesn’t matter, the context will be right.

// ---------##---------

const user2 = {
  firstName: "John",
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}!`);
  },
};

const say = user2.say.bind(user2);

say("Hello"); // Hello, John ("Hello" argument is passed to say)
say("Bye"); // Bye, John ("Bye" is passed to say)

//hello
