 Exercise 1: DVD Rental

When a film is deleted from the new_film table, the corresponding records in the customer_review table are automatically deleted.

This occurs because the film_id column in the customer_review table 
was defined with a Foreign Key constraint using the ON DELETE CASCADE 
referential action. Consequently, the database maintains data integrity by
ensuring that no "orphan" reviews remain linked to a non-existent film.

Exercise 2 : DVD Rental

1.
 UPDATE film 
SET language_id = 3 
WHERE film_id BETWEEN 10 AND 15;

2.
The customer table has two main foreign keys:
store_id: References the store table.
address_id: References the address table.

Impact on INSERT operations:
We cannot add a customer with a store_id or 
address_id that does not already exist in their respective tables.
The database will reject the command to maintain data integrity.

3.
DROP TABLE customer_review;

4.
SELECT COUNT(*) 
FROM rental 
WHERE return_date IS NULL;

5.
SELECT f.title, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

6.
SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%' 
AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

SELECT title 
FROM film 
WHERE length < 60 
AND rating = 'R' 
AND film_id IN (SELECT film_id FROM film_category fc JOIN category c ON fc.category_id = c.category_id WHERE c.name = 'Documentary');


 SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


SELECT f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
