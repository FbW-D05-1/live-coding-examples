## What you will build.

So the web app that you're going to be building is a newsletter app. 

So if you are somebody who wants to set up your own newsletter, where you want to email people who are interested in hearing from you, well, then you need a sign up page
So this is what you're going to be building.

It's a single page web site that looks pretty nice, and on the front end it looks incredibly simple, but on the backend it's got some powerful functionality that will allow you to sign people up to your mailing list.

Let's say that John Doe wanted to sign up to your mailing list.
Now once They click sign up, if it was successful then the user gets taken to the success page, and if it wasn't then the user will get a failure page.

So now, finally, the user was successful, and the data that was entered into that form box doesn't just disappear.

It gets sent to your list on MailChimp, and all of that data gets added into your list, and our new subscriber gets added.

So that means now you can go ahead and send your newsletters, or your email campaigns, to your subscribers.

## Setup

First create a free account at [Mail Chimp](https://mailchimp.com)

Set up a brand new server/ project:

 * CD to where you want to create your new project

 * Create new project folder call it something like Newsletter-Signup

 * Inside Newsletter-Signup, create a new app.js or server.js file, signup.html file, success.html file and failure.html file.

 * Initialise npm with default options

 * Install dotenv, request, express and if needed body-parser

 * Require the newly installed modules inside app/server.js

 * Create a new express app and set it to listen on port 3000

 * Once port is set up, log where the server is running

## Connect your server with html's

 1. Style your signup.html with bootstrap and then set up the get route to your sign up page

 > incase you used external css you will see that it doesn't work

 In order for your server to serve up static files such as CSS and images, then you need to use a special function of Express, and that's something called static.

 So create a public folder and then use this inside your app/server.js

 Note: create css file and images file to keep everything tidy

 ```js
app.use(express.static("public"));
 ```
 Now change your HTML to something like this:

 ```html
    <link rel="stylesheet" href="css/style.css">
 ```
 same thing for images

  ```html
    <img class="mb-4" src="images/logo.png" alt="" width="72" height="57">
 ```

 2. Grab the data from your Forms and console.log them

 > again if you're using required then install body-parser if you're using imports check out Calculator project how to parse body


So now you've done all the prep work of setting up your sign up page and getting the data that's inside the inputs.

## Setting up Mailchimp

[Mailchimp docs](https://mailchimp.com/developer/marketing/api/)

[what you need](https://mailchimp.com/developer/marketing/api/list-members/)

What you need to do:

 * Get API Key and save it in .env

 > mailchimp.com => Profile => Extras => API Keys

 * Get your list id and save it in .env

   > mailchimp.com => audience => all contacts => Settings dropdown => Audience name and defaults => Audience ID on the right side


## Sending request to mailchimp

 * Post request create a new object with input fields you get

 > [docs](https://mailchimp.com/developer/marketing/api/list-members/list-members-info/) scroll down a bit and open properties of memebers to see which keys you need to use

 > for merge fields go to Audience fields and *|MERGE| * tags

 * Format to flatpack(stringify)

 * Make a request with https 

First you will need url endpoint

 > [urls](https://mailchimp.com/developer/marketing/docs/methods-parameters/) at the front of url there is usX replace the X with number that is specified in your api key

Second you will need options

> method, authentication

Finally 

 * HTTP request and get a response

 > request.send()

 > request.end()


If you go to mailchimp you should get a new member

## Add success and Fail Pages


 * Use response.statusCode to send user to specific pages

 * To test failed.html just break your api key

 * Add a button to send user back to home page using form action and method

 * Create Route for failure

 * use res.redirect