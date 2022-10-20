console.log("Hello typescript");
console.log(typeof NaN);
// compile => tsc 'nameoffile'.ts
var x = 3.3;
var y = "random";
var hosam = true;
var array;
console.log(array);
var a;
var addition = function (n1, n2) {
  if (n2 === void 0) {
    n2 = "12";
  }
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    console.log("Error: not a number");
  }
};
console.log(addition(2, "3"));
var obj = {
  itemId: 123,
  shape: "round",
  color: "red",
  size: true,
};
var DciStuds = [
  {
    name: "Kathrine",
    age: 24,
    role: "Student",
    isTeacher: false,
  },
  {
    name: "Ali",
    age: 24,
    role: "Student",
    isTeacher: false,
  },
  {
    name: "Sidar",
    age: 24,
    role: "Student",
    isTeacher: true,
  },
];
console.log(DciStuds[2].name);
