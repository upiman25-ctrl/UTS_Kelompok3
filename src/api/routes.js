const express = require('express');

const auth = require('./components/auth/auth-route');
const users = require('./components/users/users-route');
const discount = require('./components/discount/discount-route');
const Metode_Pembayaran = require('./components/Metode_pembayaran/Metode_pembayaran-route');
const payment = require('./components/payment/payment-route');
const tax = require('./components/tax/tax-route');

module.exports = () => {
  const app = express.Router();
  Metode_Pembayaran(app);
  payment(app);
  tax(app);
  discount(app);
  auth(app);
  users(app);

  return app;
};
