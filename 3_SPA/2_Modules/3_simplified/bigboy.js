const first = () => {
  console.log("first");
};
const second = () => {
  console.log("second");
};
const third = () => {
  console.log("third");
};
const fourth = () => {
  console.log("fourth");
};

// export default function () {
//   third();
//   first();

//   fourth();
//   second();
// }

export default {
  third,
  first,
  fourth,
  second,
};
