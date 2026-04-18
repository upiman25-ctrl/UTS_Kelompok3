const discountService = require('./discount-Service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getDiscounts(request, response, next) {
  try {
    const discounts = await discountService.getDiscounts();


    return response.status(200).json(discounts);
  } catch (error) {
    return next(error);
  }
}

async function createDiscount(request, response, next) {
  try {
    const { title, discountCode, amount, expiredAt } = request.body;

    if (!title || !discountCode || !amount || !expiredAt) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'All fields are required');
    }

    const discount = await discountService.create(title, discountCode, amount, expiredAt);

    return response.status(200).json(discount);
  } catch (error) {
    return next(error);
  }
}

async function updateDiscount(request, response, next) {
  try {
    const { id } = request.params;
    const { title, discountCode, amount, expiredAt } = request.body;

    if (!title || !discountCode || !amount || !expiredAt) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'All fields are required');
    }

    const discount = await discountService.updateDiscount(id, title, discountCode, amount, expiredAt);

    return response.status(200).json(discount);
  } catch (error) {
    return next(error);
  }
}

async function deleteDiscount(request, response, next) {
  try {
    const success = await discountService.deleteDiscount(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete discount'
      );
    }

    return response.status(200).json({ message: 'Discount Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getDiscounts,
  createDiscount,
  updateDiscount,
  deleteDiscount,
};
