const { Category } = require('../../../models');

async function getCategory() {
  return Category.find({});
}

async function createCategory(name, description, isActive) {
  return Category.create({ name, description, isActive });
}

async function updateCategory(name, description, isActive) {
  return Category.findOneAndUpdate(
    { name },
    { name, description, isActive },
    { new: true }
  );
}

async function deleteCategory(id) {
  return Category.findOneAndDelete({ _id: id });
}

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
