module.exports = (db) =>
  db.model(
    'reservation',
    db.Schema({
      id: {
        type: Number,
        unique: true,
        required: true,
      },
      table: [
        {
          type: db.Schema.Types.ObjectId,
          ref: 'table',
        },
      ],
      date: Date,
    })
  );
