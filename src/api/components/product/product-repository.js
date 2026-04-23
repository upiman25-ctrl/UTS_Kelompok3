const { Product } = require('../../../models');

async function getProduct() {
  return Product.find({});
}

async function createProduct(name, description, price, stock, category) {
  return Product.create({ name, description, price, stock, category });
}

async function updateProduct(name, description, price, stock, category) {
  return Product.findOneAndUpdate(
    { name },
    { name, description, price, stock, category },
    { new: true }
  );
}

async function deleteProduct(id) {
  return Product.findByIdAndRemove(id);
}

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
