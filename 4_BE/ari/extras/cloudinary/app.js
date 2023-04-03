const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

// Set up Multer and Cloudinary storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profile_pictures",
    format: async (req, file) => {
      let format;
      switch (file.mimetype) {
        case "image/jpeg":
          format = "jpg";
          break;
        case "image/png":
          format = "png";
          break;
        case "image/gif":
          format = "gif";
          break;
        default:
          format = "jpg";
          break;
      }
      return format;
    }, // Set desired file format here
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

    // Create new User
    const user = new User({ name, email });

    // Save User to MongoDB
    await user.save();

    // Upload profile picture to Cloudinary with user ID as public ID
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: `profile_picture_${user._id}`,
    });

    // Update User with profile picture URL
    user.profilePicture = result.secure_url;
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
