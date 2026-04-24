module.exports = (db) =>
  db.model(
    'Notification',
    db.Schema({
      type: {
        type: String,
        enum: ['order_masuk', 'order_selesai'],
        required: true,
      },

      message: {
        type: String,
        required: true,
      },

      isRead: {
        type: Boolean,
        default: false,
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },
    })
  );
