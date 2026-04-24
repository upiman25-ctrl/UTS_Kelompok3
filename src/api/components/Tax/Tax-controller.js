const taxService = require('./Tax-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getTaxes(request, response, next) {
  try {
    const taxes = await taxService.getTaxes();

    return response.status(200).json(taxes);
  } catch (error) {
    return next(error);
  }
}

async function createTax(request, response, next) {
  try {
    const { name, rate, isActive } = request.body;

    if (!name || !rate || !isActive) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const tax = await taxService.createTax(name, rate, isActive);

    return response.status(200).json(tax);
  } catch (error) {
    return next(error);
  }
}

async function updateTax(request, response, next) {
  try {
    const { id } = request.params;
    const { name, rate, isActive } = request.body;

    if (!name || !rate || !isActive) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const tax = await taxService.updateTax(id, name, rate, isActive);

    return response.status(200).json(tax);
  } catch (error) {
    return next(error);
  }
}

async function deleteTax(request, response, next) {
  try {
    const success = await taxService.deleteTax(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete tax'
      );
    }

    return response.status(200).json({ message: 'Tax Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getTaxes,
  createTax,
  updateTax,
  deleteTax,
};
