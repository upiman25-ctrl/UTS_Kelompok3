const { Shift } = require('../../../models');

async function getShift() {
  return Shift.find({});
}

async function createShift(shiftId, employeeName, date, startTime, endTime) {
  return Shift.create({ shiftId, employeeName, date, startTime, endTime });
}

async function updateShift(shiftId, employeeName, date, startTime, endTime) {
  return Shift.findOneAndUpdate(
    { shiftId },
    { shiftId, employeeName, date, startTime, endTime },
    { new: true }
  );
}

async function deleteShift(shiftId) {
  return Shift.findOneAndDelete({ shiftId });
}

module.exports = {
  getShift,
  createShift,
  updateShift,
  deleteShift,
};
