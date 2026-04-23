module.exports = (db) =>
  db.model(
    'discount',
    db.Schema({
      title: { type: String, required: true },
      discountCode: { type: String, required: true, unique: true },
      amount: { type: Number, 
        min:1,
        max : 25,
        required: true },
        expiredAt: Date,
    })
  );