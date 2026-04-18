const discountRepository = require('./discount-repository');

async function getDiscounts() {
  return discountRepository.getDiscount();
}

async function create(Title, DiscountCode, Amount, ExpiredAt) {
  return discountRepository.create(Title, DiscountCode, Amount, ExpiredAt);
}
async function updateDiscount(id, Title, DiscountCode, Amount, ExpiredAt) {
  return discountRepository.updateDiscount(id, Title, DiscountCode, Amount, ExpiredAt);
} 
async function deleteDiscount(id) {
  return discountRepository.deleteDiscount(id);
}
module.exports = {
  getDiscounts,
  create,
  updateDiscount,
  deleteDiscount

};
