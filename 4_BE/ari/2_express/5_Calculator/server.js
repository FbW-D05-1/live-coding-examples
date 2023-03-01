import express from "express";
import * as dotenv from "dotenv";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const port = process.env.PORT || 9001;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req);
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.send(`The result is: ${result}`);
});

app.listen(port, () => {
  console.log("server yeeting over", port, "monkes");
});
