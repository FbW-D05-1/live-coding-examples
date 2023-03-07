# SQL COMMANDS: READ, SELECT and WHERE

## R for Read

In this episode of dbz we're going to look at the next part of CRUD which is 'R' for Read.

Well the most often used keyword is the SQL [SELECT](https://www.w3schools.com/sql/sql_select.asp) keyword. And what this does is it allows you to read the data from your database.

So for example whenever I right clicked on my tables and I clicked on show table you can see above

```SELECT * FROM 'products'```

syntax show up automatically because I'm able to show the table by running this statement. And what it says is SELECT * FROM products. Products is the table that I want to see and * stands for a wildcard. So it means select everything from the products table and this is why we see everything in our table. Now if you only wanted one column or two columns from this table then instead of asterix or * you can simply write:

```SELECT name, price FROM 'products'```

And if you hit run you can see we've now removed that id column

Now what if you only wanted a particular row from your database?

Say for example you only wanted to see the first row, the one with an id of one.

Well this is when you would need to search through your database by using the [WHERE](https://www.w3schools.com/sql/sql_where.asp) keyword.

```SQL
SELECT column1, column2, ...
FROM table_name
WHERE condition; 


for example
WHERE Country='Mexico'; 

or
WHERE CustomerID=1; 
```

so it works with id let's try it out for ourselves

```SQL
SELECT * FROM products WHERE id=1; 
```

So now if I hit run it isolates that single record where the id is equal to 1 and we select a single row.

Challenge: Try to select the pencil without using id.


So you can use things such as equal or greater or less than between like in all sorts of things to modify this WHERE statement so that you can select the pieces of data that you need. So this statement is for reading data from your database and grabbing the data that meet certain criteria. And you'll see the statement a lot when you start working with SQL databases.

some examples:

```SQL
WHERE Price BETWEEN 50 AND 60;


SELECT * FROM Products
WHERE Price > 30;


SELECT * FROM Products
WHERE Price <= 30;


SELECT * FROM Customers
WHERE City IN ('Paris','London');

SELECT * FROM Customers
WHERE NOT City = 'Berlin';


SELECT * FROM Customers
WHERE City = 'Berlin'
AND PostalCode  = 12209;


SELECT * FROM Customers
WHERE City = 'Berlin'
OR City  = 'London';
```

Fin