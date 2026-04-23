const express = require('express');

const metodePembayaranController = require('./Metode_pembayaran-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/metode-pembayaran', route);

  // Get list of metode pembayaran
  route.get('/', metodePembayaranController.getMetodePembayaran);

  // Create a new metode pembayaran
  route.post('/', metodePembayaranController.createMetodePembayaran);

  // Get a metode pembayaran by id
  route.get('/:id', metodePembayaranController.getMetodePembayaranById);

  // Update a metode pembayaran by id
  route.put('/:id', metodePembayaranController.updateMetodePembayaran);

  // Delete a metode pembayaran by id
  route.delete('/:id', metodePembayaranController.deleteMetodePembayaran);
};
