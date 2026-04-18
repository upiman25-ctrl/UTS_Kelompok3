const deliveryService = require('./delivery-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getOptions(req, res, next) {
  try {
    const result = await deliveryService.getOptions();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function calculateCost(req, res, next) {
  try {
    const { items, distance } = req.body;

    if (!items || !distance) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Items dan distance wajib diisi'
      );
    }

    const result = await deliveryService.calculateCost({ items, distance });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function createDelivery(req, res, next) {
  try {
    const { userId, customerName, driverName, itemName, address } = req.body;

    if (!userId || !customerName || !driverName || !itemName || !address) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Semua field wajib diisi'
      );
    }

    const result = await deliveryService.createDelivery(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function getDeliveries(req, res, next) {
  try {
    const result = await deliveryService.getDeliveries();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function updateStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await deliveryService.updateStatus(id, status);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function updateAddress(req, res, next) {
  try {
    const { id } = req.params;
    const { address } = req.body;

    const result = await deliveryService.updateAddress(id, address);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function deleteDelivery(req, res, next) {
  try {
    const { id } = req.params;

    const result = await deliveryService.deleteDelivery(id);

    return res.status(200).json({
      message: 'Delivery deleted',
      result,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getOptions,
  calculateCost,
  createDelivery,
  getDeliveries,
  updateStatus,
  updateAddress,
  deleteDelivery,
};
