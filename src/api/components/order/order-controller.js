const orderService = require('./order-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

// GET ALL
async function getorders(request, response, next) {
  try {
    const orders = await orderService.getorder();
    return response.status(200).json(orders);
  } catch (error) {
    return next(error);
  }
}

// CREATE
async function createorder(request, response, next) {
  try {
    const {  orders, date, waiter, catatan } = request.body;

    if (!orders || !date || !waiter || !catatan) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Id, orders, date, waiter, and catatan are required'
      );
    }

    const newOrder = await orderService.create( orders, date, waiter, catatan);

    return response.status(200).json(newOrder);
  } catch (error) {
    return next(error);
  }
}

// UPDATE
async function updateorder(request, response, next) {
  try {
  const { id} = request.params;
    const {  orders, date, waiter, catatan } = request.body;

    if (!id || !orders || !date || !waiter || !catatan) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Id, orders, date, waiter, and catatan are required'
      );
    }

    const updatedOrder = await orderService.updateorder(
      id,
      orders,
      date,
      waiter,
      catatan
    );

    return response.status(200).json(updatedOrder);
  } catch (error) {
    return next(error);
  }
}

// DELETE
async function deleteorder(request, response, next) {
  try {
    const success = await orderService.deleteorder(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete order'
      );
    }

    return response.status(200).json({ message: 'Order Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getorders,
  createorder,
  updateorder,
  deleteorder,
};
