module.exports = (db) =>
  db.model(
    'Report',
    db.Schema({
    reportId: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    total: {type: Number, required: true},
    date: {type: Date, required: true},
    })
  );
