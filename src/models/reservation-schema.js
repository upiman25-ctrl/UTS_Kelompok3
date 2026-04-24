module.exports = (db) =>
  db.model(
    'reservation',
    db.Schema({
      table: {
        type: Number,
        required: true,
      },
      date: Date,
    })
  );
