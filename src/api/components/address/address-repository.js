const { Address } = require('../../../models');

async function getAddresses() {
  return Address.find({});
}

async function getAddressById(id) {
  return Address.findById(id);
}

async function create(data) {
  return Address.create(data);
}

async function update(id, data) {
  return Address.findByIdAndUpdate(id, data, { new: true });
}

async function remove(id) {
  return Address.findByIdAndDelete(id);
}

module.exports = {
  getAddresses,
  getAddressById,
  create,
  update,
  remove,
};
