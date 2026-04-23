const express = require('express');

const metode_pembayaranController = require('./Metode_pembayaran-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/Metode-pembayaran', route);

  // Get list of metode pembayaran
  route.get('/', metode_pembayaranController.getMetodePembayaran);

  // Create a new metode pembayaran
  route.post('/', metode_pembayaranController.createMetodePembayaran);

  // TODO: Get a metode pembayaran by id
  route.get('/:id', metode_pembayaranController.getMetodePembayaran);

  // TODO: Update a metode pembayaran by id
  route.put('/:id', metode_pembayaranController.updateMetodePembayaran);

  // TODO: Delete a metode pembayaran by id
  route.delete('/:id', metode_pembayaranController.deleteMetodePembayaran);
};
