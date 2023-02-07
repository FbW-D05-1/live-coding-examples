# Firestore Databases

The next thing we're going to do is set up a database.

Now there's two types of database that Firebase gives us.

They're both know SQL databases, which work really well with JavaScript applications like ours. But the real time database is the older original database that Firebase made. The one where are you going to use is the newer fire store database, which I think is better and easier to use.

So click on that and then you're going to see a button here saying Create database, so click on that as well.

And then you'll see a pop up. This pop up is to do with security rules of our database. If we start in production mode, it means that no one can have access to our database, including our own front-end application. If we start in test mode, it means that anyone who knows about our Firebase project(credentials) can access the data.

For now, we're going to select start in test mode so we can easily access the database from the front-end.

Next up, choose a location for the database.(I'm going to choose europe-west3(Frankfurt))

Then click on Next again, and then Firebase will start to make your first database.

![Now we wait again](./images/wait.webp)

So once it's finished, you're going to see something now have fun figuring out jk

We have a panel on the left, which is where we'll see all of our different collections, then a collection in Firestore is just that a collection. And it just groups documents or records together in SQL terms, it would be the equivalent of a table.

And we have a collection for every unique type of data in our application.

For example, we would have a recipes, collections of recipe documents and we could have a blogs collection to store blog documents if it was a blog site.

So let's make a collection by clicking on a stock collection button right here, and let's name this recipes.

Now, when we do that, Firestorm asks us to create our first document in that collection.

Now, each document in the collection needs to have a unique ID. so that if we try and fetch that document, we can use it to specify which document that we want. You can either make your own or have Firebase make you one by clicking Auto-ID., which is what I'm going to do.

OK, so next up, we need to add some document fields, so a document just represents a single record in a collection.

In our case, a single recipe on each document is very similar to a JavaScript object with key value pairs in Firestore The key is called the field on each field has a data type, for example, a string or number, or a boolean, etc. So let's make a field call title, which is a string, and we're going to set it to be vegie pie.(field=title, value=vegie pie)

And then after that, we can add another field to this document by clicking the plus icon.

This time will make the field cookingTime, and then that is also going to be a string, and we'll set it to be 35 minutes.

then ingredients, but if you remember our ingredients were arrays so click on the string and there will be a dropdown now select array then all values inside array are strings

So it will be field ingredients type array inside of the array carrots, peas, pastry.

So after the ingredients, we need one more field, which is the method. so let's add random string i will just put blah blah blah blah...

So once we are done, we can just hit save and then Firestarter will generate our recipes collection and it will put this document inside it.

So now we can see this recipes collection on the left and inside that all the documents will be listed in the second column. This is the document ID that you can see right here, and when you click on a document, you see the contents of that document over on the right.

So what You're going to do now is just make a few more recipe documents, use our json file as an example and paste it there just click on add document button and start.

Next up, we need to be able to connect to our Firebase backend and this Firestone database from our React applications, so we'll set that up in the next readme