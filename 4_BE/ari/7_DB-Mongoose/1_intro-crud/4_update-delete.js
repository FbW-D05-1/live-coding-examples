const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Yummy peach",
});

//fruit.save();

// updating one
// Fruit.updateOne({ name: undefined }, { name: "2nd" })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// updating many
// Fruit.updateMany({ name: undefined }, { name: "many" })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// delete

// Fruit.deleteOne({ name: undefined })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// delete many

// Fruit.deleteMany({ name: undefined })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const updateFruits = async () => {
  try {
    const res = await Fruit.updateOne(
      { _id: "640f13d58cedbba84c3c30f4" },
      { name: "HotPink" }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
//updateFruits();

const deleteFruit = async () => {
  try {
    const res = await Fruit.deleteOne({ _id: "640f13d14298fa7118d79b52" });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
//deleteFruit();

const findFruits = async () => {
  try {
    const fruits = await Fruit.find();
    fruits.forEach((fruit) => {
      console.log(fruit.id, ":", fruit.name);
    });
  } catch (error) {
    console.log(error);
  }
};

//findFruits();

// delete Klaus

const deleteKlaus = async () => {
  try {
    const result = await Person.deleteMany({ name: "Klaus" });
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
deleteKlaus();
