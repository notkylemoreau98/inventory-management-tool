const db = require('../models');
const Product = db.Product;
const Category = db.Category;

exports.getAll = async (req, res) => {
  const products = await Product.findAll({ include: Category });
  res.json(products);
};

exports.create = async (req, res) => {
  const { name, price, categoryId } = req.body;
  const product = await Product.create({ name, price, CategoryId: categoryId });
  res.status(201).json(product);
};
