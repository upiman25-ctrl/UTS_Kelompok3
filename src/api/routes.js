const express = require('express');

const auth = require('./components/auth/auth-route');
const books = require('./components/books/books-route');
const gacha = require('./components/gacha/gacha-route');
const users = require('./components/users/users-route');
const reservation = require('./components/reservation/reservation-route');
const order = require('./components/order/order-route');
const table = require('./components/table/table-route');
module.exports = () => {
  const app = express.Router();

  auth(app);
  books(app);
  users(app);
  reservation(app);
  order(app);
  table(app);
  return app;
};