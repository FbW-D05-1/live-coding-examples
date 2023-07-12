// imports
import express from "express";
import * as dotenv from "dotenv";
import * as request from "request";
import * as https from "https";
import { fileURLToPath } from "url";
import { dirname } from "path";

// reference
const app = express();

dotenv.config();
// constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//envs
const apiKey = process.env.EXAMPLE_API_KEY;
const port = process.env.EXAMPLE_PORT;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("server running on port:", port);
});
