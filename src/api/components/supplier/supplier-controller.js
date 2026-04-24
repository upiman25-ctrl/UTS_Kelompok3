const supplierService = require('./supplier-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getSupplier(request, response, next) {
  try {
    const supplier = await supplierService.getSupplier();

    return response.status(200).json(supplier);
  } catch (error) {
    return next(error);
  }
}

async function createSupplier(request, response, next) {
  try {
    const { supplierId, name, contact } = request.body;

    if (!supplierId || !name || !contact) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const supplier = await supplierService.createSupplier(
      supplierId,
      name,
      contact
    );

    return response.status(200).json(supplier);
  } catch (error) {
    return next(error);
  }
}

async function updateSupplier(request, response, next) {
  try {
    const { supplierId, name, contact } = request.body;

    if (!supplierId || !name || !contact) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const supplier = await supplierService.updateSupplier(
      supplierId,
      name,
      contact
    );

    return response.status(200).json(supplier);
  } catch (error) {
    return next(error);
  }
}

async function deleteSupplier(request, response, next) {
  try {
    const { name } = request.body;

    if (!name) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Supplier name is required'
      );
    }

    const success = await supplierService.deleteSupplier(name);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete supplier'
      );
    }

    return response
      .status(200)
      .json({ message: 'Supplier Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
