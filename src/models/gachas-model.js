module.exports = (db) =>
  db.model(
    'Gachas',
    db.Schema({
      userId: {
        type: db.Schema.Types.ObjectId,
        ref: 'Users',
      },
      prizeName: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    })
  );