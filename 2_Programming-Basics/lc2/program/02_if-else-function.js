// const varOne = 10;

// const varTwo = 10;

// if ((varOne >= varTwo && 120 % 2 === 0) || varOne * 260 === 2600) {
//   console.log("Heya!");
//   12 > 2
//     ? console.log("The condition is true")
//     : console.log("the condition is false");

//   const varThree = "1";
//   if (varThree == true) {
//     console.log("Heya is a string");
//   }
// }

// // Heya!
// // The condition is true
// // Heya is a string

// const a = false;

// const b = "false";

// if (a != b) {
//   console.log("Booleans are not equal to strings!");
// } else {
//   console.log("Booleans are equal to strings!");
// }

// const time2 = 21;
// let greeting;

// if (time < 10) {
//   greeting = "Good morning!";
// } else if (time >= 10 && time < 20) {
//   greeting = "Good day!";
// } else {
//   greeting = "Good evening!";
// }

// console.log(greeting);

console.log("===============================");

function roboLea() {
  console.log("leaveDciHQ");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buyMelk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("GibMelk");
}

function vibeCheck() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  console.log(time);
  if (time == "13" || time == "1pm") {
    roboLea();
  } else {
    console.log("NOW WE WAIT");
  }
}

vibeCheck();
