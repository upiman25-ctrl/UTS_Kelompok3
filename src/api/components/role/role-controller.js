const roleService = require('./role-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getRole(request, response, next) {
  try {
    const role = await roleService.getRole();

    return response.status(200).json(role);
  } catch (error) {
    return next(error);
  }
}

async function createRole(request, response, next) {
  try {
    const { name, description, permissions } = request.body;

    if (!name || !description || !permissions) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const Role = await roleService.createRole(name, description, permissions);

    return response.status(200).json(Role);
  } catch (error) {
    return next(error);
  }
}

async function updateRole(request, response, next) {
  try {
    const { name, description, permissions } = request.body;

    if (!name || !description || !permissions) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const role = await roleService.updateRole(name, description, permissions);

    return response.status(200).json(role);
  } catch (error) {
    return next(error);
  }
}

async function deleteRole(request, response, next) {
  try {
    const success = await roleService.deleteRole(request.params.id);
    if (!success) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Role not found');
    }
    const role = await roleService.deleteRole(request.params.id);

    return response.status(200).json(role);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getRole,
  createRole,
  updateRole,
  deleteRole,
};
