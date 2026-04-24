const orderRepository = require('./order-repository');

async function getorder() {
  return orderRepository.getorder();
}

async function create(order,date,waiter,catatan) {
  return orderRepository.create(order,date,waiter,catatan);
}
async function updateorder(id,order,date,waiter,catatan) {
  return orderRepository.updateorder(id,order,date,waiter,catatan);
}
async function deleteorder(id) {
  return orderRepository.deleteorder(id);
}
module.exports = {
  getorder,
  create,
  updateorder,
  deleteorder
};
