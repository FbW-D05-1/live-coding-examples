# Backend Web Development

welcome to hell

up until now we have been interacting with front end technologies(aside from firebase). But to become true Full-Stack Developer you need the knowledge of the dark side

## What Exactly is the Backend?

It consists of things such as a server which will serves up your files to your front end

a database which can store your user data such as their log ins and passwords as well as your applications.

So this is where you create your business logic, you determine how your web applications work, for example things such as calculating flight prices, or making payments, that sort of stuff.

Real life example:

Imagine you're on a website to book some sort of events or festival tickets as soon as you filter and find your favorite one you will book the ticket with your email, how many tickets and your name/ registration details. All of these informations will be sent over to a database and for simplicity's sake you can just imagine these databases as these giant Excel spreadsheets living somewhere. And all of your data that you enter gets saved onto these spreadsheets. And that means that when you come back at a later date, You're able to log back on to the website, and it will be able to retrieve from its database all of the data that is associated with your account. So, for example, it could retrieve your ticket to Rock am Ring music festival.

Now a really great analogy for a full stack web application, it's kind of like a restaurant.
So there is a front of house this is the main restaurant where your clients will sit down and have dinner.(front end)

But then there's also the kitchen, which is where the cooking is mostly happening.(backend)

Then there's also the larder, which is where you store all of your ingredients and everything you need to make the food.(database)

And finally you have Servers that serve the food and beverages to the customers.(API)


In this analogy our front of house restaurant is basically the client side.
This is what the user sees in the browser. They're able to interact with the web site using Javascript and they're able to see the information that's being displayed using HTML and CSS.

Now, a little bit further back on the back end, we've got the kitchen, and this is analogous to our server. This is basically the place where all of our dishes get served from. So, when a restaurant customer asks for a steak, then that order gets sent to the server, and the server should send back what it is that the client wanted, which is the actual steak.

And finally the larder where all the ingredients are stored is of course the database. This is where all of our user data, our event data, our ticket data, all of the data that makes our web site work is stored. So this is where the divide between the front end and the back end happens. It’s between the front of the house and the restaurant, and the kitchens and larder.


You could have a restaurant where you make all of the dishes in front of the client, and you just do it on their table. You bring all of the ingredients there and you make it right there for them. Now the downsides in this case is that, firstly, your secret(krabby patty) recipe that's been passed down over generations from your great grandma to your grandma to your mother to your self, well that's kind of exposed, right? Anybody would be able to see what it is that you're doing, and they would be able to replicate it.

And this is the same for the business logic of your web site.

If you had something that you wanted to keep secret such as your API keys or how you implement your particular application, then you don't want that to be visible every time somebody loads up a web site, right?

And the other problem is that it can be really really time consuming to make the dish in front of the client in the restaurant, because you would have to bring all of the ingredients, you would have to make it one by one in small batches, and in web sites that translates to a long loading time.

So if you are transporting a lot of code over to the browser where it has to be executed on the browser, that usually takes a lot longer than if it was done on the back end.
So the alternative is we take our ingredients from our database, so our server interacts with the database, then we execute some code on our server and we create the application or the dish, in this case, which then gets served to the client side. So that means we don't have to transport any of the ingredients, we don't have to transport a lot of code, which will vastly speed up your web site, and also keep your business logic hidden.

## Technologies

On the back-end there's a lot of technologies that are commonly used for this purpose and these include PHP, Ruby, Java, asp .net, amongst many many others.

Now, in addition, there are frameworks, such as CakePHP or Ruby on Rails or Spring, Express, and these are things that will speed up development using the particular back end technology you chose.

So a common one you would have heard is maybe Ruby and Ruby on Rails, and the main job of these frameworks is to simply reduce the amount of repetitive stuff that a developer has to do, and just like how you don't want to write the email boilerplate code out every single time you create an additional page, then in the same way a lot of these frameworks such as Ruby on Rails or Express, they make a developer's life much much easier by cutting down some of the grunt work and saving you a lot of time.

We're going to be learning about Node.js as well as the most common framework that's used with it, which is Express. IF you're interested to learn more about backend i would recommend you to learn Java Spring or Ruby on Rails after DCI.