const express = require('express');

const discountController = require('./discount-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/discounts', route);

  // Get list of discounts
  route.get('/', discountController.getDiscounts);

  // Create a new discount
  route.post('/', discountController.createDiscount);

  // TODO: Get a discount by id
  route.get('/:id', discountController.getDiscounts);

  // TODO: Update a discount by id
  route.put('/:id', discountController.updateDiscount);

  // TODO: Delete a discount by id
  route.delete('/:id', discountController.deleteDiscount);
};
