// Require moongose
const mongoose = require('mongoose')

// Create the model
let Reviews = mongoose.model('Reviews', {
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
  },
  rating: Number
})

// Export model
module.exports = Reviews
