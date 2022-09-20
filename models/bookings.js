// Require moongose
const mongoose = require('mongoose')

// Create the model
let Bookings = mongoose.model('Bookings', {
  author: {
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
    required: true
  }
})

// Export model
module.exports = Bookings
