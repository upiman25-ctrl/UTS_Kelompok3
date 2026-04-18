const reservationRepository = require('./reservation-repository');

async function getreservation() {
  return reservationRepository.getreservation();
}

async function create(Id, order, date, waiter, catatan) {
  return reservationRepository.create(Id, order, date, waiter, catatan);
}

async function updatereservation(id, table, date) {
  return reservationRepository.updatereservation(id, table, date);
}
async function deletereservation(id) {
  return reservationRepository.deletereservation(id);
}
module.exports = {
  getreservation,
  create,
  updatereservation,
  deletereservation,
};
