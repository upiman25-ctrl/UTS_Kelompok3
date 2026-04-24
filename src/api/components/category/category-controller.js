const categoryService = require('./category.service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getCategory(request, response, next) {
  try {
    const category = await categoryService.getCategory();

    return response.status(200).json(category);
  } catch (error) {
    return next(error);
  }
}

async function createCategory(request, response, next) {
  try {
    const { name, description, isActive } = request.body;

    if (!name || !description || !isActive) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const category = await categoryService.createCategory(
      name,
      description,
      isActive
    );

    return response.status(200).json(category);
  } catch (error) {
    return next(error);
  }
}

async function updateCategory(request, response, next) {
  try {
    const { name, description, isActive } = request.body;

    if (!name || !description || !isActive) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const category = await categoryService.updateCategory(
      name,
      description,
      isActive
    );

    return response.status(200).json(category);
  } catch (error) {
    return next(error);
  }
}

async function deleteCategory(request, response, next) {
  try {
    const success = await categoryService.deleteCategory(request.params.id);
    if (!success) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Category not found');
    }
    return response
      .status(200)
      .json({ message: 'Category deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
