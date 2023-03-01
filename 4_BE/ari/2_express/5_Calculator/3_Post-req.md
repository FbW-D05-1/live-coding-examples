# Processing Post Requests with Body Parser

if we now test the calculator we will get an error "Cannot POST to /index.html"

Now where does that come from?

Well, if we have a look inside our index.html, then you can see that our form has an action and a method. Now the method is the post method, so we're sending this data somewhere, and that somewhere is what's defined by the action attribute.
So we’re sending it to something called index.html, which is not what we want. We want to send it to our server, which is at the home route location,so it's just the forward slash:

```html
  <form action="/" method="post">
```

Now, if you don't have an action attribute, that's fine as well. By default, if it doesn't exist, then the form will simply send the data to the current page where it's on, so that will be the equivalent of action="/" , But let's just have it in there for clarity’s sake.


So our form has a post method, which means it's going to try and send the data that is entered into the inputs to a location that is our home route. So now, if we hit save, and we go back to our localhost:3000, our home page, and let's try again pressing that Calculate button. Now this time, we're still getting a 404 and a “Cannot POST”, but if you click on it, and you go over to the Headers tab, and you scroll down, you can see that we've
got a bunch of information, including some form data, and the data that we're getting access to is the parameter num1, which remember is bound to our first input using the name attribute.

HTTP METHODS:

1. if it's in the 100s it means hold on, something's going to happen

2. the 200 means ‘here you go’, this is usually a successful request code

3. 300 means go away, there’s some security involved

4. 400s means you screwed up

5. 500s means I screwed up(server screwed up)


So the two most often codes you'll see is 200, which means everything was successful. 400s tend to be client errors, so the user who's using a browser to request something that doesn't exist, for example.


Well, what's actually going on in our case? Well, the problem is that our server does not have a way of processing any post requests, so we're basically not accepting anybody to post to our home route. So let's go ahead and fix that.

Let's add an app.post method to handle any post requests that come to our home route, and then we're going to have a callback with, again, req and res, request and response.And we're just going to send back, “Thanks for posting that!” :

```js
app.post("/", (req, res) => {
  res.send("Thank you for posting");
});
```

and now we get rerouted to homepage but this time with the text we specified above. 

Now there's just one problem. How do we tap into pieces of form data? Because that's essentially what we need.

Now, in order to tap into those pieces of data, we have to install another NPM package, which is called Body Parser.

Note: if you're working with imports you don't have to install this!!! SKIP to heading below i will specify where (Line 84)

```bash
npm i body-parser
```

And what this is going to do is it's going to allow us to pass the information that we get sent from the post request. we're going to parse it so that we have access to properties and variables, so we can do our calculations.

After installing we can head over to our calculator.js, we can require it, so that we incorporate that package into our current project.

```js
const bodyParser = require("body-parser");

```

So now that we've incorporated Body Parser into our project, the next step is to get our app to use it. And Body Parser works with Express, so we can say app.use:

```js
app.use(bodyParser);
```

Now Body Parser has a few modes. There is, for example, bodyParser.text, so parse all the requests into text, or bodyParser.json, which is that special format that we saw before, or the one that we're going to be using is bodyParser.urlencoded :

```js
app.use(bodyParser.urlencoded());
```

And in addition to that, we're going to add an option called ‘extended’, and we're going to set it to be ‘true’:
```js
app.use(bodyParser.urlencoded({extended: true}));
```

## IMPORT VERSION

just use this instead, express 4.16 and above comes included with body parser

```js
app.use(express.urlencoded({ extended: true }));
```

And by setting that extended option to true, that basically just allows us to post nested objects. And it's not something that we're going to be using, but it's something that bodyParser is requiring you to explicitly declare.

Now why would you want to use Body Parser?

Well, it allows you to go into any of your routes, and you can tap into something called request.body:

```js
app.post("/", (req, res) => {
    req.body
  res.send("Thank you for posting");
});
```

and this is the parsed version of the HTTP request. So let's go ahead and log this and see what we get when we try to make a post request:

```js
app.post("/", (req, res) => {
    console.log(req.body)
  res.send("Thank you for posting");
});
```

so let's head back and press calculate again and our console should output this:

```
{ num1: '23', num2: '25', submit: '' }
```

So, by using Body Parser, we're able to parse the HTTP request that we get, and by using urlencoded we can get access to the form data, and we can then tap into each of these as if they were just properties of the object body.


So we can, for example, log request.body.num1. And remember that naming comes from the name attribute of your input.

```js
 console.log(req.body.num1);
```

So now we're only logging the value of the first input. so that value gets stored inside  request.body.num1


So now that we know how we can tap into these values, then making our calculator is super duper simple, right?


All we need to do is create a variable that's going to hold our num1, and that's going to be equal to 

request.body.num1.

And then we're going to create another one called num2, and this is going to be equal to

request.body.num2.

And then we can calculate the result, which is going to be num1 + num2, which is making a really simple calculator that adds two numbers.

```js
app.post("/", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  const result = num1 + num2;
  res.send(`The result of the calculation is: ${result}`);
});
```

go over to our home page, and let's try it


So what's going on here?

well it's concatinating two strings so challenge for you fix that 




Solution:

```js
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
```