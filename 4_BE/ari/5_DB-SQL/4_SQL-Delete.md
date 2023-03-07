# SQL COMMANDS: DELETE

## D is for Delete

Now this time we're going to look at the last letter of CRUD which is DELETE.

If we wanted to delete records then we can simply write DELETE FROM table_name WHERE something meets a certain condition:

```SQL
DELETE FROM table_name
WHERE condition;
```

So for example if We want to delete our record of our pencil say if We no longer sell pencils anymore in our shop then You can simply say:

```SQL
DELETE FROM products
WHERE name = "Pencil"
```

Now again be careful that you don't run the statement without a WHERE statement because that will delete everything in your products table and you'll end up losing all of the data. So it's again a dangerous statement to execute and make sure that you check your statement before you hit the run button. And now our products table only has one entry left. But through this process you've seen how we can use the Structured Query Language to Create, Read, Update and Delete data from our SQL table.