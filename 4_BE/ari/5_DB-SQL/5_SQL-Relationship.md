# Understanding SQL RELATIONSHIPS, Foreign Keys and Inner Joins

So now that we've seen how you would implement all of CRUD using SQL, the next thing to look at is relationships in SQL.

So firstly let's add back the pencil that we have deleted.




Solution:

```SQL
INSERT INTO products
VALUES (2, "Pencil", 0.8, 12)
```

The next thing We are going to do is We are going to create a new table and this one is going to be called orders. This orders table has a number of fields. It has an id field which is going to be an integer that is not null, then it'll have a order number field which is going to be an integer and that allow us to keep track of all of the orders that we ever receive at our shop. Next we are going to specify a field called customer_id and it's going to be an integer. But this is the place where You'll store the customer who made this particular order.
So this will be a field that will act as a foreign key to our table which will point to a particular record in our customers table. And We are also going to do that with a product_id as well to form a relationship with our products table.

```SQL
CREATE TABLE orders(
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    product_id INT,
)
```


Now as you saw before we can set a primary key for our current table by opening a set of parentheses and putting in the name of the field that will act as the primary key, so it will be the field id.
```SQL
PRIMARY KEY (id),
```
But we can also specify a [foreign key](https://www.w3schools.com/sql/sql_foreignkey.asp). So the foreign key is going to be the key that's going to link all tables together. This is what's going to establish the relationship. As they show you down below in the link, they have customers and they have orders. And in the orders table if you have a person with id 3 you have a field that is the foreign key. So for the orders table we know that this order was made by somebody in the persons table with an id of 3. So at a later point we can retrieve all of the data in that record that's associated with this order.

And this is how you establish relationships using SQL.

So in our case we can set our customer_id field as a foreign key which references the customers table, so this is going to be the name the table, and then inside some parentheses is going to be the name of the field inside the customers table that is the primary key. That's going to be the id field.
```SQL
CREATE TABLE orders(
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    product_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
)
```

And finally we're going to do the same for our other field as well which is the product id field

```SQL
CREATE TABLE orders(
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    product_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
    FOREIGN KEY (product_id) REFERENCES products(id)
)
```


If the concept of primary key and foreign key are foreign to you then I recommend having a read of [this](https://www.w3schools.com/sql/sql_foreignkey.asp) documentation on w3schools to get to grips with the idea of how you establish relationships using SQL via these keys.


Let's hit run. And we now have a orders table. Now again orders table is completely empty but if we right click on it and we click show schema then you can see it has only four fields. First one the id is the primary key for this orders table and then two other fields act as foreign keys which link this table orders with the customers table as well as the products table.


So now We are going to create our first order record inside our orders table. id will be 1, order number of 4362 and the customer who bought it had an id and lastly the product with an id of 1.

By establishing those relationships We can later create a much larger table where We join together all of the relevant records and all of the useful columns from all three tables that We need.

So let me show you how that works by creating the first record.

```SQL
INSERT INTO orders
VALUES (1, 4362, 2, 1)
```

click run.

But now we get to use something that's really powerful from SQL which is a join. So we can join our tables together using the key word of join. Now there's a whole bunch of different Joins left join, right join, full join. But the most commonly used one is the [inner join](https://www.w3schools.com/sql/sql_join_inner.asp) and that's the one that we're going to use.

We're going to join together the parts of our tables where a particular find key matches. This is the syntax:

```SQL
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

So by SELECT we're going to select the order number from the orders table. So we would say something like orders.the name of the field. In our case our orders table is lowercase, orders.order_number.
```SELECT orders.order_number,```.
The other field that we want is from our customers table and that's the first name, last name and address. So we would write customers.first_name customers.last_name and customers.address.
```SELECT orders.order_number, customers.first_name, customer.last_name, customers.address```. Those are all the fields that we want to join together in a new table we're going to create and it's going to be from the foreign keys inside our orders table.```FROM orders```. From the orders table is where you'll find this particular foreign key match. So the next thing is inner join and the table we want to join is our customers table. And after the key word on is going to be the fields that will match. It's going to be the foreign key in our orders table that's called customer_id and it's going to match with the primary key on our customers table which is called simply id. ```INNER JOIN customers ON order.customer_id = customers.id```

All together:

```SQL
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```

Now if You hit run you get a joint table where you've got the order number, the first name, last name, address and you can see that these fields come from different tables. But we've now managed to search through all of our tables and records and we've managed to match up the orders and join them in a new table which is way more useful for us. So for example if we wanted to dispatch order number 4362 then we'll know who is going to be sent to and what their address is.

Next is going to be a challenge for you.

### Challenge

You can see that currently we only have the order joined with the customer. As a challenge I want you to join the order with the product that the order is relating to. Try to change the code so that you can complete this challenge.



SOLUTION:


```SQL



SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON orders.product_id = products.id;
```

## Joining multiple Tables

```SQL
SELECT orders.order_number, products.name, customers.first_name
FROM orders
INNER JOIN products ON orders.product_id = products.id
INNER JOIN customers ON orders.customer_id = customers.id
```

or with comma:

```SQL
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address, products.name, products.price, products.stock
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id, products ON products.id = orders.product_id;
```

we now have a brand new table that's created based off this inner join. So that is a little bit on the magic of SQL database relationships. And you can see how flexible and how powerful these relationships are when you are searching through your database and you're trying to assemble all of your data from various different tables. And you can see how flexible and how powerful these relationships are when you are searching through your database and you're trying to assemble all of your data from various different tables.