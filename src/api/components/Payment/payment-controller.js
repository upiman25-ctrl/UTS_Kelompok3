const paymentService = require('./payment-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getPaymentMethods(request, response, next) {
  try {
    const paymentMethods = await paymentService.getPaymentMethods();

    return response.status(200).json(paymentMethods);
  } catch (error) {
    return next(error);
  }
}

async function createPaymentMethod(request, response, next) {
  try {
    const { method, discount, amount, status, paidAt } = request.body;

    if (!method || !amount) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Method and amount are required');
    }

    const paymentMethod = await paymentService.createPaymentMethod(method, discount, amount, status, paidAt);

    return response.status(200).json(paymentMethod);
  } catch (error) {
    return next(error);
  }
}

async function updatePaymentMethod(request, response, next) {
  try {
    const { id } = request.params;
    const { method, discount, amount, status, paidAt } = request.body;

    if (!method || !amount) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Method and amount are required');
    }

    const paymentMethod = await paymentService.updatePaymentMethod(id, method, discount, amount, status, paidAt);

    return response.status(200).json(paymentMethod);
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

async function deletePaymentMethod(request, response, next) {
  try {
    const success = await paymentService.deletePaymentMethod(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete payment method'
      );
    }

    return response.status(200).json({ message: 'Payment Method Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getPaymentMethods,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
