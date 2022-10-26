let Obj = {
  vollName: "Sidar Halman",
  job: "Assistent Lehrer",
  "job Beschreibung":
    "Ich öffne break out rooms und trinke kaffee. Prüfe tests manchmal",
  fähigkeit: [
    "Html",
    "CSS",
    "SCSS",
    "JavaScript",
    "React",
    "NodeJS",
    "MongoDB",
    "Express",
  ],
  lieblingsStadt: "Marburg",
  lieblingsZahl: 69,
  details() {
    return `Mein name ist ${this.vollName}, ich bin ein ${this.job}, irgendwann möchte ich in ${this.lieblingsStadt} wohnen`;
  },
};

// 1. mit dot notation

let vollName = Obj.vollName;

// console.log("Voll Name", vollName);

//2. bracket notation
let jobBeschreibung = Obj["job Beschreibung"];

// console.log("Job Beschreibung", jobBeschreibung);

// 3. detstructuring

let { fähigkeit, details, lieblingsZahl } = Obj;
// console.log(details());
// console.log("Fähigkeiten", fähigkeit);
// console.log("Fähigkeiten", Array.isArray(fähigkeit));

// bind () https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

const detailsGet = Obj.details;
// console.log(detailsGet());

const fixedDetails = detailsGet.bind(Obj);

// console.log(fixedDetails());

const oneLine = Obj.details.bind(Obj);
// console.log(oneLine());

// Array destructuring
// How the array is destructured into variables:

// 1.
const arr = ["Sidar", "Halman"];

const firstName = arr[0];
const surname = arr[1];
console.log(firstName);
console.log(surname);

// console.log(arr);

//2.
console.log("====================================");

const [firstName2, , title] = ["Sidar", "Halman", "Consul", "Emperor of Rome"];
console.log(firstName2);
console.log(title);

//3
const numbers = [44, 69, 88, 99];

const [c, , e, f] = numbers;
console.log(c); //44
console.log(e); // 88
console.log(f); //99

//4.
let string = "Hotpink";

const [var1, var2, var3] = string;
console.log(var1); //H
console.log(var2); //o
console.log(var3); //t

//5.

const euroCities = ["Paris", "Berlin"];
const asianCities = ["Tokyo", "Sinpo"];

const twoArrays = [...euroCities, ...asianCities];

const assignedArr = Object.assign(euroCities, asianCities); // takes only one
console.log(assignedArr);

console.log(twoArrays);

// 6.

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

const [letterA, , letterC, , , letterF] = alphabet;

console.log(letterA);
console.log(letterC);
console.log(letterF);
console.log(alphabet);

// Object destructuring
//7.
console.log("============================");

const user = {};
[user.name, user.surname] = "Hosam Cherry".split(" ");

console.log(user.name);
console.log(user.surname);
console.log(user);

// 8.

let i, j, k, l, m;

({ i, j } = { i: 10, j: 20 });
// i = 10
// j = 20

console.log(k); // undefined

console.log(i);
console.log(j);

console.log(typeof i);

//9.

({ k, l, ...m } = { k: 10, l: 20, o: 40, p: 100 });
console.log(m);

//10.
console.log("============================");
function easyFunction(array) {
  const num1 = array[0];
  const num2 = array[1];
  const num3 = array[2];
  const num4 = array[3];

  return num1 + num2 + num3 + num4;
}
console.log(easyFunction([1, 2, 3, 4])); //10

function destructureFunction(arr) {
  const [num1, num2, num3, num4] = arr;

  return num1 + num2 + num3 + num4;
}

console.log(destructureFunction([1, 2, 3, 4]));

//shorter
function destructureFunction2([num1, num2, num3, num4]) {
  return num1 + num2 + num3 + num4;
}
console.log(destructureFunction2([1, 2, 3, 4]));

//12

//React

const stateObject = {
  name: "Lina",
  age: 35,
};

function myReactFunction({ name, age }) {
  console.log(`My name is ${name} and I'm ${age} years old`);
}
myReactFunction(stateObject);
