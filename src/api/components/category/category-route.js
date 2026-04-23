const express = require('express');

const categoryController = require('./category-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/categories', route);

  // Get list of categories
  route.get('/', categoryController.getCategory);

  // Create a new category
  route.post('/', categoryController.createCategory);

  // TODO: Get a category by id
  route.get('/:id', categoryController.getCategory);

  // TODO: Update a category by id
  route.put('/:id', categoryController.updateCategory);

  // TODO: Delete a category by id
  route.delete('/:id', categoryController.deleteCategory);
};
