const express = require('express');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/menu', menuRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});