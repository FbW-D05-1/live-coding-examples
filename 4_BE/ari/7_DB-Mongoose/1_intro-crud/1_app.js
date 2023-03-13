import * as mongoose from "mongoose";

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}
main().catch((err) => console.log(err));

// Schema

const fruitSchema = new mongoose.Schema({
  name: String,
  score: Number,
  review: String,
});

// create a Model
const Fruit = new mongoose.model("Fruit", fruitSchema);

// creating a document

const fruit = new Fruit({
  name: "Apple",
  score: 7,
  review: "Nice Fruit",
});

// absenden
// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  alter: Number,
});

const Person = new mongoose.model("Person", personSchema);

const person = new Person({
  name: "Klaus",
  alter: 30,
});

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "Sour",
});

const orange = new Fruit({
  name: "Orange",
  score: 6,
  review: "Too much orange",
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird Texture",
});

Fruit.insertMany([kiwi, orange, banana])
  .then(() => {
    console.log("Data Inserted");
  })
  .catch((err) => {
    console.log(err);
  });
