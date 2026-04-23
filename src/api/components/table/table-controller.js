const tableService = require('./table-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function gettable(request, response, next) {
  try {
    const table = await tableService.gettable();

    return response.status(200).json(table);
  } catch (error) {
    return next(error);
  }
}

async function createtable(request, response, next) {
  try {
    const { id, orders, date, waiter, catatan } = request.body;

    if (!id || !orders || !date || !waiter || !catatan) {
      console.log(id, orders, date, waiter, catatan);

      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Id is required');
    }

    const table = await tableService.create(id, orders, date, waiter, catatan);

    return response.status(200).json(table);
  } catch (error) {
    return next(error);
  }
}

async function updatetable(request, response, next) {
  try {
    const { id } = request.params;
    const { orders, date, waiter, catatan } = request.body;

    if (!id || !orders || !date || !waiter || !catatan) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'orders,date,waiter,catatan is required'
      );
    }

    const table = await tableService.updatetable(
      id,
      orders,
      date,
      waiter,
      catatan
    );

    return response.status(200).json(table);
  } catch (error) {
    return next(error);
  }
}

async function deletetable(request, response, next) {
  try {
    const success = await tableService.deletetable(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete table'
      );
    }

    return response.status(200).json({ message: 'table Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  gettable,
  createtable,
  updatetable,
  deletetable,
};
