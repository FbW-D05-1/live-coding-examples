const express = require("express");
const { authenticate } = require("../auth");
const router = express.Router();
const userRoute = require("./users");
const postRoute = require("./posts");
const commentRoute = require("./comments");
const likeRoute = require("./like");

router.use("/users", userRoute);
router.use("/posts", postRoute);
// router.use("/comments", authenticate, commentRoute);
router.use("/like", likeRoute);

module.exports = router;
