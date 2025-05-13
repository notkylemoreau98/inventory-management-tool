const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./models');

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Export the app for testing
module.exports = app;

// Only start server if run directly
if (require.main === module) {
  db.sequelize.sync().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
}
