const reservationRepository = require('./reservation-repository');

async function getreservation() {
  return reservationRepository.getreservation();
}

async function create(table, date) {
  return reservationRepository.create(table, date);
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
