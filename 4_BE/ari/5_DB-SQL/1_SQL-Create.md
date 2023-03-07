# SQL COMMANDS: CREATE TABLE and INSERT data

So last time we heard about the pros and cons of SQL databases as well as noSQL databases but nothing is truer than having tried it yourself. So let's have a go at creating a database using a SQL based database and seeing for ourselves exactly how it works.

A great resource in terms of documentation for a SQL is on [w3schools](https://www.w3schools.com/sql/). You can see all of the SQL or the Structured Query Language syntax being documented here and it's a really good guide on getting familiar with this essentially new programming language. 

The way SQL works is you have these keywords such as ```SELECT``` or ```FROM``` or ```CREATE``` or ```TABLE``` and you tend to write them in uppercase and using this Structured Query Language we can create tables, manipulate them, update, destroy, etc..


Now with every single type of database the main things that you'll be doing with it is simply create, read, update, destroy. Or in database lingo it's known as CRUD.

 * CRUD

 * C => Create

 * R => Read

 * U => Update

 * D => Destroy

So for every single database the first thing to do is to get yourself used to doing CRUD using that particular database.


## So let's try it out with a SQL based database.

## C for Create

Head to [sql lite online](https://sqliteonline.com/) Since SQL is optional for us we won't be installing anything but if you are interested to learn more and want to use it with express check out [pgadmin](https://www.pgadmin.org/download/) tool and [sequelize](https://sequelize.org/) package.

sqliteonline.com is a website that creates a playground environment which allows you to try out using a SQL like database and to get familiar with some of the query language and just see how it works. If you click on the link you will get taken to this database it has demo table on the sidenav and in the middle we will Create a new table that we will use:

```SQL
    CREATE TABLE customers (
       id INT NOT NULL,
       first_name STRING,
       last_name STRING,
       address VARCHAR(255),
       PRIMARY KEY (id)
      );
```

[sql data types](https://www.w3schools.com/sql/sql_datatypes.asp)

CREATE TABLE tablename => creates a new table with specified name
id int => id or pk(primary key) will be an integer
address varchar(255) is a char string with maximum length of 255 characters 


The first thing we're going to do is we're going to replicate that table structure that we saw earlier. We're going to recreate Products table that we had but this time using real SQL code.

So we need another Table for our Products, Challenge use [this](https://www.w3schools.com/sql/sql_create_table.asp) to create a new Table:

It needs:

 * id with pk

 * name that can be a string

 * price check which datatype fits best

solution:


```SQL
CREATE TABLE products(
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  	PRIMARY KEY (id)
)
```

then click run, as soon as new table gets created click on the dropdown button. You can see it's empty

## So let's add some data to it

[what we will need](https://www.w3schools.com/sql/sql_insert.asp)

There are two ways inserting data into tables

first specific:

```SQL
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...); 
```

If you were to insert values for each and every single column, then you don't actually need this part and you can simply just specify all the values:

```SQL
INSERT INTO table_name
VALUES (value1, value2, value3, ...); 
```

Let's go ahead and do that for our product table.

```SQL
INSERT INTO products
VALUES (1, "pen", 1.20)
```

Now right click on products and click on Select (show table) Our data is inside!

Do the same for customers.


Now if we wanted to skip a field so for example if we were to add another record which is not the product we have which is pencil but at the moment we haven't yet priced up the pencils so we don't have a value for its price yet. If we wanted to insert into our table products but we don't yet have the value for all of the columns then you can simply:

```SQL
INSERT INTO products (id, name)
VALUES (2, "Pencil")
```

And now when we show our products table again then you can see the second record has an id, has a name but it doesn't have a price. Price is actually null right now.


Now remember earlier on when we created our products schema, so you if right click and say SQL schema, you can see that the id field cannot be null. So it means if we did not specify ID and provided only name and price. If You hit run you'll see that I get an error in here and it says, 'NOT NULL constraint failed'. It's because products.id cannot be null.

This is just a little bit of validation to keep your database well organized and following the structure that we specified. So that was how you would create a new table using the Structured Query Language and also how you would start inserting pieces of data into your table.