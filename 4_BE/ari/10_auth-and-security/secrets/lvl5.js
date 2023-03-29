//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const passport = require("passport");
const passportLocaleMongoose = require("passport-local-mongoose");

const saltRounds = 10;

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
// 1
userSchema.plugin(passportLocaleMongoose);

const User = new mongoose.model("User", userSchema);
// 2
passport.serializeUser((user, done) => {
  process.nextTick(() => {
    done(null, { id: user._id, username: user.username });
  });
});
// 3
passport.deserializeUser((user, done) => {
  process.nextTick(() => {
    return done(null, user);
  });
});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// 4
app.use(
  session({
    secret: "dsadmlmldsmwlmdlmasd/.dfgg",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});
// 5
app.post("/register", async (req, res) => {
  try {
    const registeredUser = await User.register(
      { username: req.body.username },
      req.body.password
    );

    console.log(registeredUser);

    if (registeredUser) {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secrets");
      });
    } else {
      res.redirect("/register");
    }
  } catch (error) {
    res.send(error);
  }
});

app.post("/login", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secrets");
      });
    }
  });
});

// app.get("/logout", function (req, res) {
//   req.session.destroy(function (err) {
//     res.redirect("/"); //Inside a callback… bulletproof!
//   });
// });

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
