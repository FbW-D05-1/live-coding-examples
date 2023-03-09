# MongoDB CRUD Operations in the Shell:Delete

So now that we have learned how to create, read and update using MongoDB in the Mongo shell now it's time to look at how we would delete data from our collections.

And again if You scroll down in CRUD documentation we've got a section that tells us how to do this. And you can see that the two main methods we'll rely on is deleteOne and deleteMany. With an example:

```
db.collection.deleteOne()
db.collection.deleteMany()
```

So you would say db.collection name.deleteMany or deleteOne and in the filter you would specify which records you want to delete.

This is a good opportunity to translate what you see in the [documentation](https://www.mongodb.com/docs/manual/crud/) to actual working code that does what you want it to. I want you to remove the second record that we added which is the pencil record by reading and using the documentation on MongoDB.



Solution:

```
db.products.deleteOne({_id: 2})
```