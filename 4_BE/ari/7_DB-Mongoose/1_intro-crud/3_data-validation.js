const mongoose = require("mongoose");

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}
main().catch((err) => console.log(err));

// Schema

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name defined"],
  },
  score: {
    type: Number,
    min: [1, "Score cannot be lower than 1"],
    max: 10,
  },
  review: String,
});

// create a Model
const Fruit = new mongoose.model("Fruit", fruitSchema);

const findFruitsByName = async () => {
  try {
    const fruits = await Fruit.find();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

// findFruitsByName();

const personSchema = new mongoose.Schema({
  name: String,
  alter: Number,
});

const Person = new mongoose.model("Person", personSchema);

const fruit = new Fruit({
  name: "deez",
  score: 0,
  review: "Nice Fruit",
});

// absenden
fruit.save();
