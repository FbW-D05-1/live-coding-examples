// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
  // your code here
  return arr.map((num) => num * 2);
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
// 2) Take an array of numbers and make them strings
function stringItUp(arr) {
  // your code here
  return arr.map((num) => num.toString());
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
// 3) Capitalize each of an array of names
function capitalizeNames(arr) {
  // your code here
  return arr.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"
// 4) Make an array of strings of the names

function namesOnly(arr) {
  // your code here
  return arr.map((person) => person.name);
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {
  // your code here
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr) {
  // your code here
  return arr
    .map((person) => `\n<h1>${person.name}</h1>\n<h2>${person.age}</h2>\n`)
    .join("");
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

// MAP

// Write a function capitalize that takes a string and uses .map to return the same string in all caps.
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey') // => "OH HEY"
const capitalize = function (string) {
  // code code code!
  return string
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter) => {
          return letter.toUpperCase();
        })
        .join("");
    })
    .join(" ");
};

const capitalize2 = function (string) {
  // code code code!
  return string
    .split(" ")
    .map((word) => {
      return word.toUpperCase();
    })
    .join(" ");
};

console.log(capitalize2("whoop"));
console.log(capitalize2("oh hey"));
// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hey sup, lets javascript together sometime') // => "HEY sup, LETS javascript TOGETHER sometime"
const swapCase = function (string) {
  // Codeeeee
  return string
    .split(" ")
    .map((word, index) => {
      return index % 2 === 0 ? capitalize(word) : word;
    })
    .join(" ");
};

console.log(swapCase("hey sup, lets javascript together sometime"));

// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
const shiftLetters = function (string) {
  // code!
  return string
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter) => {
          return String.fromCharCode(letter.charCodeAt() + 1);
        })
        .join("");
    })
    .join(" ");
};

console.log(shiftLetters("hello"));

// REDUCE

// Write a function that takes a string and returns an object representing the character
// count for each letter. Use .reduce to build this object.
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
const countLetters = function (string) {
  // your code here
  return string.split("").reduce((count, letter) => {
    count.hasOwnProperty(letter) ? count[letter]++ : (count[letter] = 1);
    return count;
  }, {});
};
console.log(countLetters("abbcccddddeeeee"));
// Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
const isPresent = function (string, target) {
  // GO GO GADGET CODE!

  return string.split("").reduce((acc, cur) => {
    if (cur === target) acc = true;
    console.log(acc);
    return acc;
  }, false);
};

console.log(isPresent("abcd", "b"));
console.log(isPresent("efghi", "a"));
// PARTY WITH MAP AND REDUCE *AT THE SAME TIME*

// Write a function decode that will take a string of number sets and decode it using the following rules:
// When each digit of each set of numbers is added together, the resulting sum is the ascii code for a single letter.
// Convert each set of numbers into a letter and discover the secret message!
// Try using map and reduce together to accomplish this task.
// ex. decode("361581732726247521644353 4161492813593986955 84654117917337166147521") // => "abc"
// ex. decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")
// => "secret-message"
const decode = function (string) {
  // CODE PARTY
  return string
    .split(" ")
    .map((word) => {
      return String.fromCharCode(
        word.split("").reduce((acc, cur) => {
          return parseInt(acc) + parseInt(cur);
        })
      );
    })
    .join("");
};

// Once you successfully write a decoding function, use it to decode this secret message!

console.log(
  decode(
    "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956"
  )
);
