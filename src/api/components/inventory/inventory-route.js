const express = require('express');

const inventoryController = require('./inventory-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/inventory', route);

  // Get list of inventory items
  route.get('/', inventoryController.getInventory);

  // Create a new inventory item
  route.post('/', inventoryController.createInventory);

  // TODO: Get an inventory item by id
  route.get('/:id', inventoryController.getInventory);

  // TODO: Update an inventory item by id
  route.put('/', inventoryController.updateInventory);

  // TODO: Delete an inventory item by id
  route.delete('/', inventoryController.deleteInventory);
};
