const express = require("express");
const User = require("../../db").User;
const Post = require("../../db").Post;
const Comment = require("../../db").Comment;
const Like = require("../../db").Like;
const multer = require("multer");
const cloudinary = require("../../cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const moment = require("moment");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const type = file.mimetype.split("/")[0];
    return {
      folder: "posts",
      rescource_type: type,
    };
  },
});

const cloudinaryMulter = multer({ storage: storage });

// create a post
router.post("/", async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const secret = process.env.JWT_KEY;
  try {
    const decoded = jwt.verify(accessToken, secret);
    const userId = decoded.id;
    const newPost = await Post.create({
      ...req.body,
      userId: userId,
    });
    res.status(201).send(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [User, { model: Comment, include: [User] }, Like],
    });
    res.send(allPosts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const singlePost = await Post.findByPk(req.params.id, {
      include: [User, { model: Comment, include: [User] }, Like],
      order: [[{ model: Comment }, "createdAt", "desc"]],
    });
    if (!singlePost) {
      return res.status(404).send("Post not found");
    }
    res.send(singlePost);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

router.get("/hotposts", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [User, { model: Comment, include: [User] }, Like],
    });

    const hotPosts = allPosts.filter((post) => {
      const createdAt = moment(post.createdAt);
      const now = moment();
      const diffInHours = now.diff(createdAt, "hours");
      return diffInHours <= 24;
    });

    res.send(hotPosts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postToDelete = await Post.findByPk(req.params.id);

    if (postToDelete.dataValues.userId === req.user.dataValues.id) {
      await Post.destroy({ where: { id: req.params.id } });
      res.send("Post deleted");
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
