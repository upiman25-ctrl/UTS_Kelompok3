const express = require('express');
const addressController = require('./address-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/address', route);

  route.get('/', addressController.getAddresses);
  route.post('/', addressController.createAddress);
  route.put('/:id', addressController.updateAddress);
  route.delete('/:id', addressController.deleteAddress);
};
