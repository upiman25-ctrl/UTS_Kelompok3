const express = require('express');

const orderController = require('./order-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/order', route);

  route.get('/', orderController.getorders);

  route.post('/', orderController.createorder);

  // route.get('/:id', orderController.getorder);

  route.put('/:id', orderController.updateorder);

  route.delete('/:id', orderController.deleteorder);
};
