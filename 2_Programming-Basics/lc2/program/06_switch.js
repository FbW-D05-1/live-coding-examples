// SWITCH CASE

// check what month do we have?
// January = 1
// February = 2
// March = 3
// ... 12 cases...

const month = 14;
// what month is this? Print it to the console as a word!
if (month === 1) {
  console.log("Its January!");
} else if (month === 2) {
  console.log("Its February");
} else if (month === 3) {
  console.log("Its March");
} else if (month === 4) {
  console.log("Its April");
} else if (month === 5) {
  console.log("Its May");
} else if (month === 6) {
  console.log("Its June");
} else if (month === 7) {
  console.log("Its July");
} else if (month === 8) {
  console.log("Its August");
} else if (month === 9) {
  console.log("Its September");
} else if (month === 10) {
  console.log("Its October");
} else if (month === 11) {
  console.log("Its November");
} else if (month === 12) {
  console.log("Its December");
} else {
  console.log("Error cases!!!"); // 13
}
// ...
// too much to code
// how can we make it simpler?

// a different approach
// SWITCH CASE
// for easy comparisons
// check for EQUALITY
// cannot check for bigger than // smaller than

switch (month) {
  case 5:
    console.log("Its January!");
    break;
  case 2:
    console.log("Its February!");
    break;
  case 3:
    console.log("Its March!");
    break;
  case 4:
    console.log("Its April!");
    break;
  case 5:
    console.log("Its May!");
    break;
  case 6:
    console.log("Its June!");
    break;
  case 7:
    console.log("Its July!");
    break;
  case 8:
    console.log("Its August!");
    break;
  case 9:
    console.log("Its September!");
    break;
  case 10:
    console.log("Its October!");
    break;
  case 11:
    console.log("Its November!");
    break;
  case 12:
    console.log("Its December!");
    break;

  default:
    console.log("Error there are only 12 months");
}

console.log("================================");

const myMonth = "May";

switch (myMonth) {
  case "January":
  case "February":
    if (myMonth === "January") {
      const message = "Hello Winter!";
      console.log(message);
    }
    console.log("This is the first or second month of the year");
    break;
  case "March":
    console.log("This is the third month of the year");
    break;
  case "April":
    console.log("This is the fourth month of the year");
    break;
  case "May":
    console.log("This is the fifth month of the year");
    break;

  default:
    console.log("bababooey");
}
