const { reservation } = require('../../../models').default;

async function getreservation() {
  return reservation.find({});
}

async function create(table, date) {
  return reservation.create({ table, date });
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
