const express = require('express');

const inventory = require('./components/inventory/inventory-route');
const report = require('./components/report/report-routes');
const shift = require('./components/shift/shft-route');
const supplier = require('./components/supplier/supplier-route');
const auth = require('./components/auth/auth-route');
const deliveries = require('./components/deliveries/delivery-route');
const address = require('./components/address/address-route');
const review = require('./components/review/review-route');
const notification = require('./components/notification/notification-route');
const product = require('./components/product/product-route');

module.exports = () => {
  const app = express.Router();

  inventory(app);
  report(app);
  shift(app);
  supplier(app);
  auth(app);
  deliveries(app);
  address(app);
  review(app);
  notification(app);
  product(app)

  return app;
};
