const express = require('express');
const notificationController = require('./notification-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/notification', route);

  route.get('/', notificationController.getNotifications);
  route.post('/', notificationController.createNotification);
  route.put('/:id', notificationController.markAsRead);
  route.delete('/:id', notificationController.deleteNotification);
};
