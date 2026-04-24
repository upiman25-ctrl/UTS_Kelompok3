module.exports = (db) =>
  db.model(
    'order',
    db.Schema({
      orders: [
        {
          type: db.Schema.Types.ObjectId,
          ref: 'Product', // This MUST match exactly how you named your product model (e.g., 'product' or 'products')
        }
      ],
      date : Date,
      waiter : String,
      catatan : String,
    })
  );
