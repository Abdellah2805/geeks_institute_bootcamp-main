const menuModel = require('../models/menuModel');

const getMenu = async (req, res) => {
    try {
        const items = await menuModel.getAllItems();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMenuItem = async (req, res) => {
    try {
        const item = await menuModel.getItemByName(req.params.name);
        if (!item) return res.status(4404).json({ message: "Item not found" });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addMenuItem = async (req, res) => {
    const { name, price } = req.body;
    try {
        const newItem = await menuModel.createItem(name, price);
        res.status(201).json({ message: "Item added successfully", item: newItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        const updated = await menuModel.updateItem(id, name, price);
        if (!updated) return res.status(404).json({ message: "Item not found" });
        res.json({ message: "Item updated successfully", item: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteMenuItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await menuModel.deleteItem(id);
        if (!deleted) return res.status(404).json({ message: "Item not found" });
        res.json({ message: "Item deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getMenu, getMenuItem, addMenuItem, updateMenuItem, deleteMenuItem };