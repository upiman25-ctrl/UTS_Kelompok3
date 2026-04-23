const categoryRepository = require('./category-repository');

async function getCategory() {
  return categoryRepository.getCategory();
}

async function createCategory(name, description, isActive) {
  return categoryRepository.createCategory(name, description, isActive);
}

async function updateCategory(name, description, isActive) {
  return categoryRepository.updateCategory(name, description, isActive);
}

async function deleteCategory(id) {
  return categoryRepository.deleteCategory(id);
}

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
