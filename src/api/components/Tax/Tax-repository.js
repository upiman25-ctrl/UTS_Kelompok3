const { tax } = require('../../../models').default;

async function getTaxes() {
  return tax.find({});
}

async function createTax(name, rate, isActive) {
  return tax.create({ name, rate, isActive });
}

async function updateTax(id, name, rate, isActive) {
  return tax.findByIdAndUpdate(id, { name, rate, isActive }, { new: true });
}

async function deleteTax(id) {
  return tax.findByIdAndDelete(id);
}

module.exports = {
  getTaxes,
  createTax,
  updateTax,
  deleteTax,
};
