// Require moongose
const mongoose = require('mongoose')

// Create the model
let Users = mongoose.model('users', {
  avatar: String,
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// Export model
module.exports = Users
