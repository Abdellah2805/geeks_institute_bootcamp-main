Exercise 1 : Items and customers
1. All items, ordered by price (lowest to highest).

SELECT * FROM articles 
ORDER BY prix ASC;

2.Items with a price above 80 (80 included), ordered by price (highest to lowest).

SELECT * FROM articles 
WHERE prix >= 80 
ORDER BY prix DESC;

3.The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.

SELECT prenom, nom 
FROM clients 
ORDER BY prenom ASC 
LIMIT 3;


4.All last names (no other columns!), in reverse alphabetical order (Z-A)

SELECT nom 
FROM clients 
ORDER BY nom DESC;





