const addressRepository = require('./address-repository');

async function getAddresses() {
  return addressRepository.getAddresses();
}

async function getAddressById(id) {
  return addressRepository.getAddressById(id);
}

async function createAddress(data) {
  return addressRepository.create(data);
}

async function updateAddress(id, data) {
  return addressRepository.update(id, data);
}

async function deleteAddress(id) {
  return addressRepository.remove(id);
}

module.exports = {
  getAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
};
