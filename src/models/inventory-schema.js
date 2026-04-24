module.exports = (db) =>
  db.model(
    'Inventory',
    db.Schema({
      name: {type: String, required: true, unique: true},
      count: {type: Number, required: true},
      types: {type: String, enum: ['daging', 'sayuran', 'buah'], required: true},
      expiredAt: Date,
    })
  );
