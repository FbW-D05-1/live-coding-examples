const mongoose = require("mongoose");

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

const getFruits = async () => {
  try {
    const fruits = await Fruit.find({ _id: "640ef91a20f7a54f8d46dacf" });
    console.log(fruits);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// getFruits();

// Fruit.find()
//   .then((fruits) => console.log(fruits))
//   .catch((err) => console.log(err))
//   .finally(() => mongoose.connection.close());

// find by name

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

Fruit.find()
  .then((fruits) => {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

//findFruitsByName();

const personSchema = new mongoose.Schema({
  name: String,
  alter: Number,
});

const Person = new mongoose.model("Person", personSchema);
