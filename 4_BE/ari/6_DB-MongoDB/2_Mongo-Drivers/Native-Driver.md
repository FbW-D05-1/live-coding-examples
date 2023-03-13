# Working with the Native MongoDB Driver

What we learned until now is pretty much MongoDB in its purest form in an isolated setting. But that's no use to us because we want to build applications that have databases.

So we need to learn how to integrate all MongoDB database with on Node.js application.

Now when you're creating a Node app that needs to connect to a MongoDB database there's essentially two options for you to choose from.

One is to use the MongoDB native driver that we're going to talk about very quickly.

Another is to use a ODM or an Object Document Mapper that's called mongoose which we will do a bit later.

Now the most popular way of working with MongoDB and Node.js is through using this package called mongoose. And the reason is because it vastly simplifies and cuts down on the code that's required in order to work with your MongoDB database. But I want to show you first how the native MongoDB driver would work and then we'll go through how to use mongoose just so that you can see for yourself just how much easier it is to incorporate mongoose and it makes your life as a developer so much better. But first let's get started and take a look at how we would use the MongoDB native driver.

Firstly I want to head over to the [MongoDB documentation](https://www.mongodb.com/docs/drivers/) for new with atlas and we will use [this](https://mongodb.github.io/node-mongodb-native/3.5/quick-start/quick-start/) one without atlas

And here we're going to head over to the tab that's called drivers. And on the left hand panel you can see that there's a whole bunch of drivers for different languages.

Now the driver is what's going to enable our MongoDB to interact with our application and depending on which language your application was developed with then you'll need to use a different driver. Now in our case we're going to choose Node.js and we're going to view the latest documentation. And from here we're going to head over to quick starts and it details pretty much step by step how you would get started using the native MongoDB Node.js driver.

So essentially what we're trying to do is we're trying to glue together our MongoDB database with our Node.js application. And this is going to be the syntax and the code and we're going to install the driver to enable us to do that.

First things first, we're going to need a new project.

```
mkdir fruits
```

```
cd fruits
```

```
touch app.js
```

```bash
npm init -y
```

Install mongoDB driver

```
npm i mongodb@3.5
```

So now all we have to do is open up our app.js inside VSC and get started developing on your Node JS application that integrates with a MongoDB database.

copy paste this:

```js
//jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
// assert is basically testing
// assert that just validates our data entry and our connection to the MongoDB database.
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

```

And the reason why I'm walking you through this and explaining the code is that in reality most developers who are working with Node and MongoDB will rarely use the native MongoDB driver. Now it's not because it's no good, it works and allows a lot of personalization and you can drill down to the specifics and you can set up and use your MongoDB database with a high level of control.

All right so now that we have created this, let's go ahead and run our app.js using again node app.js and you can see we get a error. And it says MongoNetworkError failed to connect to server. you have to run mongod again

OK so now that we have it connected successfully to our Mongo server the next part is adding some data to our database.

So how do we do that?

Well it's back to the documentation and the next part is of course insert a document.

```js
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
```

And down here you can see that the next few lines are dedicated to validation. So they've added a whole bunch of asserts. And if we go through them line by line,

```js
function(err, result) {
  //this one says validate to make sure that there are no errors when we inserted our document.
    assert.equal(err, null);
    //ensures that we have three results that are inserted into our collection. 
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    // And if that is so then we're going to log inserted three documents into the collection. 
    console.log("Inserted 3 documents into the collection");
    // next part is to simply run that function inside our insert documents function and they show you that client.
    callback(result);
  });

```

in client.connect:

```js
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

 insertDocuments(db, () => {
  client.close();
 })
});
```

So now let's hit save and let's again run our code with node app.js and you can see we've successfully connected to the server and we've inserted three documents into the collection.

Now run in your mongo terminal show dbs and fruitsDB should be there

run these to verify everything worked

```
use fruitsDB

db.fruits.find()
```
and if everything was correct you should have brand new entries with specified fruits

So the next step is how do we get our app.js to find all of these records? How do we read our data inside our Node.js app?

Well it's only a short scroll away.

So the next part is find all documents and let's just go ahead and add this into our code:

```js
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
```

change client.connect:

```js
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

 findDocuments(db, function() {
      client.close();
    });
});
```

So now you can see that we've found the following records and this printed in here is an array of Javascript objects and you can see it looks very similar to what we've got in the Mongo shell but what's logged here are actually the documents from our MongoDB but here we've actually got our Javascript objects. So if we now have access to these living Javascript objects inside an array in our app.js then we can use our Javascript code and Node.js to do whatever it is that we wish with it.

As you can see this code is very very wordy and there's a lot of it that's just boilerplate code that you have to add every single time you use the native MongoDB driver. And for some people especially if you want to develop applications quickly it can be a bit of a pain.

that's why we have mongoose and it will vastly simplify the code that we have here and we will walk through how to use mongoose to make your life developing Mongo and node apps so much easier.