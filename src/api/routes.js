const express = require('express');

const inventory = require('./components/inventory/inventory-route');
const report = require('./components/report/report-routes');
const shift = require('./components/shift/shft-route');
const supplier = require('./components/supplier/supplier-route');

module.exports = () => {
  const app = express.Router();

  inventory(app);
  report(app);
  shift(app);
  supplier(app);
  return app;
};
