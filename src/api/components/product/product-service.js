const productRepository = require('./product-repository');

async function getProduct() {
  return productRepository.getProduct();
}

async function create(name, description, price, stock, category) {
  return productRepository.createProduct(name, description, price, stock, category);
}

async function updateProduct(name, description, price, stock, category) {
  return productRepository.updateProduct(name, description, price, stock, category);
}

async function deleteProduct(id) {
  return productRepository.deleteProduct(id);
}


module.exports = {
  getProduct,
  create,
  updateProduct,
  deleteProduct,
};
