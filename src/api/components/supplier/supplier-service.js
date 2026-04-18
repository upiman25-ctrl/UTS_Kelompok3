const SupplierRepository = require('./supplier-repository');

async function getSupplier() {
  return SupplierRepository.getSupplier();
}

async function createSupplier(supplierId, name, contact) {
  return SupplierRepository.createSupplier(supplierId, name, contact);
}

async function updateSupplier(supplierId, name, contact) {
  return SupplierRepository.updateSupplier(supplierId, name, contact);
}

async function deleteSupplier(supplierId) {
  return SupplierRepository.deleteSupplier(supplierId);
}

module.exports = {
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
