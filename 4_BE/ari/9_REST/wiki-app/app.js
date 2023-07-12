//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { Article, User } = require("./schemas.js");
// import { Article, User } from "./schemas.js";

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
app.use(bodyParser.json());
app.use(express.static("public"));

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
      tags: req.body.tags,
      rating: req.body.rating,
    });
    try {
      const result = await newArticle.save();
      const response = {
        _id: result._id,
        title: result.title,
        content: result.content,
        message: "Article created successfully",
      };
      res.send(response);
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
        {
          title: req.body.title,
          content: req.body.content,
          tags: req.body.tags,
          rating: req.body.rating,
        }
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

app.route("/queries").get(async (req, res) => {
  try {
    let query = {};

    if (req.query.title) {
      // Find by article title
      query.title = req.query.title;
    }

    if (req.query.content) {
      // Find by article content
      query.content = req.query.content;
    }

    if (req.query.startsWithH) {
      // Find all that start with letter H
      query.title = new RegExp("^H", "i");
    }

    if (req.query.titles) {
      // Find by multiple titles "Hello" and "there"
      query.title = { $in: req.query.titles };
    }

    if (req.query.ratingNotZero) {
      // Find every article which rating number is not 0
      query["rating.number"] = { $ne: 0 };
    }

    if (req.query.tags) {
      // Find everyone with specified tags
      query.tags = { $in: req.query.tags.split(",") };
    }

    const results = await Article.find(query);
    res.send(results);
  } catch (error) {
    res.status(404).send(error);
  }
});

// To find articles by title: /queries?title=your-title
// To find articles by content: /queries?content=your-content
// To find articles that start with the letter H: /queries?startsWithH=true
// To find articles with multiple titles "Hello" and "there": /queries?titles=Hello,there
// To find articles who's rating number is not 0: /queries?ratingNotZero=true
// To find articles with tags "video games": /queries?tags=video%20games

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
