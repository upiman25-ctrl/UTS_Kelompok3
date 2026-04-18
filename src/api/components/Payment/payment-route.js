const express = require('express');

const paymentController = require('./payment-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/payment', route);

  // Get list of payment methods
  route.get('/', paymentController.getPaymentMethods);

  // Create a new payment method
  route.post('/', paymentController.createPaymentMethod);

  // TODO: Get a payment method by id
  route.get('/:id', paymentController.getPaymentMethods);

  // TODO: Update a payment method by id
  route.put('/:id', paymentController.updatePaymentMethod);

  // TODO: Delete a payment method by id
  route.delete('/:id', paymentController.deletePaymentMethod);
};
