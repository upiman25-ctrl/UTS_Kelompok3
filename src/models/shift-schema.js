/* eslint-disable prettier/prettier */
module.exports = (db) =>
  db.model(
    'Shift',
    db.Schema({
        shiftId: {type: String, required: true, unique: true},
        employeeName: {type: String, required: true},
        date: {type: Date, required: true},
        startTime: {type: String, required: true},
        endTime: {type: String, required: true},
    })
  );
