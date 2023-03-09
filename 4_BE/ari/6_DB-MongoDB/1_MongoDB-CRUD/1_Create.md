# MongoDB CRUD Operations in the Shell:Create

[docs](https://www.mongodb.com/docs/manual/crud/)

I recommend that whenever you're exploring a new database system the first thing to wrap your head around is how do you perform CRUD using that particular database. So we saw how we can create, read, update and delete data using a SQL based system such as SQL lite in the last section. In this section we're going to look at how we can do that using MongoDB on the command line.


So this is the time to open up your terminal. And after the prompt We are going to type mongod(spelled: mongo-d) or some people call it 'mon-god', and this will spin up our mongo server when you hit enter. Once you see waiting for connections on port 27017 then you are ready to go. This is kind of similar to how we had a localhost 3000. But in this case we've got a local database that's being served up on this particular port.(incase mongod doesn't work just type mongo and connection will be shown then rerun mongod)

This terminal is connected to the MongoDB database. Now leave that terminal be and open a new one. And type ```mongo``` now to verify everything is working just type ```show dbs``` if you get no error then everything is working fine


But before we create a brand new database, it's good practice to take a look at what databases we already have. How do we do that? Well if at any point you get stuck and you're inside the Mongo shell so you've got your little angle bracket showing there, you can always type help, as a cry for help, and you will be able to get a helpful list of things that you can do while using the Mongo shell. So we tried one of them ```show dbs``` And this shows the names of the database that we currently have on our local system. And you can see that by default when you install MongoDB, it comes preloaded with three databases: admin, config and local and you can see that all of them are taking up zero gigabytes of space because they're completely empty. This is what it would look like if you have a brand new configuration of MongoDB.

So let's go ahead and create our very first database.

## First Mongo DB

And to do that all we have to do is type ```use``` and then we specify the name of our database.

So let's say the I wanted to create a database again for my shop so I might call my database shopDB. I can write ```use shopDB``` and hit enter.

So now Mongo tells me that I've switched to the database that is called ShopDB. But if I write show dbs, I don't see shopDB anywhere.

Well that's because for it to be listed, it has to have some content. So we first have to give it some data. We're now ready to tackle the 'C' in CRUD and see how we can create data using MongoDB.

## C is for CREATE

If you ever want to know which database you're currently in, you can always type ```db``` hit enter and it tells you that you're currently working within the shopDB(or the name you have given to your db).

So how do we create data in our database?

This is the time to head back over to our documentation where we've got the MongoDB CRUD operations explained to us.

So what we want to do is to create and you can see that in order to create one entry or many entries into our database, the syntax looks something like this:

```
    db.collection.insertOne() New in version 3.2

    db.collection.insertMany() New in version 3.2
```

We write ```db.collection``` and this collection is actually the name of a collection. And if that collection name doesn't currently exist then by writing this line and by executing it, it will actually create that collection. And then we use a method such as ```insertOne``` or ```insertMany```. And this is an example of how you would use this method. So for example if you wanted a collection called users inside your database you would say ```db.users.insertOne``` And inside the method insertone you would pass over a Javascript object which will be the document. So it will have fields and it will have values.

```
db.users.insertOne(
    {
        name: "sue",
        age: 26,
        status: "pending"
    }
)
```

And this pretty much follows the key value pairs that we've been seeing in Javascript objects. Let's take what we learn here and let's implement it for our shopDB:

```
db.products.insertOne({_id:1, name: "Pen", price: 1.20})
```

Collections in MongoDB is kind of similar to tables in the SQL world.

if you didn't do any typos you should get this:

```
{ "acknowledged" : true, "insertedId" : 1 }
```

we can now write ```show collections``` and it will show you all the collections that currently exist in the current database which for me is shopDB. This is how easy it is to add data to our database using MongoDB. And if you look at the documentation you can see that you can either insertOne or you can insertMany.

```
db.collection.insertMany(
   [ <document 1> , <document 2>, ... ],
   {
      writeConcern: <document>,
      ordered: <boolean>
   }
)
```
document => An array of documents to insert into the collection.

writeConcern => Optional. A document expressing the write concern. Omit to use the default write concern.

Do not explicitly set the write concern for the operation if run in a transaction. To use write concern with transactions, see Transactions and Write Concern.

ordered => boolean Optional. A boolean specifying whether the mongod instance should perform an ordered or unordered insert. Defaults to true.

basically you can create multiple collections like this.
MongoDB is extremely well documented and pretty much anything you want to do with it is explained really well through the use of graphics and examples in their documentation.

## Challenge
So now it's your turn to create a new document using the Mongo shell and you're going to create the second product in our products collection which is the pencil product. (id 2, name pencil, price 0.80)

Solution:

```





db.products.insertOne({_id:2, name: "Pencil", price: 0.80})
```

So now we have a database called ShopDB that contains a single collection called products and inside this collection is two documents one with Pen data and another with Pencil data.