module.exports = (db) =>
  db.model(
    'Supplier',
    db.Schema({
        supplierId: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        contact: {type: String, required: true},
    })
  );
