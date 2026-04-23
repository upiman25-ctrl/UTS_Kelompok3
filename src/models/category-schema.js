module.exports = (db) =>
  db.model(
    'Category',
    db.Schema(
      {
        name: { type: String, required: true, unique: true },

        description: { type: String, required: false },

        isActive: { type: Boolean, default: true },
      },
      {
        timestamps: true,
      }
    )
  );
