const express = require('express');

const auth = require('./components/auth/auth-route');
const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const product = require('./components/product/product-route');
const category = require('./components/category/category-route');
const role = require('./components/role/role-route');
module.exports = () => {
  const app = express.Router();

  auth(app);
  books(app);
  users(app);
  product(app);
  category(app);
  role(app);


  return app;
};
