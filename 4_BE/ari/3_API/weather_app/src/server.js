// imports
import express from "express";
import * as https from "https";

// reference
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=alsheim&appid=125e0bd3302b64278d69cc208ddcd956";

  https.get(url, (response) => {
    console.log(response.statusCode);

    if (response.statusCode === 200) {
      response.on("data", (d) => {
        const weatherData = JSON.parse(d);
        const temp = weatherData.main.temp;
        const desc = weatherData.weather[0].description;
        console.log(temp, desc);
      });
    } else {
      console.log("Something went wrong");
    }
  });
  res.send("server is up and running");
});

app.listen(port, () => {
  console.log("server running on port:", port);
});
