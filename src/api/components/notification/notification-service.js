const notificationRepository = require('./notification-repository');

async function getNotifications() {
  return notificationRepository.getNotifications();
}

async function createNotification(data) {
  return notificationRepository.create(data);
}

async function markAsRead(id) {
  return notificationRepository.markAsRead(id);
}

async function deleteNotification(id) {
  return notificationRepository.remove(id);
}

module.exports = {
  getNotifications,
  createNotification,
  markAsRead,
  deleteNotification,
};
