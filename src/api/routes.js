const express = require('express');

const auth = require('./components/auth/auth-route');
const users = require('./components/users/users-route');
const deliveries = require('./components/deliveries/delivery-route');
const address = require('./components/address/address-route');
const review = require('./components/review/review-route');
const notification = require('./components/notification/notification-route');

module.exports = () => {
  const app = express.Router();

  auth(app);
  users(app);
  deliveries(app);
  address(app);
  review(app);
  notification(app);

  return app;
};
