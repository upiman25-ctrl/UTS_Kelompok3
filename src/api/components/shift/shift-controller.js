const shiftService = require('./shift-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getShift(request, response, next) {
  try {
    const shift = await shiftService.getShift();

    return response.status(200).json(shift);
  } catch (error) {
    return next(error);
  }
}

async function createShift(request, response, next) {
  try {
    const { shiftId, employeeName, date, startTime, endTime } = request.body;

    if (!shiftId || !employeeName || !date || !startTime || !endTime) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const shift = await shiftService.createShift(
      shiftId,
      employeeName,
      date,
      startTime,
      endTime
    );

    return response.status(200).json(shift);
  } catch (error) {
    return next(error);
  }
}

async function updateShift(request, response, next) {
  try {
    const { shiftId, employeeName, date, startTime, endTime } = request.body;

    if (!shiftId || !employeeName || !date || !startTime || !endTime) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const shift = await shiftService.updateShift(
      shiftId,
      employeeName,
      date,
      startTime,
      endTime
    );

    return response.status(200).json(shift);
  } catch (error) {
    return next(error);
  }
}

async function deleteShift(request, response, next) {
  try {
    const success = await shiftService.deleteShift(request.body.shiftId);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete shift'
      );
    }

    return response.status(200).json({ message: 'Shift Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getShift,
  createShift,
  updateShift,
  deleteShift,
};
