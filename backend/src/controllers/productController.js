const db = require('../models');
const Product = db.Product;
const Category = db.Category;

exports.getAll = async (req, res) => {
  const products = await Product.findAll({ include: Category });
  res.json(products);
};

exports.create = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;

    // Handle optional image
    const imageUrl = req.file ? req.file.location : null;

    const newProduct = await Product.create({
      name,
      description,
      price,
      categoryId,
      imageUrl,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};
