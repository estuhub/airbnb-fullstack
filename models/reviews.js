// Require moongose
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Create the model
let Reviews = mongoose.model('Reviews', {
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
  },
  rating: Number
})

// Export model
module.exports = Reviews
