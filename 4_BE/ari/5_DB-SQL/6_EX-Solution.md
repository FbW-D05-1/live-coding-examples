 2. SELECT * FROM employees;

 3. SELECT * FROM employees WHERE job_title = 'Software Engineer';

 4. SELECT * FROM employees WHERE department = 'IT';

 5. SELECT * FROM employees WHERE salary > 50000;

 7. SELECT * FROM employees WHERE location = 'New York';

 8. SELECT * FROM employees WHERE name LIKE 'A%';

 9. SELECT department, COUNT(*) FROM employees GROUP BY department;

 10. SELECT * FROM employees ORDER BY salary DESC;

 11. SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);



STUDENTS

Create a table with at least 3 columns and insert data into it
 ```SQL
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  major VARCHAR(50)
);

INSERT INTO students (id, name, major)
VALUES
(1, 'John', 'Computer Science'),
(2, 'Jane', 'Biology'),
(3, 'Bob', 'History');
```

 1. UPDATE students SET major = 'Psychology' WHERE name = 'John';

 2. DELETE FROM students WHERE name = 'Bob';

 3. SELECT * FROM students;

 4. SELECT * FROM students WHERE major = 'Computer Science';

 5. SELECT * FROM students WHERE name LIKE 'J%';

 6. SELECT major, COUNT(*) FROM students GROUP BY major;

 7. SELECT * FROM students ORDER BY name;

 8. SELECT * FROM students WHERE id = (SELECT MAX(id) FROM students);

 9. SELECT * FROM students WHERE id = (SELECT MIN(id) FROM students);

 10. SELECT * FROM my_table WHERE gender = 'Female';

 11. SELECT * FROM my_table WHERE gpa > 3.5;

 12. SELECT name, gpa FROM my_table WHERE gpa = (SELECT MAX(gpa) FROM my_table);

 13. SELECT AVG(gpa) FROM my_table;

 14. SELECT AVG(age) FROM my_table WHERE gender = 'Male';

 15. SELECT COUNT(*) FROM my_table;

 16. UPDATE my_table SET gpa = 3.8 WHERE name = 'Hosam';

 17. DELETE FROM my_table WHERE name = 'Bob';

 18. SELECT * FROM my_table ORDER BY age ASC;