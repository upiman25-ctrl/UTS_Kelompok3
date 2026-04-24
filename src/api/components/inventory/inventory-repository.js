const { Inventory } = require('../../../models').default;

async function getInventory() {
  return Inventory.find({});
}

async function createInventory(name, count, types, expiredAt) {
  return Inventory.create({ name, count, types, expiredAt });
}

async function updateInventory(name, count, types, expiredAt) {
  return Inventory.findOneAndUpdate(
    { name },
    { name, count, types, expiredAt },
    { new: true }
  );
}

async function deleteInventory(name) {
  return Inventory.findOneAndDelete({ name });
}

module.exports = {
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};
