const express = require('express');

const ReportController = require('./report-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/reports', route);

  // Get list of reports
  route.get('/', ReportController.getReport);

  // Create a new report
  route.post('/', ReportController.createReport);

  // TODO: Get a report by id
  route.get('/:id', ReportController.getReport);

  // TODO: Update a report by id
  route.put('/', ReportController.updateReport);

  // TODO: Delete a report by id
  route.delete('/', ReportController.deleteReport);
};
