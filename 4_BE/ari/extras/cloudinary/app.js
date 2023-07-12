const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: "dlkgqs21x",
  api_key: "985179314343688",
  api_secret: "q9qzWjoEcWN4xdaxJuiQCHiJQts",
});

// Set up Multer and Cloudinary storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profile_pictures",
    public_id: (req, file) => `profile_picture_${new Date().toISOString()}`,
  },
});

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profilePicture: String,
});

const User = mongoose.model("User", userSchema);

// Set up Express app
const app = express();
app.use(express.json());

// Set up Multer middleware for handling file uploads
const upload = multer({ storage: storage });

// Define routes
app.post("/users", upload.single("profilePicture"), async (req, res) => {
  try {
    const { name, email } = req.body;

    // Create new User with profile picture URL
    const user = new User({ name, email, profilePicture: req.file.path });

    // Save User to MongoDB
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
