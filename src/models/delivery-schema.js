module.exports = (db) =>
  db.model(
    'Delivery',
    db.Schema({
      userId: {
        type: db.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },

      customerName: {
        type: String,
        required: true,
      },

      driverName: {
        type: String,
        required: true,
      },

      itemName: {
        type: Array,
        required: true,
      },

      address: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        enum: ['preparing', 'delivering', 'delivered'],
        default: 'preparing',
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },
    })
  );
