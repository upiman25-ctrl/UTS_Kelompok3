const addressService = require('./address-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAddresses(req, res, next) {
  try {
    const result = await addressService.getAddresses();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function createAddress(req, res, next) {
  try {
    const { name, address, city, postalCode } = req.body;

    if (!name || !address || !city || !postalCode) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Semua field wajib diisi'
      );
    }

    const result = await addressService.createAddress(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function updateAddress(req, res, next) {
  try {
    const { id } = req.params;

    const result = await addressService.updateAddress(id, req.body);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function deleteAddress(req, res, next) {
  try {
    const { id } = req.params;

    const result = await addressService.deleteAddress(id);

    return res.status(200).json({
      message: 'Address deleted',
      result,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
};
