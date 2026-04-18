const express = require('express');

const tableController = require('./table-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/table', route);

  route.get('/', tableController.gettable);

  route.post('/', tableController.createtable);

  //  route.get('/:id', tableController.gettableById);

  route.put('/:id', tableController.updatetable);

  route.delete('/:id', tableController.deletetable);
};
