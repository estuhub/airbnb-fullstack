// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/one')
  } else {
    res.redirect('/auth/login')
  }
})

// Export
module.exports = router
