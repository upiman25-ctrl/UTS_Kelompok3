module.exports = (db) =>
  db.model(
    'Product',
    db.Schema({
      name: { type: String, required: true, unique: true },
      
      description: { type: String, required: false },
      
      price: { type: Number, required: true, min: 0 },
      
      stock: { type: Number, required: true, default: 0, min: 0 },
      
      category: { 
        type: String, 
        enum: ['makanan utama', 'snack', 'minuman', 'dessert'], 
        required: true 
      },
      
      isAvailable: { type: Boolean,
        
        
        default: function() {
          return this.stock > 0;
          },}

    }, { 
      timestamps: true 
    })
  );