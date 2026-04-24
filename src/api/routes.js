const express = require('express');

const inventory = require('./components/inventory/inventory-route');
const report = require('./components/report/report-routes');
const shift = require('./components/shift/shft-route');
const supplier = require('./components/supplier/supplier-route');
const users = require('./components/users/user-route');
const discount = require('./components/discount/discount-route');
const metode = require('./components/Metode_pembayaran/Metode_pembayaran-route');

const payment = require(`./components/payment/payment-route`);
const tax = require(`./components/tax/tax-route`);
const reservation = require('./components/reservation/reservation-route');
const order = require('./components/order/order-route');
const table = require('./components/table/table-route');
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
  reservation(app);
  order(app);
  table(app);
  deliveries(app);
  address(app);
  review(app);
  notification(app);
  product(app);
  metode(app);
  payment(app);
  tax(app);
  discount(app);
  users(app);

  return app;
};
