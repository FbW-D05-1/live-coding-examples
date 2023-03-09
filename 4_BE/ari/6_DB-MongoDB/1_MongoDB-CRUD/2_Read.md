# MongoDB CRUD Operations in the Shell:Reading & Queries

This time I want to show you how we can now read the data that's stored inside our database.
Again if we type in ```show collections``` you can see we have only a single collection called products but inside products we can find all of the data.

Back in [docs](https://www.mongodb.com/docs/manual/crud/) you can see that in order to read data from our database we can use a method called find. Following the same format we say 

```db.collection.find()```

And inside the find method we pass in a query criteria. In docs case they're looking to find data within the user's collection where the age is greater than 18. And if we click on this method then we get taken to a detailed page on this find method. And we've got the definition, behavior and examples all written out in this very long document.

You can see the way that you use it is you pass in two parameters. One is query and one is projection and they're both optional. So you can simply write db.collection.find with empty parentheses and you will find everything.

Let's try that:

```
db.products.find()
```

And now if You hit enter You'll bring up all the documents that are inside your product collection and that is your pen and your pencil.

But if you wanted to make a specific query for a piece of data in your collection then you can add a query in there. And you can use query operators to narrow down on the data that you're going to get back. And the query operators include things such as greater than less than or less than or equal. And you can combine your queries using the logical operators and you have a very fine level of control in terms of what data you want to read from your database.

For example if we were to query our database for a specific record, we could say something like:

```
db.products.find({name: "Pencil"})
```

And now if You hit enter you can see that it only brings you the data where this name field matches your query criteria which is Pencil. And now You can read specific documents inside your collection or inside your database through the use of a specific query.

Another query You could have say for example if You had loads of products and you only wanted to find the ones that were priced above $1, then:

```
db.products.find({price: {$gt: 1}})
```

"$gt" => greater than from [docs](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)

So we know we've got pencil that's priced at 0.8 and pen that's priced price one 1.2. But if you run this code you only get back my pen document which has a price that is greater than 1.0.

You can get really fancy with the queries that you make to using the find method. And you can drill down to the exact piece of data that you want from your database.

If we look back at the find method, you can see that there's a second parameter which is called projection. And this again is optional which is why even though we didn't include it in our code it didn't really matter.

You don't have to. But you can include it if you wanted to specify the fields to return.

If we head back to that CRUD documentation you can see that for this particular query they're looking for documents inside the users collection where the age field is greater than 18 and their projection or the fields that they want to return are the name and the address.
So 1 means true and 0 means false.

So in our case for example we could say:

```
db.products.find({_id: 1}, {name: 1})
```
basically means something like this

```
db.products.find({_id: 1}, {name: 1, price: 0})
```
show me only name and hide everything else

Now whenever you use find, id always comes back by default. But you can use the projection to set it to be false:

```
db.products.find({_id: 1}, {_id: 0, name: 1})
```

and this will only give you the name. But the second parameter inside this find method is a way for us to specify which fields in the data do we want back. And in ```{_id: 1}, {_id: 0, name: 1}``` case we only want the name and nothing else. In ```{name: 1, price: 0}``` case we want the name as well as the id which is included by default and if we don't specify one, we get all the fields in that record.