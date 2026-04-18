const inventoryService = require('./inventory-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getInventory(request, response, next) {
  try {
    const inventory = await inventoryService.getInventory();

    return response.status(200).json(inventory);
  } catch (error) {
    return next(error);
  }
}

async function createInventory(request, response, next) {
  try {
    const { name, count, types, expiredAt } = request.body;

    if (!name || !count || !types || !expiredAt) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const inventory = await inventoryService.createInventory(
      name,
      count,
      types,
      expiredAt
    );

    return response.status(200).json(inventory);
  } catch (error) {
    return next(error);
  }
}

async function updateInventory(request, response, next) {
  try {
    const { name, count, types, expiredAt } = request.body;

    if (!name || !count || !types || !expiredAt) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const inventory = await inventoryService.updateInventory(
      name,
      count,
      types,
      expiredAt
    );

    return response.status(200).json(inventory);
  } catch (error) {
    return next(error);
  }
}

async function deleteInventory(request, response, next) {
  try {
    const success = await inventoryService.deleteInventory(request.body.name);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete inventory'
      );
    }

    return response
      .status(200)
      .json({ message: 'Inventory Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};
