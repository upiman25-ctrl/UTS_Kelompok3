const { Payment } = require('../../../models');

async function getPaymentMethods() {
  return Payment.find({});
}

async function create(method, discount, amount, status, paidAt) {
  return Payment.create({ method, discount, amount, status, paidAt });
}

async function updatePayment(id, method, discount, amount, status, paidAt) { 
  return Payment.findByIdAndUpdate(
    id,
    { method, discount, amount, status, paidAt },
    { new: true }
  );
}

async function deletePayment(id) {
  return Payment.findByIdAndDelete(id);
}

module.exports = {
  getPaymentMethods,
  create,
  updatePayment,
  deletePayment,
};