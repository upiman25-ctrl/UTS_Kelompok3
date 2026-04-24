const reservationService = require('./reservation-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getreservations(request, response, next) {
  try {
    const reservation = await reservationService.getreservation();

    return response.status(200).json(reservation);
  } catch (error) {
    return next(error);
  }
}

async function createreservation(request, response, next) {
  try {
    const {  table, date } = request.body;

    if (!table || !date) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Table and date are required'
      );
    }

    const reservation = await reservationService.create(  table, date);

    return response.status(200).json(reservation);
  } catch (error) {
    return next(error);
  }
}

async function updatereservation(request, response, next) {
  try {
    const { id } = request.params;
    console.log(id);
    const { table, date } = request.body;

    if (!id || !table || !date) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Id, table, and date are required'
      );
    }

    const reservation = await reservationService.updatereservation(
      id,
      table,
      date
    );

    return response.status(200).json(reservation);
  } catch (error) {
    return next(error);
  }
}

async function deletereservation(request, response, next) {
  try {
    const success = await reservationService.deletereservation(
      request.params.id
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete table'
      );
    }

    return response
      .status(200)
      .json({ message: 'reservation Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getreservations,
  createreservation,
  updatereservation,
  deletereservation,
};
