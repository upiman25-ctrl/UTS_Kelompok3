module.exports = (db) =>
  db.model(
    'order',
    db.Schema({
      id : {type: String, unique: true},
      orders : Array,
      date : Date,
      waiter : String,
      catatan : String,
    })
  );
