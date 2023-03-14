const express = require("express");
const app = express();

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = new User(name, email, password);
  // Save user to database or do other things with user data.

  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// This is a simple registration controller that uses the User model to create a new user when the registration form is submitted. It then redirects the user to the login page.
// In this example, the Model is the User class, the View is the registration form, and the Controller is the express.js app that handles the form submission and creates a new User instance.
// Overall, the Model-View-Controller pattern helps to separate the different parts of a web application into their own distinct components, making the code easier to read, understand, and maintain.
