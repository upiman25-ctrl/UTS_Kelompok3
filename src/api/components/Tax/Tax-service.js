const taxRepository = require('./Tax-repository');

async function getTaxes() {
  return taxRepository.getTaxes();
}

async function createTax(name, rate, isActive) {
  return taxRepository.createTax(name, rate, isActive);
}

async function updateTax(id, name, rate, isActive) {
  return taxRepository.updateTax(id, name, rate, isActive);
}

async function deleteTax(id) {
  return taxRepository.deleteTax(id);
}

module.exports = {
  getTaxes,
  createTax,
  updateTax,
  deleteTax,
};
