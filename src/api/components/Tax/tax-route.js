const express = require('express');

const taxController = require('./Tax-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/taxes', route);

  // Get list of taxes
  route.get('/', taxController.getTaxes);

  // Create a new tax
  route.post('/', taxController.createTax);

  // TODO: Get a tax by id
  route.get('/:id', taxController.getTaxes);

  // TODO: Update a tax by id
  route.put('/:id', taxController.updateTax);

  // TODO: Delete a tax by id
  route.delete('/:id', taxController.deleteTax);
};
