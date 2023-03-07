# Updating Single Values and Adding Columns in SQL

## U is for Update

In this readme we're going to tackle the 'U' in CRUD which is how do you update records in your database.

So at the moment if we look at the entire products table, you remember that the price for our pencil is set as null because when we created this record we didn't have a price yet. So we left it blank. If I wanted to update that record to now provide a value for the price of my pencil then I can use the UPDATE statement.

And this is how the [syntax](https://www.w3schools.com/sql/sql_update.asp) looks:

```SQL
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition; 
```

We use the UPDATE keyword and we specify the table we want to update and then we set the values that we want to update and we can specify a particular condition to only update the records that we were interested in updating.

So in our case we would write something like UPDATE and the table we want to update is of course again the products table and then we write set and we want to set the price to equal 0.8 as the price of our pencil:

```SQL
UPDATE products
SET price = 0.80
```

Now this is quite a dangerous statement because if You hit run right now it's going to set everything in your table to have a price of 0.8.

So it's really important that you specify the WHERE statement so that it only sets the price of 0.8 where the record has an id equal to 2.

```SQL
UPDATE products
SET price = 0.80
WHERE id = 2;
```
So now it's going to find this particular record and only set its price to 0.8.
So now if you hit run and let's see our products table again, you can see our pencil now has a price and we don't have any null values anymore.

Now what if you wanted to change the table instead of a particular record? Say in our product table what if we also wanted to keep track of the stock of each of our products? Well then we would need to add a new column.

## Altering the tables

this is the [ALTER table](https://www.w3schools.com/sql/sql_alter.asp) syntax:

It's used to add, delete or modify columns in an existing table which is exactly what we want

```SQL
ALTER TABLE table_name
ADD column_name datatype; 
```

for us:

```SQL
ALTER TABLE products
ADD stock INT
```

So now if we hit run and we view our products table you can see we now have an extra column tagged on at the end but they both have null values.

### Challenge

**Challenge add 32 pens and 12 pencils to stock.**

So as a challenge, I want you to update both of these records so that they will have a stock value and the value of the stock should correspond to what you see in this table.





Solution:
```SQL



UPDATE products
SET stock = 32
WHERE id = 1;

UPDATE products
SET stock = 12
WHERE id = 2;

```

And now we have stock values for both of our products and our table is now complete without any null values. But you can start to see how painful it can be updating some of these values and especially when you haven't accounted for it when you created the schema.