const express = require('express');
const reviewController = require('./review-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/reviews', route);

  route.get('/', reviewController.getReviews);
  route.post('/', reviewController.createReview);
  route.put('/:id', reviewController.updateReview);
  route.delete('/:id', reviewController.deleteReview);
};
