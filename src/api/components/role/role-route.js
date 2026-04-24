const express = require('express');

const roleController = require('./role-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/role', route);

  // Get list of roles
  route.get('/', roleController.getRole);

  // Create a new role
  route.post('/', roleController.createRole);

  // TODO: Get a role by id
  route.get('/:id', roleController.getRole);

  // TODO: Update a role by id
  route.put('/:id', roleController.updateRole);

  // TODO: Delete a role by id
  route.delete('/:id', roleController.deleteRole);
};
