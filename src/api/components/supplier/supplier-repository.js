const { Supplier } = require('../../../models').default;

async function getSupplier() {
  return Supplier.find({});
}

async function createSupplier(supplierId, name, contact) {
  return Supplier.create({ supplierId, name, contact });
}

async function updateSupplier(supplierId, name, contact) {
  return Supplier.findOneAndUpdate(
    { supplierId },
    { supplierId, name, contact },
    { new: true }
  );
}

async function deleteSupplier(name) {
  return Supplier.findOneAndDelete({ name });
}

module.exports = {
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
