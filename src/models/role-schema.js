module.exports = (db) =>
  db.model(
    'Role',
    db.Schema({
      name: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true 
      },
      
      description: { 
        type: String, 
        required: false 
      },

      permissions: [{ 
        type: String 
      }]

    }, { 
      timestamps: true 
    })
  );