import express from "express";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  const bmi = weight / (height * height);

  res.send(`Your BMI is ${bmi.toFixed(2)}`);
});

app.listen(port, () => {
  console.log(`server yeeting ${port} monke's`);
});
