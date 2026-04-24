const metode_pembayaranRepository = require('./metode_pembayaran-repository');

async function getMetodePembayaran() {
  return metode_pembayaranRepository.getMetodePembayaran();
}

async function create(name, description, isActive) {
  return metode_pembayaranRepository.create(name, description, isActive);
}

async function updateMetodePembayaran(id, name, description, isActive) {
  return metode_pembayaranRepository.updateMetodePembayaran(id, name, description, isActive);
}

async function deleteMetodePembayaran(id) {
  return metode_pembayaranRepository.deleteMetodePembayaran(id);
}

module.exports = {
  getMetodePembayaran,
  create,
  updateMetodePembayaran,
  deleteMetodePembayaran,
};