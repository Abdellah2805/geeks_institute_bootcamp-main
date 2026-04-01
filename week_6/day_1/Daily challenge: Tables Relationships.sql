Part I:

1.
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE Customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE REFERENCES Customer(id)
);

2.
INSERT INTO Customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

3.
INSERT INTO Customer_profile (isLoggedIn, customer_id) VALUES 
(true, (SELECT id FROM Customer WHERE first_name = 'John')),
(false, (SELECT id FROM Customer WHERE first_name = 'Jerome'));

4.
SELECT c.first_name 
FROM Customer c
JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

SELECT c.first_name, COALESCE(cp.isLoggedIn, false) AS isLoggedIn
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;

SELECT COUNT(*) 
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS NOT TRUE;


Part II:

1.
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

2.
INSERT INTO Book (title, author) VALUES 
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

INSERT INTO Student (name, age) VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

3.
CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_id)
);

4.
INSERT INTO Library (book_fk_id, student_id, borrowed_date) VALUES 
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');

5.
SELECT * FROM Library;

SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

SELECT AVG(s.age)
FROM Student s
JOIN Library l ON s.student_id = l.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

6.
When a student is deleted from the Student table,
all associated records in the Library junction table are
automatically deleted. This is because of
the ON DELETE CASCADE constraint defined on 
the student_id foreign key. The database ensures that no
borrowing records exist for a student who has been removed 
from the system.


7.
SELECT * FROM Library;

SELECT s.name AS student_name, b.title AS book_title
FROM Library l
JOIN Student s ON l.student_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

SELECT AVG(s.age) AS average_age
FROM Student s
JOIN Library l ON s.student_id = l.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

When a student is deleted from the Student table, all corresponding records in the Library junction table are automatically deleted.
This happens because of the ON DELETE CASCADE constraint we defined on the student_id foreign key. The database maintains referential integrity by ensuring that no borrowing records point to a student who no longer exists in the system.

