module.exports = (db) =>
  db.model(
    'reservation',
    db.Schema({
      
      table: [
        {
          type: db.Schema.Types.ObjectId,
          ref: 'table',
        },
      ],
      date: Date,
    })
  );
