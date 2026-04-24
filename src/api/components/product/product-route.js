const express = require('express');

const productController = require('./product-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/products', route);

  route.get('/', productController.getProduct);

  route.post('/', productController.createProduct);

  route.get('/:id', productController.getProduct);

  route.put('/:id', productController.updateProduct);

  route.delete('/:id', productController.deleteProduct);
};
