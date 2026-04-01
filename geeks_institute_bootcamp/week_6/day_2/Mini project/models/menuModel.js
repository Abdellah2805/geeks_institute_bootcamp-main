const db = require('../db');

const getAllItems = async () => {
    const result = await db.query('SELECT * FROM menu_items ORDER BY item_id ASC');
    return result.rows;
};

const getItemByName = async (name) => {
    const result = await db.query('SELECT * FROM menu_items WHERE item_name = $1', [name]);
    return result.rows[0];
};

const createItem = async (name, price) => {
    const result = await db.query(
        'INSERT INTO menu_items (item_name, item_price) VALUES ($1, $2) RETURNING *',
        [name, price]
    );
    return result.rows[0];
};

const updateItem = async (id, name, price) => {
    const result = await db.query(
        'UPDATE menu_items SET item_name = $1, item_price = $2 WHERE item_id = $3 RETURNING *',
        [name, price, id]
    );
    return result.rows[0];
};

const deleteItem = async (id) => {
    const result = await db.query('DELETE FROM menu_items WHERE item_id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = { getAllItems, getItemByName, createItem, updateItem, deleteItem };