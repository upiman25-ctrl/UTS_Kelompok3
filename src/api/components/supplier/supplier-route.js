const express = require('express');

const SupplierController = require('./supplier-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/supplier', route);

  // Get list of suppliers
  route.get('/', SupplierController.getSupplier);

  // Create a new supplier
  route.post('/', SupplierController.createSupplier);

  // TODO: Get a supplier by id

  // TODO: Update a supplier by id
  route.put('/', SupplierController.updateSupplier);

  // TODO: Delete a supplier by id
  route.delete('/', SupplierController.deleteSupplier);
};
