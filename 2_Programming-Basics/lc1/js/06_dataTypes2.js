//Object

const pets = {
  petName: "Luna",
  age: 15,
  race: "cat",
  likes: ["Food", "Hunting", "maybe Ari"],
  adress: {
    street: "abcv",
    houseNo: "babsab",
    city: "Alsheim",
  },
};

console.log(pets.adress.city);
console.log(pets.likes[1]);

//Array

const laundry = ["Shirt", "Pants", "underwear", 23, pets.petName];

console.log(laundry[0]);
console.log(laundry[0][2], laundry[1][1], laundry[3]);

[[], [], []];

// const users = {
//   Micha: {
//     id: 1,
//     firstName: "abcv",
//     age: 12,
//     eMail: "babsab",
//     city: "Alsheim",
//   },
//   user2: {
//     id: 2,
//     firstName: "abcv",
//     eMail: "babsab",
//     city: "Alsheim",
//   },
//   user3: {
//     id: 3,
//     firstName: "abcv",
//     eMail: "babsab",
//     city: "Alsheim",
//   },
// };
