const orderRepository = require('./order-repository');

async function getorder() {
  return orderRepository.getorder();
}

async function create(Id,order,date,waiter,catatan) {
  return orderRepository.create(Id,order,date,waiter,catatan);
}
async function updateorder(Id,order,date,waiter,catatan) {
  return orderRepository.updateorder(Id,order,date,waiter,catatan);
}
async function deleteorder(Id) {
  return orderRepository.deleteorder(Id);
}
module.exports = {
  getorder,
  create,
  updateorder,
  deleteorder
};
