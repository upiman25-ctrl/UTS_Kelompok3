module.exports = (db) =>
  db.model(
    'Address',
    db.Schema({
      name: {
        type: String,
        required: true,
      },

      address: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      postalCode: {
        type: Number,
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },
    })
  );
