const { Notification } = require('../../../models').default;

async function getNotifications() {
  return Notification.find({});
}

async function getNotificationById(id) {
  return Notification.findById(id);
}

async function create(data) {
  return Notification.create(data);
}

async function markAsRead(id) {
  return Notification.findByIdAndUpdate(id, { isRead: true }, { new: true });
}

async function remove(id) {
  return Notification.findByIdAndDelete(id);
}

module.exports = {
  getNotifications,
  getNotificationById,
  create,
  markAsRead,
  remove,
};
