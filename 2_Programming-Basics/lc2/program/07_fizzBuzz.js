// // DCI Lösung

// const myNum = 15;

// if (myNum % 3 == 0 && myNum % 5 == 0) {
//   console.log("Fizzbuzz");
// } else if (myNum % 3 == 0) {
//   console.log("Fizz");
// } else if (myNum % 5 == 0) {
//   console.log("Buzz");
// } else {
//   console.log("What fresh hell is this?");
//   // this is good if the input is, despite all instructions, not a number.
// }

//step one

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 != 0) {
//     console.log("Fizz");
//   }
//   if (i % 3 != 0 && i % 5 == 0) {
//     console.log("Buzz");
//   }
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   }

//   if (i % 3 != 0 && i % 5 != 0) {
//     console.log(i);
//   }
// }
console.log("==================================");
// step two

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

console.log("==================================");
// step three

for (let index = 1; index <= 100; index++) {
  let output = "";
  if (index % 3 == 0) {
    output += "baba";
  }
  if (index % 5 == 0) {
    output += "booey";
  }

  if (output == "") {
    output = index;
  }
  console.log(output);
}
