const express = require("express");
const cors = require("cors");
const { join } = require("path");

const server = express();

server.use(cors());
const port = 9001;

const staticFolderPath = join(__dirname, "../public");
