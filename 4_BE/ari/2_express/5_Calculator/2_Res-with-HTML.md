# Responding to Requests with HTML Files

Now armed with our knowledge of Javascript, Node, Express, we're going to put it to use in our web site, and we’re going to use the data that gets entered into the forms, and perform calculations on it in our server. So first things first. We’re going to create a new file. I'm going to create index.html

html:5 shortcut inside

title will be Calculator


Now inside the body we're going to include a form.

Now this form is not going to have a class, but it will have an action and a method. So I want you to keep the method as post and the action as index.html. We’re going to explain really shortly just what those things are.

```html
<body>
    <form action="index.html" method="post"></form>
</body>
```

let's add a few inputs.

```html
   <form action="index.html" method="post">
        <input type="text" name="num1" placeholder="first number">
        <input type="text" name="num2" placeholder="second number">
        <button type="submit" name="submit">Calculate</button>
    </form>
```

All right. So now that we've created our form, we're going to send this entire index.html file when the browser tries to access the home route.

Now when we use res.send, we were sending individual bits of HTML data.

But if we want to send an entire web page, such as our index.html, we have to use something different.

So if we head over to the [Express API reference](https://expressjs.com/en/4x/api.html), and you can see it’s organized by which part you're looking for in the side nav. And we're looking for the response part, and you can see it has a whole bunch of different methods, for example res.send, which is what we've been using so far. But there's also, if you scroll down, res.sendFile, and this transfers the file over to the browser when they make a get request.

So, instead of saying res.send, we can say res.sendFile:

```js
app.get("/", (req, res) => {
  res.sendFile();
});
```


Now, what we've been working with so far are what are called relative file paths, so we can simply say index.html, and it will go and search within the current file's location, so calculator.js, and look for something called index.html. Now this works a little bit differently when you have a server, because your server, at the moment, even though it's hosted on our own computer, and we know exactly where this Calculator project folder resides but in the future, when we deploy our server into the cloud or into somebody else's computer, then we have no idea what is that location.

So instead of just sending a relative file path, what we can do is we can use a constant that’s called "__dirname" :
```js
app.get("/", (req, res) => {
  res.sendFile(__dirname);
});
```

So it's two underscores dirname, and this is going to give you the file path of the current file no matter where it's hosted, on somebody else's computer, in the cloud, in a remote server, whatever it may be.

And I just want to console.log this first, so I can show you what it looks like.

```js
app.get("/", (req, res) => {
  console.log(__dirname);
});
```

NOTE: since we are using type:modules we have to import it if you're using required version ignore this

```js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

just import these and it will work


So this is the entire file path that it took to get to this current file.

```js
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
```

And that should provide a path to reach this index.html file.

Now if we reload the page we get our forms

It's basically just a constant that allows us to grab hold of the current file location at any given time, so we can use that location and append the location of another file to it.