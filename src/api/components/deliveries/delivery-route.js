const express = require('express');
const deliveryController = require('./delivery-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/delivery', route);

  route.get('/options', deliveryController.getOptions);
  route.post('/calculate', deliveryController.calculateCost);

  route.post('/', deliveryController.createDelivery);
  route.get('/', deliveryController.getDeliveries);

  route.put('/status/:id', deliveryController.updateStatus);
  route.put('/address/:id', deliveryController.updateAddress);

  route.delete('/:id', deliveryController.deleteDelivery);
};
