const ShiftRepository = require('./shift-repository');

async function getShift() {
  return ShiftRepository.getShift();
}

async function createShift(shiftId, employeeName, date, startTime, endTime) {
  return ShiftRepository.createShift(
    shiftId,
    employeeName,
    date,
    startTime,
    endTime
  );
}

async function updateShift(shiftId, employeeName, date, startTime, endTime) {
  return ShiftRepository.updateShift(
    shiftId,
    employeeName,
    date,
    startTime,
    endTime
  );
}

async function deleteShift(shiftId) {
  return ShiftRepository.deleteShift(shiftId);
}

module.exports = {
  getShift,
  createShift,
  updateShift,
  deleteShift,
};
