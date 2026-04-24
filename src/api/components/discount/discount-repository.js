const { discount } = require('../../../models').default;

async function getDiscount() {
  return discount.find({});
}

async function create(title, discountCode, amount, expiredAt) {
  return discount.create({ title, discountCode, amount, expiredAt });
}
async function updateDiscount(id, title, discountCode, amount, expiredAt) {
  return discount.findByIdAndUpdate(
    id,
    { title, discountCode, amount, expiredAt },
    { new: true }
  );
}
async function deleteDiscount(id) {
  return discount.findByIdAndDelete(id);
}

module.exports = {
  getDiscount,
  create,
  updateDiscount,
  deleteDiscount,
};
