const express = require('express');

const ShiftController = require('./shift-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/shift', route);

  // Get list of shifts
  route.get('/', ShiftController.getShift);

  // Create a new shift
  route.post('/', ShiftController.createShift);

  // TODO: Get a shift by id
  route.get('/:id', ShiftController.getShift);

  // TODO: Update a shift by id
  route.put('/', ShiftController.updateShift);

  // TODO: Delete a shift by id
  route.delete('/', ShiftController.deleteShift);
};
