// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.send('Hello from bookings!')
})

// Export
module.exports = router
