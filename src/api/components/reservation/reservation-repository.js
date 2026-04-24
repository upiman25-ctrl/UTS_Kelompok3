const { reservation } = require('../../../models');

async function getreservation() {
  return reservation.find({});
}

async function create(id, order, date, waiter, catatan) {
  return reservation.create({ id, order, date, waiter, catatan });
}
async function updatereservation(id, table, date) {
  return reservation.findByIdAndUpdate(id, { table, date }, { new: true });
}
async function deletereservation(id) {
  return reservation.findByIdAndDelete(id);
}

module.exports = {
  getreservation,
  create,
  updatereservation,
  deletereservation,
};
