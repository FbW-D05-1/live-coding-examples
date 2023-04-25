const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mainRoute = require("./routes");
const cookieParser = require("cookie-parser");
const database = require("./db");

dotenv.config();

const port = process.env.PORT || 9001;

const app = express();

const whitelist = ["http://localhost:3000", "https://www.arii.me"];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("CORS issues"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log("Cookies:", req.cookies);
  next();
});

app.use("/kek", mainRoute);

database.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`port yeeting ${port} monke's`);
  });
});
