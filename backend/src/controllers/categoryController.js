const db = require('../models');
const Category = db.Category;

exports.getAll = async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name });
  res.status(201).json(category);
};
