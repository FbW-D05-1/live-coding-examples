const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No Name"],
  },
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
  // embedding the schema
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 10,
  review: "Yummy ananas",
});

const createPerson = async () => {
  const person = new Person({
    name: "Amy",
    age: 19,
    favouriteFruit: pineapple,
  });

  try {
    await pineapple.save();
    const result = await person.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// createPerson();

const mango = new Fruit({
  name: "Mangoose",
  score: 1,
  review: "Hosam said Not nice, go to firebase",
});

const updateKlaus = async () => {
  try {
    await mango.save();
    const res = await Person.updateOne(
      { name: "Klaus" },
      { favouriteFruit: mango }
    );
    console.log(res);
  } catch {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

// updateKlaus();

const updateMango = async () => {
  try {
    const res = await Fruit.updateOne(
      { name: "Mangoose" },
      { review: "Bababooey" }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

updateMango();
