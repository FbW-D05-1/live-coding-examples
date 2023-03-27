//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const crypto = require("crypto");

// const id = crypto.randomBytes(20).toString("hex");
// console.log(id);

const secret = "48f6af33bf2d60a4cc7d8d9337ec53b54ef189b5";

const port = 3000;

const app = express();

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/userDB");
};
main()
  .then(() => console.log("mongo connected"))
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(encrypt, { secret, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await User.findOne({ email: username });
    console.log(result);
    if (result) {
      if (result.password === password) {
        res.render("secrets");
      }
    }
  } catch (error) {
    res.send(error);
  }
});

app.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });
  try {
    await newUser.save();
    res.render("secrets");
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
