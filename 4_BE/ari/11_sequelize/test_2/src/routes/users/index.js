const User = require("../../db").User;
const Post = require("../../db").Post;
const multer = require("multer");
const cloudinary = require("../../cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const sgMail = require("@sendgrid/mail");
const jwt = require("jsonwebtoken");
const { authenticate, refreshToken } = require("../../auth");
const router = require("express").Router();
const bcrypt = require("bcrypt");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "userPics",
  },
});

const cloudinaryMulter = multer({ storage: storage });

const jwt_key = process.env.JWT_KEY;
const jwt_refresh = process.env.JWT_REFRESH_KEY;

router
  .route("/register")
  .post(cloudinaryMulter.single("profilePic"), async (req, res, next) => {
    try {
      let imgurl =
        "https://res.cloudinary.com/dhmw620tl/image/upload/v1611844643/benchmark3/i91vqe984yfdir5xp8xh.png";

      if (req.file) {
        imgurl = req.file.path;
      }
      const newUser = await User.create({
        ...req.body,
        imgurl: imgurl,
      });
      res.send(newUser);

      //   if (newUser) {
      //     sgMail.setApiKey(process.env.SEND_GRID_KEY);
      //     const msg = {
      //       to: req.body.email,
      //       from: "ari@gfn.de",
      //       subject: "kek",
      //       text: "hi",
      //       html: "<strong>run</strong>",
      //       templateId: "2314421rswrf23f",
      //     };
      //     sgMail
      //       .send(msg)
      //       .then(() => {
      //         console.log("email sent");
      //         res.send("request for email finished");
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   }
    } catch (error) {
      console.log(error);
    }
  });

router.route("/login").post(async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const accessToken = await jwt.sign(
          { id: user.id },
          process.env.JWT_KEY,
          { expiresIn: "30m" }
        );
        const refreshToken = await jwt.sign(
          { id: user.id },
          process.env.JWT_REFRESH_KEY,
          { expiresIn: "1w" }
        );
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          //   secure: true, //set to true when deploy
          //   sameSite: "none", //set to none when deploy
        });
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          //   secure: true, //set to true when deploy
          //   sameSite: "none", //set to none when deploy
        });
        res.send({ user, accessToken, refreshToken });
      } else {
        res.status(401).send("Incorrect Username or Password");
      }
    } else {
      res.status(401).send("Incorrect Username or Password");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/logout", authenticate, async (req, res, next) => {
  try {
    await User.update(
      { JWT_REFRESH_KEY: req.user.JWT_REFRESH_KEY },
      { where: { id: req.user.id } }
    );

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(200).send("logged out");
  } catch (error) {
    console.log(error);
  }
});

router.get("/me", authenticate, async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.user.dataValues.id, {
      include: [Post],
    });
    res.send(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

router.get("/", authenticate, async (req, res) => {
  try {
    if (User.role === "Admin") {
      const allUsers = await User.findAll({
        include: [Post],
      });
      res.send(allUsers);
    } else {
      res.status(401).send("unauthorized");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

router.get("/:id", authenticate, async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.id, {
      include: [Post],
    });
    if (singleUser) {
      res.send(singleUser);
    } else {
      res.status(404).send("No such user exists within our database");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

module.exports = router;
