# Handling Requests and Responses: the GET Request

We can't display you anything because server isn't giving us anything to display. So that's what we're going to address now.

Now, what you have to imagine is that this localhost:3000 is basically the same as the route of any web site. So it's the home page. It's the equivalent of going to google.com But in this case our domain is simply called localhost:3000. So this "/" just represents localhost:3000/, which is the route, or the home page, of our web site.

Now, our server is currently not sending anything back when our browser makes the get requests.

So let's change that. Just above the _app.listen_, we're going to say app.get:

```js
app.get();
```

And this is a method that's provided by Express that allows us to specify what should happen when a browser gets in touch with our server and makes a get request.

Now the first parameter it takes is the location of the get request:
```js
app.get("/");
```

Now when that get request happens, we can trigger a callback function, and this callback function can have two parameters: request and response.
So this method, app.get, defines what should happen when someone makes a get request to the home route. So that's the first parameter.
And then there's a callback function that tells the server what to do when that request happens.
```js
app.get("/", function(request, response){});
```
So let's printout this request object that we get when the callback gets triggered and see what it looks like:
```js
app.get("/", function(request, response){
    console.log(request)
});
```

Note: you will have to terminate the server and restart it

you can see that there's a whole bunch of information that's packaged into this request which is being logged. And this is all of the information that's associated with the request that was made to our server. So, for example, you can see that my browser accepts the following languages( 'Accept-Language',
    'de,en-US;q=0.7,en;q=0.3',), and which browser exactly i am using ('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',) 
    You can also see other things such as what was the URL that I accessed when I triggered this request(host: 'localhost:3000',),
and it's got so much more information all about that request that was made to the server.

Now the second object is the response.
This is the response that outcome server can make when the request gets triggered at this home location. So currently our server isn't responding with anything, and that's why we're getting error

## So let's change that.

```js
app.get("/", function (request, response) {
  response.send("Hello World")
});
```

again cancel terminal and restart

and now we have hello World printed


And that's because when we typed in localhost:3000, we specified a location of a server. So when we hit enter, the browser will go to that location and make a request to get some data back. And when that request gets made at that home location, then our callback gets triggered, and we send the browser a response, which is just the plain text of ‘Hello World’. Now that gets sent back to our browser and it renders it on screen.

So you don't have to just send plain text.

You can actually send HTML. (foreshadowing sending stringified JSON)

So let's try sending an h1

```js
app.get("/", function (request, response) {
  response.send("<h1>Hello World</h1>");
});
```
btw i'm getting annoyed with restarting my server so just use nodemon or node --watch


And now we go to localhost:3000, we get the h1 being sent back with ‘Hello, world!’

Now, in most cases, when people are working with Express and Node.js, you'll see these two parameters shortened.

```js
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});
```

And this is basically best practice for working with Express, and this is what you'll see out there when you find other people's code and they are creating their Express servers.


Now there is quite a lot of new information in this lesson but a lot of it depends on the understanding of how callbacks work. And so if this is at all confusing, then I recommend you to take a look back at our previous modules where we talked about Javascript callbacks and higher order functions in Programming Basic.

And it's a really good idea to create this yourself, mess around with it and send different responses, or log the requests, and just make sure that you're comfortable with this syntax and how it works.