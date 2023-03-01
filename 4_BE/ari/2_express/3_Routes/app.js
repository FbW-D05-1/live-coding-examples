import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hallo Welt!</h1>");
});

server.get("/kontakt", (req, res) => {
  res.send("<h2>Contact me at: <span>baba@gmail.com</span> </h2>");
});

server.get("/about", (req, res) => {
  res.send(
    "<h2>About me</h2> \n <p>i like pepperoni</p> \n <p>idk something<p>"
  );
});

server.get("/hobbies", (req, res) => {
  res.send("<ul><li>Schlafen</li><li>Essen</li><li>Schlafen</li></ul>");
});

server.listen(3000, () => {
  console.log("server started on port 3k");
});
