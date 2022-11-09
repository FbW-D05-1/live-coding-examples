// A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.

// A function that accepts other functions as arguments is called a higher-order function,
// which contains the logic for when the callback function gets executed.

// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.

// ---------------------------------------------- //
// WHY WE NEED CALLBACK FUNCTIONS
function first() {
  console.log(1);
}
function second() {
  console.log(2);
}
second();
first();

// function firstFunc() {
//   setTimeout(function () {
//     console.log(2);
//   }, 500);
// }
function secondFunc() {
  console.log(3);
}
// firstFunc();
secondFunc();

// It’s not that JavaScript didn’t execute our functions in the order we wanted it to,
// it’s instead that JavaScript didn’t wait for a response from first() before moving on to execute second().

// you can’t just call one function after another and hope they execute in the right order.
// Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

// ----------------------------

function caller(func) {
  console.log("I accept a function and then call it");
  func();

  return console.log(1);
}

function callback() {
  console.log("I am a callback function");
}

caller(callback);

const funcToBeCalled = (name) => {
  console.log("I was called by", name);
};

const funcWithCallback = (callback) => {
  console.log("I'm funcWithCallback");
  callback("Ali");
};

funcWithCallback(funcToBeCalled);

funcToBeCalled("Hosam");
//1
setTimeout(funcToBeCalled, 1000);

//2
setTimeout(function () {
  console.log("set timeout");
  funcToBeCalled("HotPink");
}, 2000);

const wrapSetTimeout = (callback) => {
  console.log("I am wrapped SetTimout");

  setTimeout(() => {
    console.log("set Timout nested");
    funcToBeCalled("Marcel");
  }, 1500);
};
wrapSetTimeout(funcToBeCalled);

//function erstellen
const callMeBaby = () => console.log(`One more time`);
//func als parameter
const callingYouBaby = (callback) =>
  console.log(`Hello fellow programmers`) + callback();

callingYouBaby(callMeBaby);
//clg und callback als return
