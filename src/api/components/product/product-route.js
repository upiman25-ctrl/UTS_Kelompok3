const express = require('express');

const productController = require('./product-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/products', route);

  // Get list of products
  route.get('/', productController.getProduct);

  // Create a new product   
  route.post('/', productController.createProduct);

  // TODO: Get a product by id
  route.get('/:id', productController.getProduct);

  // TODO: Update a product by id
  route.put('/:id', productController.updateProduct);

  // TODO: Delete a product by id
  route.delete('/:id', productController.deleteProduct);
};
