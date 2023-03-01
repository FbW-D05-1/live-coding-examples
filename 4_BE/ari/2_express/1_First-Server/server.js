//importing express
// old way
// const express = require('express')

// new way
// needs "type":"module", in package.json
import express from "express";

const app = express();

const port = 3000 || 9000 || 5000;

app.listen(port, function () {
  console.log("server started on port: ", port);
});
