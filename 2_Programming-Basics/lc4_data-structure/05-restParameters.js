// Many JavaScript built-in functions support an arbitrary number of arguments.

// A function can be called with any number of arguments, no matter how it is defined.

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5)); // 3
// There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.

// ---------------------------------------------- //

// The rest parameters can be mentioned in a function definition with three dots '...'. They literally mean “gather the remaining parameters into an array”.

function sumAll2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(args);
  return sum;
}

console.log(sumAll2(1)); // 1
console.log(sumAll2(1, 2)); // 3
console.log(sumAll2(1, 2, 3)); // 6
console.log(sumAll2(1, 2, 5, 6, 2, 4, 5)); // 25

// ---------------------------------------------- //

// We can choose to get the first parameters as variables, and gather only the rest.

// The rest parameters must be at the end
// function showName(...titles, firstName, lastName) { }  // SyntaxError: Rest parameter must be last formal parameter
// function showName(firstName, ...titles, lastName) { }  // SyntaxError: Rest parameter must be last formal parameter

// Here the first two arguments go into variables and the rest go into titles array:

function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles); // [ 'Consul', 'Imperator' ]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

// ---------------------------------------------- //

// !!!The rest parameters must be at the end

// The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:
// function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
//     // error
// }

// The ...rest must always be last.

// ---------------------------------------------- //

// ARGUMENTS VARIABLE
// There is also a special 'array-like object' named ARGUMENTS that contains all arguments by their index.

function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it's iterable
  // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar"); // argument length: 2

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya"); // argument length: 1

// In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function, no matter their total number.

// And it still works, we can use it today.

// But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods, so we can’t call arguments.map(...) for example.

// Also, it always contains all arguments. We can’t capture them partially, like we did with rest parameters.

// So when we need these features, then rest parameters are preferred.

// ---------------------------------------------- //
