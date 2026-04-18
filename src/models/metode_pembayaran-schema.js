module.exports = (db) =>
  db.model(
    'Metode_Pembayaran',
    db.Schema({
      name: { type: String, required: true },
      description: { type: String, required: true },
      isActive: {
        type: Boolean,
        default: true,
      },
    })
  );