# Some Weather data

first create new index.html and app.js then init then install express

new node app in app.js

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(3000, () => {
  console.log("server running on port 3k");
});
```

We're now ready to get started.


I have to somehow make a get request to the OpenWeatherMap’s server, and be able to fetch the data back as a JSON, and parse it so I get the relevant piece of information.

## Getting the data

And the first way is the native way, using the Standard Node Library, something called the HTTP module. And in fact there is actually the HTTPS module, which is the secure version. But in addition you could also use the Request module, Axios, SuperAgent, or Got.

Now all of these last four are external NPM packages, but I want to show you how you can do it natively.

So we're going to be using the native HTTPS Node module.

So if we search for it inside our [Node documentation](https://nodejs.org/api/http.html#httpgeturl-options-callback), you can see that somewhere there

importing:

```js
//old
import http = require('http')
//new
import * as http from 'http';
```

Inside my app.get, before I send the result back to my client, I'm going to use my HTTPS module and call the get method. Now the get method is going to need a URL:

```
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

inside app.get:

```js
app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=alsheim&appid=125e0bd3302b64278d69cc208ddcd956";
  https.get(url);
  res.send("Server is up and running");
});
```

Now the callback function after our url constant is going to give us back a response. So normally, when you see it written, say in the documentation, you'll see people shorten it to res, but because we've already got req and res here, I don't want to have another res, because it's kind of confusing, so I'm going to call this the full name _response_, 

```js
https.get(url, (response) => {});
```



and when we get back our response, all that I'm going to do is just log this response to see whether if this entire process of making a HTTP get request over the Internet to the URL, where we're supposed to fetch some data, whether it actually works, and whether we actually get something back.

```js
 https.get(url, (response) => {
    console.log(response);
  });
```

Now if we go to our terminal, you can see that we've gotten back a whole bunch of data, including the method of request that we made, the path that our requests went to, and most importantly the status code that we got back from the external OpenWeatherMap server. And it says 200, which basically means a OK. So now that we've got everything working.

Fun Fact check out 418 response code
[more fun ways to learn http codes](https://httpstatusdogs.com/)

## Parse JSON

Now, in addition to checking the status code, we can also tap into the response that we get back, and call a method called on, and search through it for some data. Now this will correspond to the actual message body that we got back, that OpenWeatherMap has actually sent us. So let's try to implement this method.

```js
https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      console.log(data);
    });
  });
```

Now let's check out the response in our terminal. You can see that we're getting the response code 200, which means everything is working, but the data that we're printing out looks a little bit funny.

It seems to be all jumbled up and we can't really make much sense of it. So what exactly is this?
Well, this is actually hexadecimal code.
And if we copy it and put it into a [hexadecimal converter](https://cryptii.com/pipes/hex-to-text), we can convert it to text, and you can see that the text we're getting back is pretty much the beginning of the JSON that we're getting back from OpenWeatherMap that we saw earlier.

Now what would be far more useful for us, though, is to actually get a Javascript object, and we can do that by converting the data into a Javascript object. And to do that we would need to write JSON parse, and this will turn a JSON in some sort of string format, say the hexadecimal, or binary, or text, and then turn it into an actual Javascript object.

```js
 response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
    });
```

And now you can see that we're able to print an entire Javascript object, so there's no strings in the keys, and everything is organized as you would any other Javascript object.


Let's get some temps.

```js
response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      console.log(temp);
    });
```

Challenge get the description of the weather:




solution:

```js
response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      console.log(weatherDescription);
    });
```