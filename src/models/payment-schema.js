module.exports = (db) =>
  db.model(
    'Payment',
    db.Schema({
      method: {
        type: db.Schema.Types.ObjectId,
        ref: 'Metode_Pembayaran',
        required: true,
      },
      discount: {
        type: db.Schema.Types.ObjectId,
        ref: 'discount',
        required: false,
      },
      amount: { type: Number, required: true },
      status: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending',
      },
      paidAt: Date,
    })
  );
