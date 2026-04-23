const metodePembayaranRepository = require('./Metode_pembayaran-repository');

async function getMetodePembayaran() {
  return metodePembayaranRepository.getMetodePembayaran();
}

async function create(name, description, isActive) {
  return metodePembayaranRepository.create(name, description, isActive);
}

async function updateMetodePembayaran(id, name, description, isActive) {
  return metodePembayaranRepository.updateMetodePembayaran(
    id,
    name,
    description,
    isActive
  );
}

async function deleteMetodePembayaran(id) {
  return metodePembayaranRepository.deleteMetodePembayaran(id);
}

module.exports = {
  getMetodePembayaran,
  create,
  updateMetodePembayaran,
  deleteMetodePembayaran,
};
