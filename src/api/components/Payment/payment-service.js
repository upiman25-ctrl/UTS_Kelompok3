const paymentRepository = require('./payment-repository');

async function getPaymentMethods() {
  return paymentRepository.getPaymentMethods();
}

async function createPaymentMethod(method, discount, amount, status, paidAt) {
  return paymentRepository.create(method, discount, amount, status, paidAt);
}
async function updatePaymentMethod(id, method, discount, amount, status, paidAt) {
  return paymentRepository.updatePayment(id, method, discount, amount, status, paidAt);
}
async function deletePaymentMethod(id) {
  return paymentRepository.deletePayment(id);
}

module.exports = {
  getPaymentMethods,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
