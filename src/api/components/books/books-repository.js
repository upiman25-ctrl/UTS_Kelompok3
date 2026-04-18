const { Discount } = require('../../../models');

async function getDiscount() {
  return Books.find({});
}

async function create(Title, DiscountCode, Amount, ExpiredAt) {
  return Discount.create({ title: Title, discountCode: DiscountCode, amount: Amount, expiredAt: ExpiredAt });
}

module.exports = {
  getDiscount,
  create,
};
