const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookingSchema = new Schema({
  id: ObjectId,
  date: {
    type: Date,
  },
  service: {
    type: String,
  },
  user_name: {
    type: String
  },
  user_phone: {
    type: String
  }
});

const Booking = mongoose.model('bookings', BookingSchema);

module.exports = Booking;