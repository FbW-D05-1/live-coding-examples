// Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.
// Math works with the Number type. It doesn't work with BigInt.

// Rounding up with `Math.ceil()`
// - Rounding down with `Math.floor()`
// - Getting random numbers with `Math.random()`
// - Maximum and minimum with `Math.max()`, `Math.min()`

// Math.ceil()
// The Math.ceil() function always rounds a number up to the next largest integer.
// Math.ceil(null) returns integer 0 and does not give a NaN error.
console.log(Math.ceil(0.95)); //1
console.log(Math.ceil(4)); //4
console.log(Math.ceil(7.004)); // 8
console.log(Math.ceil(-0.95)); // -0
console.log(Math.ceil(-4)); // -4
console.log(Math.ceil(-7.004)); // -7
// ------------------ //

// Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number.

// ------------------ //
console.log(Math.floor(0.95)); // 0
console.log(Math.floor(45.95)); //45
console.log(Math.floor(45.05)); //45
console.log(Math.floor(4)); //4
console.log(Math.floor(-45.05)); //-46
console.log(Math.floor(-45.95)); //-46

// Math.random()

// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.
// It cannot be chosen or reset by the user.

// ------------------ //

console.log(Math.random());

// Math.max()

// The Math.max() function returns the largest of the zero or more numbers given as input parameters.

// ------------------ //
console.log(Math.max(10, 20)); //20
console.log(Math.max(-10, -20)); //-10

// Math.min()

// The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.

console.log(Math.min(2, 3, 1)); //1

console.log(Math.min(-2, -3, -1)); // -3
