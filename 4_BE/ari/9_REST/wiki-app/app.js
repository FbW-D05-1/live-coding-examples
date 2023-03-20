//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");
}
main().catch((err) => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = new mongoose.model("Article", articleSchema);

app
  .route("/articles")
  .get(async (req, res) => {
    try {
      const results = await Article.find({});
      res.send(results);
    } catch (error) {
      res.status(404).send(error);
    }
  })
  .post(async (req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    try {
      const result = await newArticle.save();
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await Article.deleteMany({});
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  });

app
  .route("/articles/:id")
  .get(async (req, res) => {
    try {
      const result = await Article.findOne({ _id: req.params.id });
      res.send(result);
    } catch (err) {
      res.status(404).send("404: Not found");
    }
  })
  .put(async (req, res) => {
    try {
      const result = await Article.replaceOne(
        { _id: req.params.id },
        { title: req.body.title, content: req.body.content }
      );
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  })
  .patch(async (req, res) => {
    try {
      const result = await Article.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await Article.deleteOne({ _id: req.params.id });
      res.send(`${req.params.id} was successfully deleted`);
    } catch (error) {
      res.send(error);
    }
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
