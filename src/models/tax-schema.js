module.exports = (db) =>
  db.model(
    'tax',
    db.Schema({
      name: { type: String, required: true }, 
      rate: { type: Number,
         required: true }, 
      
      isActive: {
        type: Boolean,
        default: true,
      },
    })
  ); 