// Require moongose
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Create the model
let Bookings = mongoose.model('bookings', {
  author: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  house: {
    type: ObjectId,
    ref: 'houses',
    required: true
  }
})

// Export model
module.exports = Bookings
