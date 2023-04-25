const express = require("express");
const Like = require("../../db").Like;

const router = express.Router();

router.post("/:userId/:postId", async (req, res) => {
  try {
    console.log("USERID LIKE", req.params.userId);
    console.log("POSTID LIKE", req.params.postId);
    const like = await Like.findOne({
      where: { userId: req.params.userId, postId: req.params.postId },
    });
    if (like) {
      await like.destroy();
    } else {
      const newLike = await Like.create({
        userId: req.params.userId,
        postId: req.params.postId,
      });
    }
    res.status(201).send("ok");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:userId/:postId/likes", async (req, res) => {
  try {
    const likes = await Like.count({ where: { postId: req.params.postId } });
    const like = await Like.findOne({
      where: { userId: req.params.userId, postId: req.params.postId },
    });
    const data = {
      total: likes,
    };
    if (like) {
      data.isLiked = true;
    } else {
      data.isLiked = false;
    }
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
