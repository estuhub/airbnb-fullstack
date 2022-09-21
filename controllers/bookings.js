// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Post from bookings!')
  } else {
    res.redirect('auth/login')
  }
})

// Export
module.exports = router
