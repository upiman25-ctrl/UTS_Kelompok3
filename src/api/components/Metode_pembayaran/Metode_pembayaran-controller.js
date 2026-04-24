const metode_pembayaranService = require('./metode_pembayaran-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getMetodePembayaran(request, response, next) {
  try {
    const metodePembayaran = await metode_pembayaranService.getMetodePembayaran();

    return response.status(200).json(metodePembayaran);
  } catch (error) {
    return next(error);
  }
}

async function createMetodePembayaran(request, response, next) {
  try {
    const { name, description, isActive } = request.body;

    if (!name || !description || !isActive) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'All fields are required');
    }

    const metodePembayaran = await metode_pembayaranService.create(name, description, isActive);

    return response.status(200).json(metodePembayaran);
  } catch (error) {
    return next(error);
  }
}

async function updateMetodePembayaran(request, response, next) {
  try {
    const { id } = request.params;
    const { name, description, isActive } = request.body;

    if (!name || !description || !isActive) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'All fields are required');
    }

    const metodePembayaran = await metode_pembayaranService.updateMetodePembayaran(id, name, rate, type, isActive);

    return response.status(200).json(metodePembayaran);
  } catch (error) {
    return next(error);
  }
}

async function deleteMetodePembayaran(request, response, next) {
  try {
    const success = await metode_pembayaranService.deleteMetodePembayaran(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete metode pembayaran'
      );
    }

    return response.status(200).json({ message: 'Metode Pembayaran Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getMetodePembayaran,
  createMetodePembayaran,
  updateMetodePembayaran,
  deleteMetodePembayaran,
};
