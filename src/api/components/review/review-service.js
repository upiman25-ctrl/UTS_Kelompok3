const reviewRepository = require('./review-repository');

async function getReviews() {
  return reviewRepository.getReviews();
}

async function getReviewById(id) {
  return reviewRepository.getReviewById(id);
}

async function createReview(data) {
  return reviewRepository.create(data);
}

async function updateReview(id, data) {
  return reviewRepository.update(id, data);
}

async function deleteReview(id) {
  return reviewRepository.remove(id);
}

module.exports = {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
