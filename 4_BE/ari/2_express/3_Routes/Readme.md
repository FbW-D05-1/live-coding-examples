# Understanding and Working with Routes

So this first parameter("/") specifies the route that we are going to respond to. So that means when we get a get request from a browser that is targeting this route, which is the home route, then we're going to respond with our callback. 

Now we can respond to different routes.

So for example, if I create another app.get method, and, instead of targeting the home route, I target maybe the contact route:

```js
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h2>Contact me at: baba@gmail.com</h2>");
});
```

Just like react-router-dom we can have multiple pages rendered with their own routes.

You can start setting up the code for a lot of different routes.

So now here's a challenge. I want you to create a new route so that when I go to the About page of my web site at localhost, I want to be able to see a quick brief bio for who you are.




```js
app.get("/about", function (req, res) {
  res.send(
    "<h2>Hello I'm Ari</h2> \n <p>I like pepperoni</p> \n <strong>and vidya</strong>"
  );
});
```

Now our About page has a response from our server.

So you can set up basically as many routes as you wish, and that means that you can start building up your web site to have a lot of different pages.

Another challenge. Create a route for your hobbies and list them in an unorganized list:

```js
app.get("/hobbies", function (req, res) {
  res.send(
    "<ul><li>beer</li> <li>snacks</li> <li>Anime</li> <li>Joe</li></ul>"
  );
});
```