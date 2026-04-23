const metodePembayaranService = require('./Metode_pembayaran-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getMetodePembayaran(request, response, next) {
  try {
    const metodePembayaran =
      await metodePembayaranService.getMetodePembayaran();

    return response.status(200).json(metodePembayaran);
  } catch (error) {
    return next(error);
  }
}

async function createMetodePembayaran(request, response, next) {
  try {
    const { name, description, isActive } = request.body;

    if (!name || !description || !isActive) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const metodePembayaran = await metodePembayaranService.create(
      name,
      description,
      isActive
    );

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
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const metodePembayaran =
      await metodePembayaranService.updateMetodePembayaran(
        id,
        name,
        description,
        isActive
      );

    return response.status(200).json(metodePembayaran);
  } catch (error) {
    return next(error);
  }
}

async function deleteMetodePembayaran(request, response, next) {
  try {
    const success = await metodePembayaranService.deleteMetodePembayaran(
      request.params.id
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete metode pembayaran'
      );
    }

    return response
      .status(200)
      .json({ message: 'Metode Pembayaran Deleted Successfully' });
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
