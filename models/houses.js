// Require moongose
const mongoose = require('mongoose')

// Create the model
let Houses = mongoose.model('Houses', {
  description: {
    type: String,
    required: true
  },
  host: {
    required: true
  },
  location: {
    type: String,
    required: true
  },
  photos: [
    {
      type: String
    }
  ],
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

// Export model
module.exports = Houses
