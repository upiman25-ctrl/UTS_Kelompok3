const { Metode_Pembayaran } = require('../../../models').default;

async function getMetodePembayaran() {
  return Metode_Pembayaran.find({});
}

async function create(name, description, isActive) {
  return Metode_Pembayaran.create({ name, description, isActive });
}

async function updateMetodePembayaran(id, name, description, isActive) {
  return Metode_Pembayaran.findByIdAndUpdate(
    id,
    { name, description, isActive },
    { new: true }
  );
}

async function deleteMetodePembayaran(id) {
  return Metode_Pembayaran.findByIdAndDelete(id);
}

module.exports = {
  getMetodePembayaran,
  create,
  updateMetodePembayaran,
  deleteMetodePembayaran,
};
