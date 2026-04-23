const productService = require('./product-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getProduct(request, response, next) {
  try {
    const product = await productService.getProduct();

    return response.status(200).json(product);
  } catch (error) {
    return next(error);
  }
}

async function createProduct(request, response, next) {
  try {
    const { name, description, price, stock, category } = request.body;

    if (!name || !description || !price || !stock || !category) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const Product = await productService.create(
      name,
      description,
      price,
      stock,
      category
    );

    return response.status(200).json(Product);
  } catch (error) {
    return next(error);
  }
}

async function updateProduct(request, response, next) {
  try {
    const { name, description, price, stock, category } = request.body;

    if (!name || !description || !price || !stock || !category) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const product = await productService.updateProduct(
      name,
      description,
      price,
      stock,
      category
    );

    return response.status(200).json(product);
  } catch (error) {
    return next(error);
  }
}

async function deleteProduct(request, response, next) {
  try {
    const product = await productService.deleteProduct(request.params.id); 
    
    if (!product) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Product not found');
    }

    return response.status(200).json(product);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
