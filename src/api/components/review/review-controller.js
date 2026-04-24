const reviewService = require('./review-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getReviews(req, res, next) {
  try {
    const result = await reviewService.getReviews();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function createReview(req, res, next) {
  try {
    const { rating, comment } = req.body;

    if (!rating || !comment) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Rating dan comment wajib diisi'
      );
    }

    const result = await reviewService.createReview(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function updateReview(req, res, next) {
  try {
    const { id } = req.params;

    const result = await reviewService.updateReview(id, req.body);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function deleteReview(req, res, next) {
  try {
    const { id } = req.params;

    const result = await reviewService.deleteReview(id);

    return res.status(200).json({
      message: 'Review deleted',
      result,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
};
