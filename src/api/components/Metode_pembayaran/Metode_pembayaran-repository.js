const { MetodePembayaran } = require('../../../models');

async function getMetodePembayaran() {
  return MetodePembayaran.find();
}

async function create(name, description, isActive) {
  return MetodePembayaran.create({ name, description, isActive });
}

async function updateMetodePembayaran(id, name, description, isActive) {
  return MetodePembayaran.findByIdAndUpdate(
    id,
    { name, description, isActive },
    { new: true }
  );
}

async function deleteMetodePembayaran(id) {
  const result = await MetodePembayaran.findByIdAndDelete(id);
  return !!result;
}

module.exports = {
  getMetodePembayaran,
  create,
  updateMetodePembayaran,
  deleteMetodePembayaran,
};
