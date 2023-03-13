# Relationships in MongoDB

I want to show you how you might establish relationships in your database with MongoDB.

There's two main ways of doing this

and the first way is in most cases the preferred method. But what you choose will depend on the architecture of your data. So it depends on how your data relates to each other and how it's structured. 

Coming back to our shop database, let's say that we wanted to have another product so we might say something like:

```
db.products.insert(
    {
        _id: 3,
        name: "Rubber",
        price: 1.30,
        stock: 43,
        reviews: [
            {

            }
        ]
    }
)
```

So we might say that this one has an id of 3 and it's got a name of Rubber. It's got a price of 1.30 and a stock of 43. But this Rubber has also received reviews on our website. And so we can represent these reviews using an array. And inside the array we might have- we might have a few embedded documents. Every document is represented by a set of curly braces. And if we had a document that will represent the data for a review then we could embed that into another document.

So our reviews document might have say an authorName and it might have a rating.

```
db.products.insert(
    {
        _id: 3,
        name: "Rubber",
        price: 1.30,
        stock: 43,
        reviews: [
            {
                authorName: "Ali",
                rating: 5,
                review: "best rubber ever"
            }
        ]
    }
)
```

So this would be a single document and because we're embedding it inside this particular product then we can associate the relationship in this way. And it's very very natural because it means that if we had another review come in for this rubber product then we can simply append it into that array and we simply have some different data for it:

```
db.products.insert(
    {
        _id: 3,
        name: "Rubber",
        price: 1.30,
        stock: 43,
        reviews: [
            {
                authorName: "Ali",
                rating: 5,
                review: "best rubber ever"
            },
            {
                authorName: "Hosam",
                rating: 2,
                review: "tastes bad"
            }
        ]
    }
)
```

And now we've established a relationship between a single product document and a single review document. Now this style of embedding documents in each other is really well-suited to this kind of one to many kind of relationship because one product might have many reviews or one user might have created many comments. And this is a very natural way of expressing that relationship using MongoDB. If you do something like this it's easier to first write it in your IDE and then copy paste it to the terminal. and if I look through all of my products I now have a product with id 1 and a product with id 3.


As a challenge I want you to practice embedding documents inside other documents. I want you to recreate that pencil document that we deleted earlier on and to add in some reviews for that document as well.



Solution:

```










db.products.insert(
    {
        _id: 2,
        name: "Pencil",
        price: 0.80,
        stock: 12,
        reviews: [
            {
                authorName: "Ali",
                rating: 5,
                review: "best rubber ever"
            },
            {
                authorName: "Hosam",
                rating: 2,
                review: "tastes bad"
            }
        ]
    }
)
```

And now we've inserted our second document. And now you can see we've got a pen, our pencil and our rubber in our products collection.

Now another format you might see out there in the wild is you might say have two product documents, one which is the pen and the other which is the pencil and they each have a unique identifying id which is simply 1 and 2.

```
{
    _id: 1,
    name: "Pen",
    price: 1.20,
    stock: 32
}
{
    _id: 2,
    name: "Pencil",
    price: 0.80,
    stock: 12
}
```
And then you could create another collection say a collection of orders this time. And for each document in that collection you might have a order number but you might also have a field that's products ordered and this can simply be an array that references the id of the products in the products collection.
```
{
    orderNumber: 3243,
    productsOrdered: [1, 2]
    buyerId: 1
}
```
And so at a later date you can pull up the product ordered and you can find which products they are based off those IDs.