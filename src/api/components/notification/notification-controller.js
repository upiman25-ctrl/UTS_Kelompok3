const notificationService = require('./notification-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getNotifications(req, res, next) {
  try {
    const result = await notificationService.getNotifications();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function createNotification(req, res, next) {
  try {
    const { type, message } = req.body;

    if (!type || !message) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Type dan message wajib diisi'
      );
    }

    const result = await notificationService.createNotification(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function markAsRead(req, res, next) {
  try {
    const { id } = req.params;

    const result = await notificationService.markAsRead(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function deleteNotification(req, res, next) {
  try {
    const { id } = req.params;

    const result = await notificationService.deleteNotification(id);

    return res.status(200).json({
      message: 'Notification deleted',
      result,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getNotifications,
  createNotification,
  markAsRead,
  deleteNotification,
};
