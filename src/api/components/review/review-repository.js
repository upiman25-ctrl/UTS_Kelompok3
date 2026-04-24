const { Review } = require('../../../models').default;

async function getReviews() {
  return Review.find({});
}

async function getReviewById(id) {
  return Review.findById(id);
}

async function create(data) {
  return Review.create(data);
}

async function update(id, data) {
  return Review.findByIdAndUpdate(id, data, { new: true });
}

async function remove(id) {
  return Review.findByIdAndDelete(id);
}

module.exports = {
  getReviews,
  getReviewById,
  create,
  update,
  remove,
};
