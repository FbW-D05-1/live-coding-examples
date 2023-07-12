const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: mongoose.Schema.Types.Mixed,
  rating: {
    type: Number,
    default: 0,
  },
});

const Article = new mongoose.model("Article", articleSchema);

const UserSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: mongoose.Schema.Types.Mixed,
  rating: {
    type: Number,
    default: 0,
  },
});

const User = new mongoose.model("User", UserSchema);

module.exports = {
  Article: Article,
  User: User,
};

// export { Article, User };
