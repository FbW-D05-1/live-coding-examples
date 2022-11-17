// The setTimeout() is a method of the window object. The setTimeout() sets a timer and executes a callback function after the timer expires.

// functions like setTimeout and setInterval are not part of the ECMAScript specs or any JavaScript engine implementations. Timer functions are implemented by browsers and their implementations will be different among different browsers. Timers are also implemented natively by the Node.js runtime itself.

// syntax of setTimeout():
// let timeoutID  = setTimeout(cb [,delay], arg1, arg2,...);
// cb is a callback function to be executed after the timer expires.
// delay is the time in milliseconds that the timer should wait before executing the callback function.  If you omit it, the delay defaults to 0.
// arg1, arg2, … are arguments passed to the cb callback function.

function greet() {
  console.log("Howdy!");
}
setTimeout(greet, 2000);

// ---------##---------

function makeTalk(animal) {
  const noises = {
    cat: "purr",
    dog: "woof",
    cow: "moo",
    pig: "oink",
  };

  console.log(`A ${animal} goes ${noises[animal]}.`);
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const animals = ["cat", "dog", "cow", "pig"];
const randomAnimal = getRandom(animals);

setTimeout(() => {
  makeTalk(randomAnimal);
}, 1000);

// or

setTimeout(makeTalk, 1000, randomAnimal);

// this doesn’t work in IE9 or below, where the parameters come through as undefined. If you’re in the unenviable position of having to support IE9, there is a polyfill available on MDN.
// https://www.sitepoint.com/javascript-settimeout-function-examples/

// ---------##---------

// One potential caveat to be aware of is the fact that setTimeout is asynchronous. It queues the function reference it receives to run once the current call stack has finished executing. It doesn’t, however, execute concurrently, or on a separate thread (due to JavaScript’s single-threaded nature).

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);

// Outputs: 1, 3, 2
