import express from "express";

const app = express();

app.get("/hello", function (request, response) {
  response.send("Hello World");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
