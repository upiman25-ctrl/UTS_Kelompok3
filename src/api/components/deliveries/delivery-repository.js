const { Delivery } = require('../../../models').default;

async function getDeliveries() {
  return Delivery.find({});
}

async function getDeliveryById(id) {
  return Delivery.findById(id);
}

async function create(data) {
  return Delivery.create(data);
}

async function updateStatus(id, status) {
  return Delivery.findByIdAndUpdate(id, { status }, { new: true });
}

async function updateAddress(id, address) {
  return Delivery.findByIdAndUpdate(id, { address }, { new: true });
}

async function remove(id) {
  return Delivery.findByIdAndDelete(id);
}

module.exports = {
  getDeliveries,
  getDeliveryById,
  create,
  updateStatus,
  updateAddress,
  remove,
};
