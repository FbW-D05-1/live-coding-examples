# MongoDB CRUD Operations in the Shell:Update

So now we can learn about how to update our data inside the database by adding a stock value to each of our documents.
At the moment, we have two products pen and pencil and they only have an id, a name and a price field.

If I wanted to update one of the records with a stock value as well then I might say something like db.product.updateOne() and inside my parentheses I will insert the query criteria.

```
db.products.updateOne({_id: 1}, {$set: {stock: 32}})

```

First input which product to update and second what we want to update there and we get:

```
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

```

which again means our document was modified/ updated.

Now if I use that product.find again you can see that my pen now has a stock value associated with it as well.

```
db.products.find()
```

So now it's time for a challenge.

I want you to update our second document that has an id of 2 to have a stock field which has a value of 12.


Solution: 

```
db.products.updateOne({_id: 2}, {$set: {stock: 12}})

```

Now both of our products have stock.