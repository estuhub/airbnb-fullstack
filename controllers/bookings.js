// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.post('/', (req, res) => {
  res.send('Post from bookings!')
})

// Export
module.exports = router
