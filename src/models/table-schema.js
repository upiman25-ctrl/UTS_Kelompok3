module.exports = (db) =>
  db.model(
    'table',
    db.Schema({
      id: {
        type: Number,
        unique: true,
      },
      orders: { type: Array, required: true },
      date: Date,
      waiter: String,
      catatan: String,
    })
  );
