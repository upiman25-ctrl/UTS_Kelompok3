const { Product } = require('../../../models');

async function getProduct() {
  return Product.find({});
}
async function getProductsDelivery() {
  return Product.find(
    {},
    {
      _id: 0,
      name: 1,
      description: 1,
      price: 1,
      stock: 1,
      category: 1,
    }
  );
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
  return Product.findByIdAndDelete(id);
}

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsDelivery,
};
