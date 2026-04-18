module.exports = (db) =>
  db.model(
    'User',
    db.Schema({
      fullName: { type: String, required: true },
      
      email: { type: String, required: true, unique: true },
      
      password: { type: String, required: true },
      
      role: { 
        type: String, 
        enum: ['admin', 'kasir', 'koki', 'pelayan'], 
        default: 'pelayan',
        required: true 
      },
      
      isActive: { type: Boolean, default: true }

    }, { 
      timestamps: true 
    })
  );