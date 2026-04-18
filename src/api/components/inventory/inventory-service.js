const inventoryRepository = require('./inventory-repository');

async function getInventory() {
  return inventoryRepository.getInventory();
}

async function createInventory(name, count, types, expiredAt) {
  return inventoryRepository.createInventory(name, count, types, expiredAt);
}

async function updateInventory(name, count, types, expiredAt) {
  return inventoryRepository.updateInventory(name, count, types, expiredAt);
}

async function deleteInventory(name) {
  return inventoryRepository.deleteInventory(name);
}

module.exports = {
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};
